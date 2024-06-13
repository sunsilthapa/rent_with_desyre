import React from 'react';

const ChangePassword = () => {
  return (
    <div className="p-8 w-1/2 ">
      <h1 className="text-2xl font-bold mb-4">Change Password</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium leading-6 text-gray-900">Old Password</label>
          <input
            type="password"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium leading-6 text-gray-900">New Password</label>
          <input
            type="password"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
          <input
            type="password"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <button type="button" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
