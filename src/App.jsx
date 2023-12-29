import './App.css';
import Navbar from './components/Navbar';
import Bodycopy from "./components/Bodycopy";
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
      <Bodycopy isMenuOpen={isMenuOpen}/>
    </>
  );
};

export default App;
