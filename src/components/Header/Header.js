import React, { useState } from 'react';
import './Header.css';
import sitaNaturalsLogo from '../../images/logo.png'; // Update this path
import purpleBeansLogo from '../../images/plogo.png'; // Update this path

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="white-header">
      <div className="container">
        <nav className="white-nav">
          <div className="logos-container">
            <img src={sitaNaturalsLogo} alt="Sita Naturals" className="logo-image" />
            <img src={purpleBeansLogo} alt="Purple Beans Agro Industries" className="logo-image purple-beans-logo" />
          </div>
          <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="mobile-menu" onClick={toggleMenu}>☰</div>
        </nav>
      </div>
    </header>
  );
}

export default Header;