// Sponsors.jsx
import React from 'react';
import './Sponsors.css';

const Sponsors = ({ sponsors, title }) => {
  return (
    <div className="sponsors-section">
      <h2 className="sponsors-title">{title}</h2>
      <div className="sponsors-grid">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-card">
            <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
            {/* <p className="sponsor-name">{sponsor.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
