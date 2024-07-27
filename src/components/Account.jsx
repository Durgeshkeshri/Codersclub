// Import necessary styles
import 'tailwindcss/tailwind.css';

import React, { useState } from 'react';

const Account = () => {
  const [selectedOption, setSelectedOption] = useState('logout');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [editOptions, setEditOptions] = useState({
    fullName: false,
    password: false,
    gmail: false,
  });
  const [newFullName, setNewFullName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleEditOptionsChange = (option) => {
    setEditOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  const handleLogoutDelete = async () => {
    try {
      if (selectedOption === 'logout') {
        const response = await axios.post('http://your-api-url/logout', { email, otp });
        console.log('Logout Successful:', response.data);
      } else if (selectedOption === 'delete') {
        const response = await axios.post('http://your-api-url/delete', { email, otp });
        console.log('Account Deletion Successful:', response.data);
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  const handleEditUser = async () => {
    try {
      const response = await axios.post('http://your-api-url/editUser', {
        email,
        otp,
        editOptions,
        newFullName,
        newPassword,
        newEmail,
      });
      console.log('User Edit Successful:', response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-5 border border-gray-300 bg-opacity-10 max-md:mx-4 rounded-md shadow-md">
        <h1 className="text-3xl max-md:text-2xl font-semibold mb-4 text-center text-blue-700">Account Settings</h1>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Account Config</label>
          <select
            value={selectedOption}
            onChange={(e) => handleOptionChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all"
          >
            <option value="logout">Logout</option>
            <option value="delete">Delete Account</option>
            <option value="edit">Edit User</option>
          </select>
        </div>

        {selectedOption !== 'logout' && (
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
          </div>
        )}

        {selectedOption === 'edit' && (
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Select Fields to Edit</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={editOptions.fullName}
                    onChange={() => handleEditOptionsChange('fullName')}
                    className="form-checkbox text-blue-500"
                  />
                  <span className="ml-2">Full Name</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={editOptions.password}
                    onChange={() => handleEditOptionsChange('password')}
                    className="form-checkbox text-blue-500"
                  />
                  <span className="ml-2">Password</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={editOptions.gmail}
                    onChange={() => handleEditOptionsChange('gmail')}
                    className="form-checkbox text-blue-500"
                  />
                  <span className="ml-2">Gmail</span>
                </label>
              </div>
            </div>
            {editOptions.fullName && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">New Full Name</label>
                <input
                  type="text"
                  value={newFullName}
                  onChange={(e) => setNewFullName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
            )}
            {editOptions.password && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
            )}
            {editOptions.gmail && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">New Gmail</label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
            )}
          </div>
        )}

        <button
          onClick={selectedOption === 'logout' || selectedOption === 'delete' ? handleLogoutDelete : handleEditUser}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer w-full transition-all"
        >
          {selectedOption === 'logout' ? 'Logout' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
};

export default Account;
