import './App.css';
import Navbar from './components/Navbar';
import Body from "./components/Body";
import Form from './components/Form';
import { useState } from 'react';

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
      <Body isMenuOpen={isMenuOpen}/>
      <Form/>
    </>
  );
};

export default App;
