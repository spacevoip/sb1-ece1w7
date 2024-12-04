import React, { useEffect, useState } from 'react';
import { useServiceStore } from '../store/serviceStore';
import { checkDatabaseHealth } from '../services/api';
import ServiceStatus from '../components/Services/ServiceStatus';
import { RefreshCw } from 'lucide-react';

const Settings = () => {
  const { databaseStatus, setDatabaseStatus } = useServiceStore();
  const [isChecking, setIsChecking] = useState(false);

  const checkServices = async () => {
    setIsChecking(true);
    try {
      const dbStatus = await checkDatabaseHealth();
      setDatabaseStatus(dbStatus);
    } catch (error) {
      console.error('Error checking services:', error);
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    checkServices();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">System Status</h1>
        <button
          onClick={checkServices}
          disabled={isChecking}
          className={`px-4 py-2 rounded-md flex items-center gap-2 ${
            isChecking 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
          }`}
        >
          <RefreshCw className={`w-4 h-4 ${isChecking ? 'animate-spin' : ''}`} />
          Refresh Status
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceStatus
          name="Database Connection"
          isConnected={databaseStatus?.isConnected ?? false}
          error={databaseStatus?.error}
          details={databaseStatus?.details}
        />
      </div>
    </div>
  );
}

export default Settings;