import React from 'react';
import { Phone, Trash2 } from 'lucide-react';
import type { Extension } from '../../types/asterisk';

interface ExtensionCardProps {
  extension: Extension;
  onDelete: (number: string) => void;
}

const ExtensionCard: React.FC<ExtensionCardProps> = ({ extension, onDelete }) => {
  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-500',
    busy: 'bg-red-500',
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 p-3 rounded-full">
            <Phone className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{extension.name}</h3>
            <p className="text-gray-600">Extension: {extension.number}</p>
          </div>
        </div>
        <button
          onClick={() => onDelete(extension.number)}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${statusColors[extension.status]}`} />
          <span className="text-sm text-gray-600 capitalize">{extension.status}</span>
        </div>
        <span className="text-sm text-gray-500">{extension.tech}</span>
      </div>
    </div>
  );
};

export default ExtensionCard;