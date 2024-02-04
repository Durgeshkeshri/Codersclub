import React, { useRef, useState } from 'react';
import bg from './images/bg.png';
import './Body.css';

const Contest = () => {
  const [submitting, setSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State for showing success message
  const fullNameRef = useRef(null);
  const courseRef = useRef(null);
  const yearRef = useRef(null);
  const divRef = useRef(null);
  const eventRef = useRef(null);
  const gmailRef = useRef(null);
  const phoneNumberRef = useRef(null);

  const sendMessage = () => {
    fetch('https://codersclub-api.onrender.com/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: 'Hello, world!' })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      console.log('Message sent successfully');
    })
    .catch(error => {
      console.error('Error sending message:', error);
    });
  };
  
  // Call sendMessage every 15 minutes
  setInterval(sendMessage, 15 * 60 * 1000);


  const submitForm = async (e) => {
    e.preventDefault();
    // Check if all required fields are filled before submitting the form
    if (
      fullNameRef.current.value &&
      courseRef.current.value &&
      yearRef.current.value &&
      divRef.current.value &&
      eventRef.current.value &&
      gmailRef.current.value &&
      phoneNumberRef.current.value
    ) {
      setSubmitting(true); // Change button text to "Sending..."
      const formData = {
        fullName: fullNameRef.current.value,
        course: courseRef.current.value,
        year: yearRef.current.value,
        div: divRef.current.value,
        event: eventRef.current.value,
        gmail: gmailRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
      };

      console.log(formData);

      try {
        const response = await fetch('https://codersclub-api.onrender.com/form/submit-form', {
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
          setShowSuccessMessage(true); // Show success message
          // Clear the form fields
          fullNameRef.current.value = '';
          courseRef.current.value = '';
          yearRef.current.value = '';
          divRef.current.value = '';
          eventRef.current.value = '';
          gmailRef.current.value = '';
          phoneNumberRef.current.value = '';
          // Hide success message after 3 seconds
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 2000);
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setSubmitting(false); // Reset button text
      }
    }
  };

  return (
    <div className="min-h-[645] p-4 sm:p-0 lg:p-4 bg-gray-950">
      <hr className="border-inherit border-slate-800" />
      <div className="flex flex-col md:flex-row justify-center items-center mx-auto mt-7">
        {/* Form Container */}
        <div className="w-full md:w-2/3  p-8 max-sm:p-2 rounded-md shadow-md mt-10 md:ml-16">
          <h2 className="text-[#05D9FF] max-sm:text-center text-5xl custom-text-shadow font-times transition duration-300 max-sm:text-[1.6rem] lg:tracking-wider transform hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-bounce">
            Participate for the upcoming contest
          </h2>
          {/* Form */}
          <form onSubmit={submitForm} className="space-y-4 xl:w-[800px] max-sm:space-y-1 mt-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                ref={fullNameRef}
                className="mt-1 p-2 max-sm:mt-[2px] w-full border rounded-md"
                required
                placeholder="Enter your full name" // Placeholder added here
              />
            </div>


            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-600">
                Course
              </label>
              <select
                id="course"
                ref={courseRef}
                className="mt-1 p-2 max-sm:mt-[2px] w-full border rounded-md"
                required
              >
                <option value="" disabled selected>Select your course</option>
                <option value="BCA">BCA</option>
                <option value="BBA">BBA</option>
                <option value="MBA">MBA</option>
              </select>
            </div>


            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-600">
                Year
              </label>
              <select
                id="year"
                ref={yearRef}
                className="mt-1 p-2 max-sm:mt-[2px] w-full border rounded-md"
                required
              >
                <option value="" disabled selected>Select your year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>


            <div>
              <label htmlFor="div" className="block text-sm font-medium text-gray-600">
                Div
              </label>
              <select
                id="div"
                ref={divRef}
                className="mt-1 p-2 max-sm:mt-[2px] w-full border rounded-md"
                required
              >
                <option value="" disabled selected>Select your div</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>


            <div>
              <label htmlFor="event" className="block text-sm font-medium text-gray-600">
                Events
              </label>
              <select
                id="event"
                ref={eventRef}
                className="mt-1 p-2 max-sm:mt-[2px] w-full border rounded-md"
                required
              >
                <option value="" disabled selected>Select activities</option>
                <option value="CodeFusion">CodeFusion</option>
                <option value="WebWizard">Web Wizard</option>
                <option value="QuizQuest">Quiz Quest</option>
              </select>
            </div>


            <div>
              <label htmlFor="gmail" className="block text-sm font-medium text-gray-600">
                Gmail
              </label>
              <input
                type="email"
                id="gmail"
                ref={gmailRef}
                className="mt-1 p-2 max-sm:mt-[2px] w-full border rounded-md"
                required
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                ref={phoneNumberRef}
                className="mt-1 max-sm:mb-1 p-2 max-sm:mt-[2px] w-full border rounded-md"
                required
                placeholder="Enter your phone number"
              />
            </div>


            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-blue-800 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105"
              disabled={submitting} // Disable button while submitting
            >
              {submitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>

        {/* Image Container */}
        <div className="hidden lg:block md:w-1/3">
          <img src={bg} alt="" className="w-full h-auto custom-effect" />
        </div>
      </div>
      {/* Success message */}
      {showSuccessMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-2 rounded-md shadow-md">
          Form submitted successfully!
        </div>
      )}
    </div>
  );
};

export default Contest;