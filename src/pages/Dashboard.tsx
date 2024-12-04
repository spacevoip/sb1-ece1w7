import React from 'react';
import { Phone, Users, PhoneCall, Clock } from 'lucide-react';
import StatusCard from '../components/Dashboard/StatusCard';
import { useAsteriskStore } from '../store/asteriskStore';

const Dashboard = () => {
  const { systemStatus, extensions, queues, activeCalls } = useAsteriskStore();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatusCard
          title="Active Calls"
          value={systemStatus?.activeCalls || 0}
          icon={PhoneCall}
        />
        <StatusCard
          title="Extensions"
          value={extensions.length}
          icon={Phone}
        />
        <StatusCard
          title="Active Queues"
          value={queues.length}
          icon={Users}
        />
        <StatusCard
          title="Uptime"
          value={systemStatus?.uptime || '0:00:00'}
          icon={Clock}
        />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-4">
            {activeCalls.map((call) => (
              <div key={call.id} className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">Call from {call.from} to {call.to}</p>
                  <p className="text-sm text-gray-600">
                    Duration: {call.duration}s | Status: {call.status}
                  </p>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(call.timestamp).toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;