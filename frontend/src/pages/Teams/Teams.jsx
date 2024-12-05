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
            email="paavan.patil@technovanza.org"
            showOverlay={true} />
          <p className="person-name">Paavan Patil</p>
        </div>
        <div className="card-with-name">
            <PersonCard image={require("../../components/Assets/Teams/anamkhanzada.jpg")}
             instagram="https://www.instagram.com/anam_khanzada_"
            linkedin="https://www.linkedin.com/in/anam-khanzada-095429305"
            email="anam.khanzadah@technovanza.org"
            showOverlay={true} />
            <p className="person-name">Anam Khanzada</p>
        </div>
        <div className="card-with-name">
            <PersonCard image={require("../../components/Assets/Teams/nayaneshgudla.jpg")} 
            instagram="https://www.instagram.com/g_nayanesh"
            linkedin="https://www.linkedin.com/in/nayanesh-gudla"
            email="nayanesh.gudla@technovanza.org"
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
          <PersonCard image={require("../../components/Assets/Teams/nirmalpatil.webp")}
          instagram="https://www.instagram.com/nirmal_patil01?igsh=MXEzN2Vmem54dWQ2MA=="
          linkedin="https://www.linkedin.com/in/nirmal-patil-11104825a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          email="nirmal.patil@technovanza.org"
          showOverlay={true} />
          <p className="person-name">Nirmal Patil</p>
      </div>
      <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/shashinvathode.webp")}
          instagram="https://www.instagram.com/shashin_av/"
          linkedin="https://www.linkedin.com/in/shashin-vathode-290704274/"
          email="shashinvathode123@gmail.com"
         showOverlay={true} />
        <p className="person-name">Shashin Vathode</p>
      </div>
    </div>
  </div>,
    <div className="person-container" key="person-container">
    <p className="general-heading">Sponsorship</p>
    <div className="person-cards">
      <div className="card-with-name">
          <PersonCard image={require("../../components/Assets/Teams/kabirshah.jpg")}
            instagram="https://www.instagram.com/kabirshah133?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            linkedin="https://www.linkedin.com/in/kabir-shah-30320524a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            email="kabir13shah@gmail.com"
           showOverlay={true}/>
          <p className="person-name">Kabir Shah</p>
      </div>
      <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/dineshpatel.webp")}
        instagram="https://www.instagram.com/dnesh.patel_/"
        linkedin="https://www.linkedin.com/in/dinesh-patel-162533290/"
        email="dinesh.patel@technovanza.org"
         showOverlay={true} />
        <p className="person-name">Dinesh Patel</p>
      </div>
    </div>
  </div>,
  <div className="team-container" key="team-container-1">
      <TeamCard image={require("../../components/Assets/Teams/sponsorship.webp")} teamName="Team Alpha" />
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
          instagram="https://www.instagram.com/whyyyyyaditiiiiiiii?igsh=MXFianA4ZTFsMW1hNw=="
          linkedin="https://www.linkedin.com/in/aditi-nasare-aa0017283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          email="aditi.nasare@technovanza.org"
          showOverlay={true} />
          <p className="person-name">Aditi Nasare</p>
      </div>
      <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/ishayupotey.webp")}
          instagram="https://www.instagram.com/ishayu_7743"
          linkedin="https://www.linkedin.com/in/ishayu-potey-89777324b/"
          email="ishayupotey@gmail.com"
         showOverlay={true} />
        <p className="person-name">Ishayu Potey</p>
      </div>
    </div>
  </div>,
  <div className="team-container" key="team-container-1">
      <TeamCard image={require("../../components/Assets/Teams/pradmin.webp")} teamName="Team Alpha" />
    </div>,
    <div className="person-container" key="person-container">
    <p className="general-heading">Internal Publicity Officers</p>
    <div className="person-cards">
      <div className="card-with-name">
          <PersonCard image={require("../../components/Assets/Teams/aayushkhirraiyya.webp")}
          instagram= "https://www.instagram.com/ayush_asati_07?igsh=bXBldzh2NWNjYmpv"
          linkedin= "https://www.linkedin.com/in/aayush-khirraiyya-954a41242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          email= "ayushasati04@gmail.com"
          showOverlay={true} />
          <p className="person-name">Aayush Khirraiyya</p>
      </div>
      <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/ishabarhate.webp")}
        instagram="https://www.instagram.com/isha_barhate18?igsh=bGoydTFwNTEyZWZu"
        linkedin="https://www.linkedin.com/in/isha-barhate-914475316/"
        email="barhateisha@gmail.com"
        showOverlay={true} />
        <p className="person-name">Isha Barhate</p>
      </div>
      <div className="card-with-name">
            <PersonCard image={require("../../components/Assets/Teams/jayashbhuyar.webp")}
              instagram="https://www.instagram.com/jayash_bhuyar/"
              linkedin="https://www.linkedin.com/in/jayashbhuyar/"
              email="jayashbhuyar@gmail.com"
             showOverlay={true}/>
            <p className="person-name">Jayash Bhuyar</p>
        </div>
    </div>
  </div>,
    <div className="person-container" key="person-container">
    <p className="general-heading">Marketing</p>
    <div className="person-cards">
      <div className="card-with-name">
          <PersonCard image={require("../../components/Assets/Teams/khadijakb.webp")}
          instagram="https://www.instagram.com/khadija_bhinderwala/?next=%2F"
          linkedin="www.linkedin.com/in/khadija-kaeedzoher-bhinderwala-609349319"
          email="khadijakbhinderwala@gmail.com"
          showOverlay={true} />
          <p className="person-name">Khadija KB</p>
      </div>
      <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/smitsatra.webp")}
          instagram="https://www.instagram.com/smit.1822/profilecard/?igsh=MTh2czdxZmtybnQyaQ=="
          linkedin= ""
          email="smit.satra@technovanza.org"
         showOverlay={true} />
        <p className="person-name">Smit Satra</p>
      </div>
    </div>
  </div>,
  <div className="team-container" key="team-container-1">
      <TeamCard image={require("../../components/Assets/Teams/marketing.webp")} teamName="Team Alpha" />
    </div>,
  <div className="person-container" key="person-container">
  <p className="general-heading">Operations-Bots</p>
  <div className="person-cards">
    <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/amrutgotpagar.jpg")}
        instagram = "https://www.instagram.com/amrut04/"           
        linkedin = "https://in.linkedin.com/in/amrut-gotpagar-618722258"
        email = "amrut.gotpagar@technovanza.org"
        showOverlay={true} />
        <p className="person-name">Amrut Gotpagar</p>
    </div>
    <div className="card-with-name">
      <PersonCard image={require("../../components/Assets/Teams/shwetakare.webp")}
        instagram = "https://www.instagram.com/__shweta_kare__/"           
        linkedin = "https://www.linkedin.com/in/shweta-kare-097a86310/"
        email = "shwetakare29@gmail.com "
       showOverlay={true} />
      <p className="person-name">Shweta Kare</p>
    </div>
  </div>
