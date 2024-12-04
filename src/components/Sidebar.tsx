import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Users, PhoneCall, Settings, BarChart } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8">
        <Phone className="w-8 h-8" />
        <h1 className="text-xl font-bold">Asterisk Manager</h1>
      </div>
      
      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded hover:bg-gray-800 ${
              isActive ? 'bg-gray-800' : ''
            }`
          }
        >
          <BarChart className="w-5 h-5" />
          Dashboard
        </NavLink>
        
        <NavLink
          to="/extensions"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded hover:bg-gray-800 ${
              isActive ? 'bg-gray-800' : ''
            }`
          }
        >
          <Phone className="w-5 h-5" />
          Extensions
        </NavLink>
        
        <NavLink
          to="/queues"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded hover:bg-gray-800 ${
              isActive ? 'bg-gray-800' : ''
            }`
          }
        >
          <Users className="w-5 h-5" />
          Queues
        </NavLink>
        
        <NavLink
          to="/calls"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded hover:bg-gray-800 ${
              isActive ? 'bg-gray-800' : ''
            }`
          }
        >
          <PhoneCall className="w-5 h-5" />
          Active Calls
        </NavLink>
        
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded hover:bg-gray-800 ${
              isActive ? 'bg-gray-800' : ''
            }`
          }
        >
          <Settings className="w-5 h-5" />
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;