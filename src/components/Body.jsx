import React from 'react';
import './Body.css';
import logo from './images/logo.png';

const Body = ({ isMenuOpen }) => {
  return (
    <div className="lg:min-h-[644px] bg-gray-950 lg:flex lg:justify-center lg:items-center">
      {/* Image */}
      <div className={`${isMenuOpen ? 'hidden' : 'lg:ml-56 lg:w-[72%] flex flex-col justify-center'}`}>
        <img className="animate-spin-slow" src={logo} alt="" />
      </div>

      {/* Heading */}
      <div className="">
        <h1 className="lg:text-7xl lg:pr-60 lg:pl-14 lg:mb-8 text-cyan-400 animate-bounce-slow animate-character font-serif">
          Coder's Club
        </h1>

        <p className="lg:mb-8 lg:pr-60 lg:pl-16 lg:text-2xl font-serif text-white">
          Welcome to Coder's Club, a vibrant and dynamic community of tech enthusiasts created by the students of Bharati Vidyapeeth. Established on August 8, 2022, our club boasts over 350+ dedicated members and a wealth of active participants. We are proud to be a hub for all things coding and programming.
        </p>
      </div>
    </div>
  );
};

export default Body;
