import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatusCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatusCard: React.FC<StatusCardProps> = ({ title, value, icon: Icon, trend }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
          {trend && (
            <div className="flex items-center mt-2">
              <span
                className={`text-sm ${
                  trend.isPositive ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {trend.isPositive ? '+' : '-'}{trend.value}%
              </span>
            </div>
          )}
        </div>
        <div className="bg-blue-50 p-3 rounded-full">
          <Icon className="w-6 h-6 text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default StatusCard;