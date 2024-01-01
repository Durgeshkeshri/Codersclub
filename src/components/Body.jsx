import React from 'react';
import './Body.css';
import logo from './images/logo.png';
import bg1 from './images/bg1.png';

const Body = ({ isMenuOpen }) => {
  return (
    <div className="min-h-[644px] md:flex md:justify-center md:items-center">
      {/* Image */}
      <div className={`${isMenuOpen ? 'hidden' : ' xl:ml-56 max-md:w-full md:w-[78%] md:ml-20 lg:ml-36 md:mb-8 2xl:w-[60%] xl:w-[75%] lg:w-[80%] flex flex-col justify-center max-sm:hidden max-md:hidden'}`}>
        <img className="animate-spin-slow" src={logo} alt="" />
      </div>

      {/* Heading */}
      <div className="">
        <h1 className=" max-md:mt-6 md:pl-16 max-md:block max-md:text-center max-sm:text-3xl max-md:text-4xl md:text-5xl lg:text-6xl lg:pl-16 xl:text-7xl xl:pr-40 xl:pl-14 xl:mb-8 md:mb-8 text-cyan-400 animate-bounce-slow animate-character font-serif ">
          Coder's Club
        </h1>

        <div className="md:hidden flex justify-center">
          <img className="w-[320px]" src={bg1} alt="" />
        </div>
        <p className="md:mb-10 md:text-[1.1rem] md:pl-16 md:pr-14 md:text-left max-sm:px-4 max-sm:text-center max-md:text-center max-md:text-[1.2rem] max-md:px-5 lg:pl-16 lg:pr-20 lg:mb-12 lg:text-[1.3rem] xl:mb-8 2xl:pr-48 2xl:text-[1.5rem] xl:pl-16 xl:text-[1.4rem] max-sm:font-thin font-serif text-[#ffffff]">
          Welcome to Coder's Club, a vibrant and dynamic community of tech enthusiasts created by the students of Bharati Vidyapeeth. Established on August 8, 2022, our club boasts over 350+ dedicated members and a wealth of active participants. We are proud to be a hub for all things coding and programming.
        </p>
      </div>
    </div>
  );
};

export default Body;
