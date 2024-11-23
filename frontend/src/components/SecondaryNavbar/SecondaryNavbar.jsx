import React from 'react';
import './SecondaryNavbar.css';
import {Link} from 'react-router-dom';

const SecondaryNavbar = () => {
  return (
    <div className="secondary-navbar-container">
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

  );
};

export default SecondaryNavbar;
