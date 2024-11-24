import React, { useState } from 'react';
import './SecondaryNavbar.css';
import {Link} from 'react-router-dom';

const SecondaryNavbar = () => {
   const [isOpen, setIsOpen] = useState(false);  // State to manage the navbar toggle

  const toggleNavbar = () => {
    setIsOpen(!isOpen);  // Toggle the navbar visibility
  };
  return (
    <div>
    <div className="hamburger-container" onClick={toggleNavbar}>
        <div className="hamburger-icon">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
    </div>

    <div className={`secondary-navbar-container ${isOpen ? 'open' : ''}`}>

     <button className="cross-button" onClick={toggleNavbar}>
          ✖
        </button>
        
      <ul className="secondary-nav-list">
        <li className="secondary-nav-list-item">
          <Link to="/" className="secondary-nav-link">Home</Link>
        </li>
        <li className="secondary-nav-list-item">
          <Link to="/events" className="secondary-nav-link">Events</Link>
        </li>
        <li className="secondary-nav-list-item">
          <Link to="/exhibition" className="secondary-nav-link">Exhibition</Link>
        </li>
        <li className="secondary-nav-list-item">
          <Link to="/gls" className="secondary-nav-link">GLS</Link>
        </li>
        <li className="secondary-nav-list-item">
          <Link to="/gallery" className="secondary-nav-link">Gallery</Link>
        </li>
        <li className="secondary-nav-list-item">
          <Link to="/teams" className="secondary-nav-link">Teams</Link>
        </li>
      </ul>
    </div>
    </div>

  );
};

export default SecondaryNavbar;
