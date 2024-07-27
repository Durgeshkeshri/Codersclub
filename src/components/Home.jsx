import './Body.css';
import logo from './images/logo.png';
import bg1 from './images/bg1.png';

const Home = ({ isMenuOpen }) => {
  return (
    <div className="min-h-[644px] md:flex md:justify-center md:items-center">
      <div className={`${isMenuOpen ? 'hidden' : ' xl:ml-56 max-md:w-full md:w-[100%] md:ml-20 lg:ml-36 md:mb-8 2xl:w-[65%] xl:w-[65%] lg:w-[80%] flex flex-col justify-center max-sm:hidden max-md:hidden'}`}>
        <img className="animate-spin-slow" src={logo} alt="" />
      </div>
      <div className="">
        <h1 className=" max-md:mt-6 max-sm:mt-4 md:pl-16 max-md:block max-md:text-center max-sm:text-3xl max-md:text-4xl md:text-5xl lg:text-6xl lg:pl-16 xl:text-7xl xl:pr-40 xl:pl-14 xl:mb-8 md:mb-8 text-cyan-400 animate-bounce-slow animate-character font-serif ">
          Coder's Club
        </h1>

        <div className="md:hidden flex justify-center">
          <img className=" w-[320px]" src={bg1} alt="" />
        </div>
        <p className="max-sm:px-4 max-sm:text-center max-sm:font-thin md:mb-10 md:text-[1.2rem] md:pl-16 md:pr-14 md:text-left max-md:px-5 max-md:text-center max-md:text-[1.2rem] max-sm:text-[1.1rem] lg:pl-16 lg:pr-16  
         lg:text-[1.3rem] xl:mb-8 xl:pr-[150px] xl:pl-16 xl:text-[1.4rem] 2xl:pr-56 2xl:text-[1.6rem] text-white  font-serif">
          Welcome to Coder's Club, a vibrant and dynamic community of tech enthusiasts created by the students of Bharati Vidyapeeth. Established on August 8, 2023, our club boasts over 350+ dedicated members and a wealth of active participants. We are proud to be a hub for all things coding and programming.
        </p>
      </div>
    </div>
  );
};

export default Home;
