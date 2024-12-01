import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import specific icons
import "./PersonCard.css";

const PersonCard = ({ image, instagram, linkedin, email }) => {
  return (
    <div className="person-card">
      <img src={image} alt="person" className="person-image" />
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
    </div>
  );
};

export default PersonCard;
