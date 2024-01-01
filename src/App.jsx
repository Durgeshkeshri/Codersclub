import './App.css';
import Navbar from './components/Navbar';
import Body from "./components/Body";
import Form from './components/Form';
import Card from './components/Card';
import Carousel from './components/Carousel';
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
    <>
      <div className="bg-gray-950">
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
        <Body isMenuOpen={isMenuOpen} />
        <Form />
        {isWideScreen ? <Carousel /> : <Card />}
      </div>
    </>
  );
};

export default App;
