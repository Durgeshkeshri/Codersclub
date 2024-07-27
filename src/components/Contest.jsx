import React, { useRef, useState } from 'react';
import bg from './images/bg1.png';
import './Body.css';
import { Client, Databases, ID } from "appwrite";

const Contest = () => {
  const [submitting, setSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const fullNameRef = useRef(null);
  const courseRef = useRef(null);
  const yearRef = useRef(null);
  const divRef = useRef(null);
  const houseRef = useRef(null);
  const gmailRef = useRef(null);
  const phoneNumberRef = useRef(null);

  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('661e9a434c18c473fc6d');

  const databases = new Databases(client);

  const submitForm = async (e) => {
    e.preventDefault();
    if (
      fullNameRef.current.value &&
      courseRef.current.value &&
      yearRef.current.value &&
      divRef.current.value &&
      houseRef.current.value &&
      gmailRef.current.value &&
      phoneNumberRef.current.value
    ) {
      setSubmitting(true); // Change button text to "Sending..."
      const formData = {
        name: fullNameRef.current.value,
        course: courseRef.current.value,
        year: parseInt(yearRef.current.value),
        div: divRef.current.value,
        house: houseRef.current.value,
        gmail: gmailRef.current.value,
        phone: phoneNumberRef.current.value,
      };

      try {
        const promise = databases.createDocument(
          '661ea8cc53f7e32a63b0', // Your collection ID
          '661ea8d91a1728395ce0', // Your document ID (if any)
          ID.unique(),
          formData
        );

        const response = await promise;
        console.log(response);
        setShowSuccessMessage(true);
        fullNameRef.current.value = '';
        courseRef.current.value = '';
        yearRef.current.value = '';
        divRef.current.value = '';
        houseRef.current.value = '';
        gmailRef.current.value = '';
        phoneNumberRef.current.value = '';
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 2000);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-[645] p-4 sm:p-0 lg:p-4 bg-gray-950">
      <hr className="border-inherit border-slate-800" />
      <div className="flex flex-col md:flex-row justify-center items-center mx-auto mt-7">
        <div className="w-full md:w-2/3  p-8 max-sm:p-2 rounded-md shadow-md mt-10 md:ml-16">
          <h2 className="text-[#05D9FF] max-sm:text-center text-5xl custom-text-shadow font-times transition duration-300 max-sm:text-[1.6rem] lg:tracking-wider transform hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-bounce">
            Participate for the CodeFusion
          </h2>
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
                placeholder="Enter your full name"
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
                defaultValue=""
              >
                <option value="" disabled>Select your course</option>
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
              <label htmlFor="house" className="block text-sm font-medium text-gray-600">
                House
              </label>
              <select
                id="house"
                ref={houseRef}
                className="mt-1 p-2 max-sm:mt-[2px] w-full border rounded-md"
                required
              >
                <option value="" disabled selected>Select House</option>
                <option value="kadam">Kadam</option>
                <option value="kotler">Kotler</option>
                <option value="tata">Tata</option>
                <option value="padamshee">Padamsee</option>
                <option value="chanakya">Chanakya</option>
                <option value="Prahlad">Prahlad</option>
                <option value="Kaizen">Kaizen</option>
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
              disabled={submitting}
            >
              {submitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>

        <div className="hidden lg:block md:w-1/3">
          <img src={bg} alt="" className="xl:w-full custom-effect 2xl:-ml-16" />
        </div>
      </div>
      {showSuccessMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-2 rounded-md shadow-md">
          Form submitted successfully!
        </div>
      )}
    </div>
  );
};

export default Contest;