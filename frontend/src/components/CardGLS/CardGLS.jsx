import React from 'react';
import './CardGLS.css';

const CardGLS = ({ title, description, imageUrl, buttonText, date, time, venue }) => {
    return (
        <div className="gls-box">
            <div className="gls-image-container">
                <img src={imageUrl} alt={title} className="gls-image" />
            </div>
            <div className="gls-content-container">
                <h3 className="gls-title">{title}</h3>
                <p className="gls-description">{description}</p>
                <div className="gls-details">
                    <p>- Date: {date}</p>
                    <p>- Time: {time}</p>
                    <p>- Venue: {venue}</p>
                </div>
                <button className="gls-button" onClick={() => window.open('https://lu.ma/zgwb87cd', '_blank')}>{buttonText}
                </button>
                
            </div>
        </div>
    );
};

export default CardGLS;
