import React from "react";
import "./PersonCard.css";

const PersonCard = ({ name, image }) => {
  return (
    <div className="person-card">
      <img src={image} alt={name} className="person-image" />
      <p className="person-name">{name}</p>
    </div>
  );
};

export default PersonCard;
