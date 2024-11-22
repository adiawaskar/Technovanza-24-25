import React from "react";
import "./PersonCard.css";

const PersonCard = ({ image }) => {
  return (
    <div className="person-card">
      <img src={image} alt="person" className="person-image" />
    </div>
  );
};

export default PersonCard;
