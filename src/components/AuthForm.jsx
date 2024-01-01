// src/components/AuthForm.js
import React from 'react';

const AuthForm = ({ title, fields, onSubmit, buttonText, bottomText }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 border border-gray-300 rounded-md shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-center text-blue-500">{title}</h2>
          {fields.map((field, index) => (
            <div key={index} className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field.label.toLowerCase()}>
                {field.label}
              </label>
              <input
                ref={field.ref}
                type={field.type}
                id={field.label.toLowerCase()}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          ))}
          <button
            onClick={onSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600 focus:outline-none"
          >
            {buttonText}
          </button>
          <div className="mt-4 text-center">{bottomText}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
