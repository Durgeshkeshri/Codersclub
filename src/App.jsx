import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contest from './components/Contest';
import About from './components/About';
import AboutCarousel from './components/AboutCarousel';
import Winners from './components/Winners';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

// Separate layout for Login and Signup pages
const AuthLayout = ({ children }) => (
  <div className="bg-gray-950">
    {children}
  </div>
);

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isWideScreen, setWideScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setWideScreen(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/signup" element={<AuthLayout><SignUp /></AuthLayout>} />
        <Route
          path="/winners"
          element={
            <div className="bg-gray-950">
              <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
              <Winners />
            </div>
          }
        />
        
        <Route
          path="/"
          element={
            <div className="bg-gray-950">
              <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
              <Home isMenuOpen={isMenuOpen} />
              <Contest />
              {isWideScreen ? <AboutCarousel /> : <About />}
              <Footer/>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
