import React from 'react';
import './LectureCard.css';

const LectureCard = ({ title, description, imageUrl, buttonText }) => {
    return (
        <div className="lecture-box">
            <img src={imageUrl} alt={title} className="lecture-image" />
            <div className="lecture-overlay">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default LectureCard;
