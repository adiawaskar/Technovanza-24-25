import React from "react";
import "./TeamCard.css";

const TeamCard = ({ image }) => {
  return (
    <div className="team-card">
      {/* Display only the image */}
      <div className="team-image-container">
        <img
          src={image}
          alt="Team Image"
          className="team-image"
        />
      </div>
    </div>
  );
};

export default TeamCard;
