// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contest from './components/Contest';
import About from './components/About';
import AboutCarousel from './components/AboutCarousel';
import Winners from './components/Winners';
import Footer from './components/Footer';
import TopButton from './components/TopButton';
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
  
  const handleScroll =(component) => {
    document.getElementById(component).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/winners"
          element={
            <div className="bg-gray-950">
              <Winners />
            </div>
          }
        />

        <Route
          path="/"
          element={
            <div className="bg-gray-950">
              <Navbar handleScroll={handleScroll} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
             
              <div id="home">
              <Home isMenuOpen={isMenuOpen} />
              </div>

              <div id="contest">
              <Contest />
              </div>

              <div id="about">
              {isWideScreen ? <AboutCarousel /> : <About />}
              <TopButton/>
              <Footer/>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
