import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './Body.css';
import logo from './images/logo.png';

const Navbar = ({ isMenuOpen, toggleMenu, closeMenu, handleScroll }) => {
  const arr = ['Home', 'Contest', 'About', 'Winners'];
  const [activeLink, setActiveLink] = useState(null);
  const { loginWithRedirect, isAuthenticated, logout} = useAuth0();

  const handleLogin = () => {
    loginWithRedirect()
    closeMenu();
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin })
    closeMenu();
  };

  const handleLinkClick = (item) => {
    setActiveLink(item);
    closeMenu();
  };
  const handleLinkClickWithScroll = (item) => {
    handleScroll(item.toLowerCase());
    setActiveLink(item);
    closeMenu();
  };


  const webStyles =
    'flex justify-evenly font-times border border-zinc-700 py-6 lg:text-2xl md:text-xl xl:text-3xl min-2xl:text-5xl';
  const mobileStyles =
    'fixed inset-0 flex flex-col text-2xl min-lg:justify-between items-center font-times bg-gray-950 gap-4 pt-16 z-10';

  return (
    <div>
      <ul className={`md:flex ${isMenuOpen ? mobileStyles : `hidden ${webStyles}`}`}>
        {arr.map((item, index) => (
          <li
            key={index}
            className={`font-semibold font-times transition duration-300 lg:tracking-wider transform hover:scale-110 ${activeLink === item ? 'text-yellow-500' : ''
              }`}
          >
            {item === 'Winners' && <Link
              to={item.toLowerCase()}
              onClick={() => handleLinkClick(item)}
              className={`text-[#05D9FF] custom-text-shadow ${activeLink === item ? 'text-yellow-500' : ''
                }`} >
              {item}
            </Link>}

            {item !== 'Winners' && <span onClick={() => handleLinkClickWithScroll(item)} className={`text-[#05D9FF] custom-text-shadow ${activeLink === item ? 'text-yellow-500' : ''
              }`} >
              {item}
            </span>}

          </li>
        ))}

        {isAuthenticated ? (
          <li>
            <button
              className="text-[#05D9FF] custom-text-shadow font-semibold font-times transition duration-300 lg:tracking-wider transform hover:scale-110"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <button
              className=" text-[#05D9FF] custom-text-shadow font-semibold font-times transition duration-300 lg:tracking-wider transform hover:scale-110"
              onClick={handleLogin}
            >
              Login
            </button>
          </li>
        )}
      </ul>
      <div className={`flex items-center ${isMenuOpen ? 'justify-end' : 'justify-between'} max-sm:p-[5px]`}>
        {!isMenuOpen && (
          <span className="self-start pl-2 pt-2">
            <img className="w-8 h-8 inline animate-spin-slow md:hidden" src={logo} alt="" />
          </span>
        )}
        <button
          onClick={toggleMenu}
          className={`md:hidden h-10 text-white focus:outline-none max-sm:inline max-sm:self-end z-10 ${isMenuOpen ? 'rotate-180' : ''
            }`}
        >
          <svg
            className={`w-12 h-10 transition-transform transform ${isMenuOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="url(#icon-gradient)"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#00f', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#800080', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#ff00ff', stopOpacity: 1 }} />
              </linearGradient>
            </defs>

            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
