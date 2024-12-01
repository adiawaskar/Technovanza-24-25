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
            email="patilpaavan7286@gmail.com"
            showOverlay={true} />
          <p className="person-name">Paavan Patil</p>
        </div>
        <div className="card-with-name">
            <PersonCard image={require("../../components/Assets/Teams/anamkhanzada.jpg")}
             instagram="https://www.instagram.com/anam_khanzada_"
            linkedin="https://www.linkedin.com/in/anam-khanzada-095429305"
            email="anam.khanzada26@gmail.com"
            showOverlay={true} />
            <p className="person-name">Anam Khanzada</p>
        </div>
        <div className="card-with-name">
            <PersonCard image={require("../../components/Assets/Teams/nayaneshgudla.jpg")} 
            instagram="https://www.instagram.com/g_nayanesh"
            linkedin="https://www.linkedin.com/in/nayanesh-gudla"
            email="nayaneshgudla1408@gmail.com"
            showOverlay={true} />
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
            email="nankarritika12@gmail.com"
            showOverlay={true} />
            
            <p className="person-name">Ritika Nankar</p>
        </div>
        <div className="card-with-name">
          <PersonCard image={require("../../components/Assets/Teams/adiawaskar.jpg")}
           instagram="https://www.instagram.com/heyyitsadiiii"
            linkedin="https://www.linkedin.com/in/adiawaskar"
            email="adiawaskar04@gmail.com"
            showOverlay={true} />
          <p className="person-name">Adi Awaskar</p>
        </div>
      </div>
    </div>,
    <div className="person-container" key="person-container">
    <p className="general-heading">Treasurer</p>
    <div className="person-cards">
      <div className="card-with-name">
          <PersonCard image={require("../../components/Assets/Teams/nirmalpatil.jpg")}
          showOverlay={false} />
          <p className="person-name">Nirmal Patil</p>
      </div>
      <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/shashinvathode.jpg")}
         showOverlay={false} />
        <p className="person-name">Shashin Vathode</p>
      </div>
    </div>
  </div>,
    <div className="person-container" key="person-container">
    <p className="general-heading">Sponsorship</p>
    <div className="person-cards">
      <div className="card-with-name">
          <PersonCard image={require("../../components/Assets/Teams/kabirshah.jpg")}
           showOverlay={false}/>
          <p className="person-name">Kabir Shah</p>
      </div>
      <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/dineshpatel.jpg")}
         showOverlay={false} />
        <p className="person-name">Dinesh Patel</p>
      </div>
    </div>
  </div>,
  <div className="team-container" key="team-container-1">
      <TeamCard image={require("../../components/Assets/Teams/sponsorship.png.png")} teamName="Team Alpha" />
    </div>,
    // <div className="team-container" key="team-container-3">
    //   <p className="team-name">Web Development</p>
    //   <TeamCard image={require("../../components/Assets/Teams/webdev.png")} teamName="Team Gamma" />
    // </div>,
    <div className="person-container" key="person-container">
    <p className="general-heading">Public Relations</p>
    <div className="person-cards">
      <div className="card-with-name">
          <PersonCard image={require("../../components/Assets/Teams/aditinasare.jpg")}
          showOverlay={false} />
          <p className="person-name">Aditi Nasare</p>
      </div>
      <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/ishayupotey.jpg")}
         showOverlay={false} />
        <p className="person-name">Ishayu Potey</p>
      </div>
    </div>
  </div>,
  <div className="team-container" key="team-container-1">
      <TeamCard image={require("../../components/Assets/Teams/pradmin.png.png")} teamName="Team Alpha" />
    </div>,
    <div className="person-container" key="person-container">
    <p className="general-heading">Internal Publicity Officers</p>
    <div className="person-cards">
      <div className="card-with-name">
          <PersonCard image={require("../../components/Assets/Teams/aayushkhirraiyya.jpg")}
          showOverlay={false} />
          <p className="person-name">Aayush Khirraiyya</p>
      </div>
      <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/ishabarhate.jpg")}
        showOverlay={false} />
        <p className="person-name">Isha Barhate</p>
      </div>
      <div className="card-with-name">
            <PersonCard image={require("../../components/Assets/Teams/jayashbhuyar.jpg")}
             showOverlay={false}/>
            <p className="person-name">Jayash Bhuyar</p>
        </div>
    </div>
  </div>,
    <div className="person-container" key="person-container">
    <p className="general-heading">Marketing</p>
    <div className="person-cards">
      <div className="card-with-name">
          <PersonCard image={require("../../components/Assets/Teams/khadijakb.jpg")}
          showOverlay={false} />
          <p className="person-name">Khadija KB</p>
      </div>
      <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/smitsatra.jpg")}
         showOverlay={false} />
        <p className="person-name">Smit Satra</p>
      </div>
    </div>
  </div>,
  <div className="team-container" key="team-container-1">
      <TeamCard image={require("../../components/Assets/Teams/marketing.png.png")} teamName="Team Alpha" />
    </div>,
  <div className="person-container" key="person-container">
  <p className="general-heading">Operations-Bots</p>
  <div className="person-cards">
    <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/amrutgotpagar.jpg")}
        showOverlay={false} />
        <p className="person-name">Amrut Gotpagar</p>
    </div>
    <div className="card-with-name">
      <PersonCard image={require("../../components/Assets/Teams/shwetakare.jpg")}
       showOverlay={false} />
      <p className="person-name">Shweta Kare</p>
    </div>
  </div>
