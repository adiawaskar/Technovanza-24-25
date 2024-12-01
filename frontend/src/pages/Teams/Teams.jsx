import React, { useState } from "react";
import "./Teams.css";
import PersonCard from "../../components/PersonCard/PersonCard";
import TeamCard from "../../components/TeamCard/TeamCard";
import SecondaryNavbar from "../../components/SecondaryNavbar/SecondaryNavbar";

const Teams = () => {
  const [currentDivIndex, setCurrentDivIndex] = useState(0);

  const containers = [
    <div className="person-container" key="person-container">
      <p className="general-heading">Secretaries</p>
      <div className="person-cards">
        <div className="card-with-name">
            <PersonCard image={require("../../components/Assets/Teams/pavanpatil.jpg")}
            instagram="https://www.instagram.com/paavan_patil"
            linkedin="https://www.linkedin.com/in/paavan-patil-01496323b"
            email="patilpaavan7286@gmail.com" />
          <p className="person-name">Paavan Patil</p>
        </div>
        <div className="card-with-name">
            <PersonCard image={require("../../components/Assets/Teams/anamkhanzada.jpg")}
             instagram="https://www.instagram.com/anam_khanzada_"
            linkedin="https://www.linkedin.com/in/anam-khanzada-095429305"
            email="anam.khanzada26@gmail.com" />
            <p className="person-name">Anam Khanzada</p>
        </div>
        <div className="card-with-name">
            <PersonCard image={require("../../components/Assets/Teams/nayaneshgudla.jpg")} 
            instagram="https://www.instagram.com/g_nayanesh"
            linkedin="https://www.linkedin.com/in/nayanesh-gudla"
            email="nayaneshgudla1408@gmail.com" />
          <p className="person-name">Nayanesh Gudla</p>
        </div>
      </div>
    </div>,
    <div className="person-container" key="person-container">
      <p className="general-heading">Web Developers</p>
      <div className="person-cards">
        <div className="card-with-name">
            <PersonCard image={require("../../components/Assets/Teams/ritikanankar.jpg")}
            instagram="https://www.instagram.com/ritikanankar____"
            linkedin="https://www.linkedin.com/in/ritikanankar"
            email="nankarritika12@gmail.com" />
            <p className="person-name">Ritika Nankar</p>
        </div>
        <div className="card-with-name">
          <PersonCard image={require("../../components/Assets/Teams/adiawaskar.jpg")}
           instagram="https://www.instagram.com/heyyitsadiiii"
            linkedin="https://www.linkedin.com/in/adiawaskar"
            email="adiawaskar04@gmail.com" />
          <p className="person-name">Adi Awaskar</p>
        </div>
      </div>
    </div>,
    <div className="team-container" key="team-container-1">
      <TeamCard image={require("../../components/Assets/Teams/treasurers.png")} teamName="Team Alpha" />
    </div>,
    <div className="team-container" key="team-container-2">
      <TeamCard image={require("../../components/Assets/Teams/spons.png")} teamName="Team Beta" />
    </div>,
    // <div className="team-container" key="team-container-3">
    //   <p className="team-name">Web Development</p>
    //   <TeamCard image={require("../../components/Assets/Teams/webdev.png")} teamName="Team Gamma" />
    // </div>,
    <div className="team-container" key="team-container-4">
      <TeamCard image={require("../../components/Assets/Teams/pr.png")} teamName="Team Delta" />
    </div>,
    <div className="team-container" key="team-container-5">
      <TeamCard image={require("../../components/Assets/Teams/ipos.png")} teamName="Team Epsilon" />
    </div>,
    <div className="team-container" key="team-container-6">
      <TeamCard image={require("../../components/Assets/Teams/marketing.png")} teamName="Team Epsilon" />
    </div>,
    <div className="team-container" key="team-container-7">
      <TeamCard image={require("../../components/Assets/Teams/opsbots1.png")} teamName="Team Epsilon" />
    </div>,
    <div className="team-container" key="team-container-8">
      <TeamCard image={require("../../components/Assets/Teams/opsbots2.png")} teamName="Team Epsilon" />
    </div>,
    <div className="team-container" key="team-container-5">
      <TeamCard image={require("../../components/Assets/Teams/opscoding.png")} teamName="Team Epsilon" />
    </div>,
    <div className="team-container" key="team-container-5">
      <TeamCard image={require("../../components/Assets/Teams/design.png")} teamName="Team Epsilon" />
    </div>,
    <div className="team-container" key="team-container-5">
      <TeamCard image={require("../../components/Assets/Teams/execution.png")} teamName="Team Epsilon" />
    </div>,
    <div className="team-container" key="team-container-5">
      <TeamCard image={require("../../components/Assets/Teams/finearts.png")} teamName="Team Epsilon" />
    </div>,
    <div className="team-container" key="team-container-5">
      <TeamCard image={require("../../components/Assets/Teams/vmco.png")} teamName="Team Epsilon" />
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
      <SecondaryNavbar />
      <h1 className="teams-heading">TEAMS</h1>
      {containers[currentDivIndex]}
      <div className="navigation-buttons">
        <button onClick={handlePrev} className="teams-button">Prev</button>
        <button onClick={handleNext} className="teams-button">Next</button>
      </div>
    </div>
  );
};

export default Teams;

