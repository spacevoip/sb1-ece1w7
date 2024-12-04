import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useAsteriskStore } from '../store/asteriskStore';
import ExtensionCard from '../components/Extensions/ExtensionCard';
import ExtensionForm from '../components/Extensions/ExtensionForm';

const Extensions = () => {
  const [showForm, setShowForm] = useState(false);
  const { extensions, addExtension, deleteExtension } = useAsteriskStore();

  const handleAddExtension = (extension: { number: string; name: string; tech: string }) => {
    addExtension(extension);
    setShowForm(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Extensions</h1>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Extension
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {extensions.map((extension) => (
          <ExtensionCard
            key={extension.number}
            extension={extension}
            onDelete={deleteExtension}
          />
        ))}
      </div>

      {extensions.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No extensions found. Add your first extension!</p>
        </div>
      )}

      {showForm && (
        <ExtensionForm
          onSubmit={handleAddExtension}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default Extensions;