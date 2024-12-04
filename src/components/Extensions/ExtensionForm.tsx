import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';

interface ExtensionFormProps {
  onSubmit: (extension: { number: string; name: string; tech: string }) => void;
  onClose: () => void;
}

const ExtensionForm: React.FC<ExtensionFormProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    number: '',
    name: '',
    tech: 'SIP',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ number: '', name: '', tech: 'SIP' });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add New Extension</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Extension Number
            </label>
            <input
              type="text"
              required
              pattern="[0-9]+"
              value={formData.number}
              onChange={(e) =>
                setFormData({ ...formData, number: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 1001"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Technology
            </label>
            <select
              value={formData.tech}
              onChange={(e) => setFormData({ ...formData, tech: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="SIP">SIP</option>
              <option value="IAX2">IAX2</option>
              <option value="PJSIP">PJSIP</option>
            </select>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Add Extension
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExtensionForm;