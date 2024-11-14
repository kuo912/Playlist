import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Logo from '../header/Logo';
import Menu from '../header/Menu';
import Sns from '../header/Sns';

const Header = () => {
  const [ isMenuActive, setIsMenuActive ] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  }

  const location = useLocation();
  console.log(location);
  return (
    <header id='header' role='banner' className={isMenuActive ? 'active' : ''}>
        <Logo toggleMenu={toggleMenu}/>
        <Menu />
        <Sns />
    </header>
  )
}

export default Header
