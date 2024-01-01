import React, { useRef } from 'react';
import bg from './images/bg.png'
import './Body.css'
const Contest = () => {
    const fullNameRef = useRef();
    const courseRef = useRef();
    const yearRef = useRef();
    const gmailRef = useRef();
    const phoneNumberRef = useRef();
  
    const submitForm = async () => {
      // Check if all required fields are filled before submitting the form
      if (
        fullNameRef.current.value &&
        courseRef.current.value &&
        yearRef.current.value &&
        gmailRef.current.value &&
        phoneNumberRef.current.value
      ) {
        const formData = {
          fullName: fullNameRef.current.value,
          course: courseRef.current.value,
          year: yearRef.current.value,
          gmail: gmailRef.current.value,
          phoneNumber: phoneNumberRef.current.value,
        };
  
        try {
          const response = await fetch('http://your-backend-endpoint', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
  
          if (response.ok) {
            const data = await response.json();
            // Handle the response from the backend (if needed)
            console.log(data);
            // Clear the form fields
            fullNameRef.current.value = '';
            courseRef.current.value = '';
            yearRef.current.value = '';
            gmailRef.current.value = '';
            phoneNumberRef.current.value = '';
          } else {
            console.error('Error:', response.status);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      } else {
        // Handle the case where required fields are not filled
        console.log('Please fill out all required fields');
      }
    };
  
    return (
      <div className="min-h-[645px] p-4 bg-gray-950">
        <hr className="border-inherit border-slate-800" />
        <div className="flex flex-col md:flex-row justify-center items-center mx-auto mt-7">
          {/* Form Container */}
          <div className="w-full md:w-2/3 p-8 rounded-md shadow-md mt-10 md:ml-16">
            <h2 className="text-[#05D9FF] text-5xl custom-text-shadow font-times transition duration-300 max-sm:text-[1.6rem] lg:tracking-wider transform hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-bounce">
              Participate for the upcoming contest
            </h2>
            {/* Form */}
            <form className="space-y-4 mt-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input type="text" id="fullName" ref={fullNameRef} className="mt-1 p-2 w-full border rounded-md" required />
              </div>
  
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-600">
                  Course
                </label>
                <input type="text" id="course" ref={courseRef} className="mt-1 p-2 w-full border rounded-md" required />
              </div>
  
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-600">
                  Year
                </label>
                <select id="year" ref={yearRef} className="mt-1 p-2 w-full border rounded-md" required>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>
  
              <div>
                <label htmlFor="gmail" className="block text-sm font-medium text-gray-600">
                  Gmail
                </label>
                <input type="email" id="gmail" ref={gmailRef} className="mt-1 p-2 w-full border rounded-md" required />
              </div>
  
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
                  Phone Number
                </label>
                <input type="tel" id="phoneNumber" ref={phoneNumberRef} className="mt-1 p-2 w-full border rounded-md" required />
              </div>
  
              <button
                type="button"
                onClick={submitForm}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-blue-800 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105"
              >
                Submit
              </button>
            </form>
          </div>
  
          {/* Image Container */}
          <div className="hidden md:block md:w-1/3">
            <img src={bg} alt="" className="w-full h-auto custom-effect" />
          </div>
        </div>
      </div>
    );
  };

export default Contest;
