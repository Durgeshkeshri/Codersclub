import React from 'react';
import './Body.css';

const AuthForm = ({ title, fields, onSubmit, buttonText, bottomText }) => {
  return (
    <div className="bg-gradient-radial h-screen flex items-center justify-center font-serif">
      {/* Gradient background for the entire page */}
      <div className="w-full max-w-md max-md:px-4">
        <div className="bg-white bg-opacity-5 p-8 border border-gray-300 rounded-md shadow-md">
          {/* Transparent form with a white background and 30% opacity */}
          <h2 className="text-3xl font-semibold mb-6 text-center opacity-70 text-[#2b31ce]">{title}</h2>
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
            className="bg-blue-600 text-white px-4 py-2 tracking-widest rounded-md w-full hover:bg-blue-700 focus:outline-none"
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
