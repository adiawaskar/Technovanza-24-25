import React from "react";
import "./TeamCard.css";

const TeamCard = ({ images = [], teamName }) => {
  // Ensure `images` is treated as an array
  const imageArray = Array.isArray(images) ? images : [images];

  return (
    <div className="team-card">
      <div className="team-images">
        {imageArray.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Team ${teamName} - Member ${index + 1}`}
            className="team-image"
          />
        ))}
      </div>
      <p className="team-name">{teamName}</p>
    </div>
  );
};

export default TeamCard;
