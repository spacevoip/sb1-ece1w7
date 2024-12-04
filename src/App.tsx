import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Extensions from './pages/Extensions';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/extensions" element={<Extensions />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;