</div>,
<div className="team-container" key="team-container-1">
      <TeamCard image={require("../../components/Assets/Teams/operationsbots.png.webp")} teamName="Team Alpha" />
    </div>,
    
    <div className="person-container" key="person-container">
    <p className="general-heading">Operations-Coding</p>
    <div className="person-cards">
      <div className="card-with-name">
          <PersonCard image={require("../../components/Assets/Teams/harshalamahajan.webp")}
          instagram="https://www.instagram.com/m.harshala_99/?hl=en"
          linkedin="https://www.linkedin.com/in/harshalam334"
          email="mharshala334@gmail.com"
          showOverlay={true}/>
          <p className="person-name">Harshala Mahajan</p>
      </div>
      <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/nishitkekane.webp")}
          instagram="https://www.instagram.com/only_nishit/"
          linkedin="https://www.linkedin.com/in/nishit-kekane-b02b7324b/"
          email="nishit.kekane04@gmail.com"
         showOverlay={true} />
        <p className="person-name">Nishit Kekane</p>
      </div>
    </div>
  </div>,
  <div className="team-container" key="team-container-1">
      <TeamCard image={require("../../components/Assets/Teams/operationscoding.png.webp")} teamName="Team Alpha" />
    </div>,
    <div className="person-container" key="person-container">
    <p className="general-heading">Design</p>
    <div className="person-cards">
      <div className="card-with-name">
          <PersonCard image={require("../../components/Assets/Teams/yashphuke.jpg")}
          instagram="https://www.instagram.com/yasssshhhhhh_"
          linkedin="www.linkedin.com/in/yash-phuke-606126203"
          email="phukeyash0@gmail.com"
          showOverlay={true} />
          <p className="person-name">Yash Phuke</p>
      </div>
      <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/eeshanajarekar.webp")}
         showOverlay={false} />
        <p className="person-name">Eeshan Ajarekar</p>
      </div>
    </div>
  </div>,
  <div className="team-container" key="team-container-1">
      <TeamCard image={require("../../components/Assets/Teams/designs.png.webp")} teamName="Team Alpha" />
    </div>,
    <div className="person-container" key="person-container">
    <p className="general-heading">Execution</p>
    <div className="person-cards">
      <div className="card-with-name">
          <PersonCard image={require("../../components/Assets/Teams/yuktinbakshi.webp")}
          showOverlay={false} />
          <p className="person-name">Yuktin Bakshi</p>
      </div>
      <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/shubhamkamble.webp")}
          instagram="https://www.instagram.com/_shubham_9419?utm_source=qr&igsh=YnVmeG45NDh3d2M5"
          linkedin="https://www.linkedin.com/in/shubham-kamble-0b209a262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          email= "shubh75yahoo@gmail.com"
         showOverlay={true} />
        <p className="person-name">Shubham Kamble</p>
      </div>
    </div>
  </div>,
  <div className="team-container" key="team-container-1">
      <TeamCard image={require("../../components/Assets/Teams/execution.png.webp")} teamName="Team Alpha" />
    </div>,
    <div className="person-container" key="person-container">
    <p className="general-heading">FINE ARTS & SOCIAL MEDIA</p>
    <div className="person-cards">
      <div className="card-with-name">
          <PersonCard image={require("../../components/Assets/Teams/udaykumbhare.webp")}
          instagram="https://www.instagram.com/uday_kumbhare_/profilecard/?igsh=MXd2cG1jYmx0dTJkaA=="
          linkedin="https://www.linkedin.com/in/uday-kumbhare-57b876296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          email="udaykumbhare18@gmail.com"
          showOverlay={true} />
          <p className="person-name">Uday Kumbhare</p>
      </div>
      <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/rasikamane.webp")}
        instagram="https://www.instagram.com/_rasikamane/profilecard/?igsh=MW9yeDB2cDh5OW92bw=="
        linkedin="https://www.linkedin.com/in/rasika-mane-92398a279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        email="rasikamane2004@gmail.com"
        showOverlay={true} />
        <p className="person-name">Rasika Mane</p>
      </div>
    </div>
  </div>,
  <div className="team-container" key="team-container-1">
      <TeamCard image={require("../../components/Assets/Teams/fineartsa.png.webp")} teamName="Team Alpha" />
    </div>,
    <div className="person-container" key="person-container">
    <p className="general-heading">VJTI MUMBAI CUBE OPEN</p>
    <div className="person-cards">
      <div className="card-with-name">
          <PersonCard image={require("../../components/Assets/Teams/achalnaikwadi.webp")}
          instagram="https://www.instagram.com/_achal_naikwadi/profilecard/?igsh=MWgwOXZmbGRnMnNzNw=="
          linkedin="https://www.linkedin.com/in/achal-naikwadi-a7a12b303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          email="achalnaikwadi2005@gmail.com"
          showOverlay={true} />
          <p className="person-name">Achal Naikwadi</p>
      </div>
      <div className="card-with-name">
        <PersonCard image={require("../../components/Assets/Teams/chitranshujha.webp")}
         showOverlay={false} />
        <p className="person-name">Chitranshu Jha</p>
      </div>
    </div>
  </div>,
  <div className="team-container" key="team-container-1">
      <TeamCard image={require("../../components/Assets/Teams/vmco.png.webp")} teamName="Team Alpha" />
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
