import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa"; 
import "./PersonCard.css";

const PersonCard = ({ image, instagram, linkedin, email, showOverlay }) => {
  return (
    <div className={`person-card ${showOverlay ? 'with-overlay' : ''}`}>
      <img src={image} alt="person" className="person-image" />
      {showOverlay && (
        <div className="overlay">
          <a 
            href={instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
          >
            <FaInstagram />
          </a>
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a 
            href={`mailto:${email}`} 
            className="social-icon"
          >
            <FaEnvelope />
          </a>
        </div>
      )}
    </div>
  );
};

export default PersonCard;
