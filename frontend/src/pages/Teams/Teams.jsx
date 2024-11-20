import React, { useState } from "react";
import "./Teams.css";
import PersonCard from "../../components/PersonCard/PersonCard";
import TeamCard from "../../components/TeamCard/TeamCard";

const Teams = () => {
  const [currentDivIndex, setCurrentDivIndex] = useState(0);

  const containers = [
    <div className="person-container" key="person-container">
      <p className="general-heading">Secretaries</p>
      <PersonCard name="John Doe" image="person1.png" />
      <PersonCard name="Jane Smith" image="person2.png" />
      <PersonCard name="Jack Ma" image="person3.png" />
    </div>,
    <div className="person-container" key="person-container">
      <p className="general-heading">Web Developers</p>
      <PersonCard name="John Doe" image="person1.png" />
      <PersonCard name="Jane Smith" image="person2.png" />
    </div>,
    <div className="team-container" key="team-container-1">
        <p className="team-name">Team Alpha</p>
      <TeamCard image="team1.png" teamName="Team Alpha" />
    </div>,
    <div className="team-container" key="team-container-2">
      <p className="team-name">Team Beta</p>
      <TeamCard image="team2.png" teamName="Team Beta" />
    </div>,
    <div className="team-container" key="team-container-3">
      <p className="team-name">Team Gamma</p>
      <TeamCard image="team3.png" teamName="Team Gamma" />
    </div>,
    <div className="team-container" key="team-container-4">
      <p className="team-name">Team Delta</p>
      <TeamCard image="team4.png" teamName="Team Delta" />
    </div>,
    <div className="team-container" key="team-container-5">
        <p className="team-name">Team Epsilon</p>
        <TeamCard
        images={["team5_member1.png", "team5_member2.png"]}
        teamName="Team Epsilon"
        />
  </div>,
  ];

  const handleNext = () => {
    setCurrentDivIndex((prevIndex) =>
      prevIndex === containers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentDivIndex((prevIndex) =>
      prevIndex === 0 ? containers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="teams-page">
      <h1 className="teams-heading">TEAMS</h1>
      {containers[currentDivIndex]}
      <div className="navigation-buttons">
        <button onClick={handlePrev} className="nav-button">Prev</button>
        <button onClick={handleNext} className="nav-button">Next</button>
      </div>
    </div>
  );
};

export default Teams;
