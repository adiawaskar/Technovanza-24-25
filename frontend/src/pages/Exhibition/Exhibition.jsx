import React, { useState } from 'react';
import './Exhibition.css';
import leftDoorImage from '../../components/Assets/Exhibition/door-left2.jpeg';
import rightDoorImage from '../../components/Assets/Exhibition/door-right2.jpeg';
import leftBackgroundImage from '../../components/Assets/Exhibition/visitors.webp';
import rightBackgroundImage from '../../components/Assets/Exhibition/exhibitors.jpeg';
import SecondaryNavbar from '../../components/SecondaryNavbar/SecondaryNavbar';

const Exhibition2 = () => {
  const [isLeftDoorOpen, setLeftDoorOpen] = useState(false);
  const [isRightDoorOpen, setRightDoorOpen] = useState(false);

  const toggleLeftDoor = () => setLeftDoorOpen(!isLeftDoorOpen);
  const toggleRightDoor = () => setRightDoorOpen(!isRightDoorOpen);

  return (
    <div className="exhibition-container">
      <SecondaryNavbar />
      <div className="exhibition-frame">
          <h1 className="exhibition-heading">REGISTRATION</h1>
      </div>

      {/* Left Door */}
      <div className="door-container left">
        <img
          src={leftBackgroundImage}
          alt="Left Background"
          className="background"
        />
        <div className="background-content">
          <h2>Visitors</h2>
          <p>Embark on a journey of innovation and exploration at <strong>Technovanza's</strong> exhibition! Immerse yourself in cutting-edge projects, revolutionary technologies, and ingenious ideas. Witness the convergence of creativity and expertise, as talented minds from across the country display their innovations. Gain insights from brilliant minds behind the projects and be part of the excitement at <strong>Technovanza</strong>. Don't miss this opportunity to experience the forefront of technological advancement!</p>
          <div
            className="exhibition-button"
            onClick={() => window.open('https://lu.ma/zgwb87cd', '_blank')}
          >
            <div className="exhibition-register-btn">
              <span>Register Now</span>
            </div>
          </div>
        </div>
         <div className={`door-text ${isLeftDoorOpen ? 'open' : ''}`}>
          Entry for Visitors
        </div>
        
        <img
          src={leftDoorImage}
          alt="Left Door"
          className={`door ${isLeftDoorOpen ? 'open' : ''}`}
        />
        <button className="door-button" onClick={toggleLeftDoor}>
          {isLeftDoorOpen ? 'Exit' : 'Enter'}
        </button>
      </div>

      {/* Right Door */}
      <div className="door-container right">
        <img
          src={rightBackgroundImage}
          alt="Right Background"
          className="background"
        />
        <div className="background-content">
          <h2>School Registration</h2>
          <p>Technovanza 2024-25 proudly presents an exciting lineup of exhibitions featuring cutting-edge robotics and technology. Explore humanoid and quadruped robots from <strong>Unitree Robotics</strong>, the innovative Indro humanoid, and groundbreaking solutions by <strong>Ariligent Robots</strong> and <strong>Janyu Tech</strong>. Discover inspiring designs by <strong>Bot Makers</strong>, sparking creativity in the next generation. Schools are invited to register and give students an unparalleled glimpse into the future of robotics.</p>
          <div
            className="exhibition-button"
            onClick={() => window.open('https://forms.gle/A4EQafbrp51M7T3MA', '_blank')}
          >
            <div className="exhibition-register-btn">
            <span>Register Now</span>
          </div>
          </div>
        </div>
         <div className={`door-text ${isRightDoorOpen ? 'open' : ''}`}>
          Registration for schools
        </div>
 
        <img
          src={rightDoorImage}
          alt="Right Door"
          className={`door ${isRightDoorOpen ? 'open' : ''}`}
        />
        <button className="door-button" onClick={toggleRightDoor}>
          {isRightDoorOpen ? 'Exit' : 'Enter'}
        </button>
      </div>
    </div>
  );
};

export default Exhibition2;
