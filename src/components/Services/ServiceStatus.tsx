import React from 'react';
import { CheckCircle2, XCircle, Info } from 'lucide-react';

interface ServiceStatusProps {
  name: string;
  isConnected: boolean;
  error?: string;
  details?: Record<string, any>;
}

const ServiceStatus: React.FC<ServiceStatusProps> = ({ 
  name, 
  isConnected, 
  error,
  details 
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex items-center gap-2">
          {isConnected ? (
            <>
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-green-600">Connected</span>
            </>
          ) : (
            <>
              <XCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-600">Disconnected</span>
            </>
          )}
        </div>
      </div>

      {isConnected && details && (
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Info className="w-4 h-4" />
            <span>Server Version: {details.version}</span>
          </div>
          {details.threadId && (
            <div className="text-sm text-gray-500">
              Thread ID: {details.threadId}
            </div>
          )}
        </div>
      )}
      
      {!isConnected && error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-md">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}
    </div>
  );
};

export default ServiceStatus;