import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Contest from './components/Contest';
import About from './components/About';
import AboutCarousel from './components/AboutCarousel';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Winners from './components/Winners';
import { useState, useEffect } from 'react';

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isWideScreen, setWideScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setWideScreen(window.innerWidth > 1024);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="bg-gray-950">
        {/* Conditionally render Navbar based on route */}
        {!(window.location.pathname === '/login' || window.location.pathname === '/signup') && (
          <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
        )}

        <Routes>
          <Route path="/" element={<Home isMenuOpen={isMenuOpen} />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/about" element={isWideScreen ? <AboutCarousel /> : <About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/winners" element={<Winners />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
