import React, { useState } from 'react';

const Sidebar = ({ setActivePage }) => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white fixed">
      <div className="p-4">
        <h2 className="text-2xl font-semibold">Sidebar</h2>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="p-2 hover:bg-gray-700 rounded" onClick={() => setActivePage('personalDetails')}>
            <a href="#personalDetails">Personal Details</a>
          </li>
          <li className="p-2 hover:bg-gray-700 rounded" onClick={() => setActivePage('changePassword')}>
            <a href="#changePassword">Change Password</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