</div>,
<div className="team-container" key="team-container-1">
      <TeamCard image={require("../../components/Assets/Teams/operationsbots.png.png")} teamName="Team Alpha" />
    </div>,
    
    <div className="person-container" key="person-container">
    <p className="general-heading">Operations-Coding</p>
    <div className="person-cards">
      <div className="card-with-name">
          <PersonCard image={require("../../components/Assets/Teams/harshalamahajan.jpg")}
          showOverlay={false}/>
          <p className="person-name">Harshala Mahajan</p>
      </div>
      <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/nishitkekane.jpg")}
         showOverlay={false} />
        <p className="person-name">Nishit Kekane</p>
      </div>
    </div>
  </div>,
  <div className="team-container" key="team-container-1">
      <TeamCard image={require("../../components/Assets/Teams/operationscoding.png.png")} teamName="Team Alpha" />
    </div>,
    <div className="person-container" key="person-container">
    <p className="general-heading">Design</p>
    <div className="person-cards">
      <div className="card-with-name">
          <PersonCard image={require("../../components/Assets/Teams/yashphuke.jpg")}
          showOverlay={false} />
          <p className="person-name">Yash Phuke</p>
      </div>
      <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/eeshanajarekar.jpg")}
         showOverlay={false} />
        <p className="person-name">Eeshan Ajarekar</p>
      </div>
    </div>
  </div>,
  <div className="team-container" key="team-container-1">
      <TeamCard image={require("../../components/Assets/Teams/designs.png.png")} teamName="Team Alpha" />
    </div>,
    <div className="person-container" key="person-container">
    <p className="general-heading">Execution</p>
    <div className="person-cards">
      <div className="card-with-name">
          <PersonCard image={require("../../components/Assets/Teams/yuktinbakshi.jpg")}
          showOverlay={false} />
          <p className="person-name">Yuktin Bakshi</p>
      </div>
      <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/shubhamkamble.jpg")}
         showOverlay={false} />
        <p className="person-name">Shubham Kamble</p>
      </div>
    </div>
  </div>,
  <div className="team-container" key="team-container-1">
      <TeamCard image={require("../../components/Assets/Teams/execution.png.png")} teamName="Team Alpha" />
    </div>,
    <div className="person-container" key="person-container">
    <p className="general-heading">FINE ARTS & SOCIAL MEDIA</p>
    <div className="person-cards">
      <div className="card-with-name">
          <PersonCard image={require("../../components/Assets/Teams/udaykumbhare.jpg")}
          showOverlay={false} />
          <p className="person-name">Uday Kumbhare</p>
      </div>
      <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/rasikamane.jpg")}
        showOverlay={false} />
        <p className="person-name">Rasika Mane</p>
      </div>
    </div>
  </div>,
  <div className="team-container" key="team-container-1">
      <TeamCard image={require("../../components/Assets/Teams/fineartsa.png.png")} teamName="Team Alpha" />
    </div>,
    <div className="person-container" key="person-container">
    <p className="general-heading">VJTI MUMBAI CUBE OPEN</p>
    <div className="person-cards">
      <div className="card-with-name">
          <PersonCard image={require("../../components/Assets/Teams/achalnaikwadi.jpg")}
          showOverlay={false} />
          <p className="person-name">Achal Naikwadi</p>
      </div>
      <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/chitranshujha.jpg")}
         showOverlay={false} />
        <p className="person-name">Chitranshu Jha</p>
      </div>
    </div>
  </div>,
  <div className="team-container" key="team-container-1">
      <TeamCard image={require("../../components/Assets/Teams/vmco.png.png")} teamName="Team Alpha" />
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
