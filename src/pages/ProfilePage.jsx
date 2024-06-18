import React, { useState } from 'react';
import Sidebar from '../components/layout/SideBar';
import PersonalDetails from '../components/user/Profile';
import ChangePassword from '../components/user/ChangePassword';

const ProfilePage = () => {
  const [activePage, setActivePage] = useState('personalDetails');

  const renderPage = () => {
    switch (activePage) {
      case 'personalDetails':
        return <PersonalDetails />;
      case 'changePassword':
        return <ChangePassword />;
      default:
        return <PersonalDetails />;
    }
  };

  return (
    <div className="flex">
      <Sidebar setActivePage={setActivePage} />
      <div className="ml-64 flex-1 p-8">{renderPage()}</div>
    </div>
  );
};

export default ProfilePage;
