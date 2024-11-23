import React from 'react';
import './GLS.css';
import spacedeckImage from './spacedeck2.jpg';
import garageImage from './spaceship_garage.jpeg';
import LectureCard from '../../components/LectureCard/LectureCard';
import CardGLS from '../../components/CardGLS/CardGLS';
import Sponsors from '../../components/Sponsors/Sponsors';
import sponsorsBG from './sponsorsBg4.jpg';
import lecturersBg from './lecturersBg3.jpg';
import hudImage from './hud1.png';
import robot from './robot3 (1) (1).png';
import SecondaryNavbar from '../../components/SecondaryNavbar/SecondaryNavbar';
// import PastSponsors from '../PastSponsors/PastSponsors';


const GLS = () => {
    const upcomingEvents = [
        {
            title: "Upcoming GLS Event 1",
            description: "Prepare for an unforgettable event where industry leaders and innovators come together to share their insights and expertise. This session promises to ignite your curiosity, expand your knowledge, and inspire you to take on new challenges. Join us as we embark on a journey into the latest advancements and future possibilities!",
            imageUrl: require("../../components/CardGLS/space1.jpg"), // Replace with actual image URL
            buttonText: "Register",
            date: "12th January 2024",
            time: "9:30 AM",
            venue: "VJTI Quad"
        },
        {
            title: "Upcoming GLS Event 2",
            description: "Don’t miss out on this unique opportunity to hear from a visionary speaker as they share groundbreaking ideas and strategies that are reshaping the world. With a wealth of experience and a passion for innovation, our guest will provide valuable insights and guidance that can elevate your perspective and fuel your ambitions.",
            imageUrl: require("../../components/CardGLS/space1.jpg"), // Replace with actual image URL
            buttonText: "Register",
            date: "15th February 2024",
            time: "11:00 AM",
            venue: "VJTI Auditorium"
        },
        {
            title: "Upcoming GLS Event 3",
            description: "Step into the world of innovation and discovery as we welcome a prominent figure in technology and science. This session is designed to inspire and empower you with real-world knowledge and experiences that can help you make a difference. Get ready to be captivated by stories of success, resilience, and breakthrough achievements!",
            imageUrl: require("../../components/CardGLS/space1.jpg"), 
            buttonText: "Register",
            date: "20th March 2024",
            time: "2:00 PM",
            venue: "VJTI Conference Hall"
        },
    ];
    const pastLectures = [
        {
            title: "Dr. A.P.J. Abdul Kalam",
            description: "Summary of the first past lecture.",
            imageUrl: require('../../components/LectureCard/apj_abdul_kalam.jpg'),
        },
        {
            title: "Sophia",
            description: "Summary of the first past lecture.",
            imageUrl: require('../../components/LectureCard/sophia.jpeg'),
        },
        {
            title: "Mr. Ratan Tata",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/ratan_tata.jpg'),
        },
        {
            title: "HH Dalai Lama",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/dalai_lama.avif'),
        },
        {
            title: "Mrs. Kiran Bedi",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/kiran_bedi.jpg'),
        },
        {
            title: "Mr. Leland Hartwell",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/leland_hartwell.jpg'),
        },
        {
            title: "Mr. Boman Irani",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/boman_irani.jpg'),
        },
        {
            title: "Mrs. Ratna Pathak",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/ratna_pathak.jpg'),
        },
        {
            title: "Mr. Darshan Jariwala",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/darshan_jariwala.jpg'),
        },
        {
            title: "Mr. Harsha Bhogle",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/harsha_bhogle.jpg'),
        },
        {
            title: "Mr. Bjarne Stroustrup",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/bjarne_stroustrup.webp'),
        },
        {
            title: "Mr. Jayant Narlikar",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/jayant_narlikar.jpg'),
        },
        {
            title: "Mr. Javagal Srinath",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/javagal_srinath.jpg'), 
        },
        {
            title: "Mr. Narayana Murthy",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/narayana_murthy.jpg'),
        },
        {
            title: "Shri Gaur Gopal Das",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/gaurgopal_das.png'),
        },
        {
            title: "Mr. Vappala Balachandran",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/vappala_balachandran.jpg'),
        },
        {
            title: "Dr. A.S. Kiran Kumar",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/dr_as_kiran_kumar.webp'), 
        },
        {
            title: "Padmashree Nana Patekar",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/nana_patekar.jpg'), 
        },
        {
            title: "Mr. Rajendra Singh",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/rajendra_singh.jpg'),
        },
        {
            title: "Mr. Simon Taufel",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/simon_taufel.jpg'),
        },
        {
            title: "Mr. Sonam Wangchuk",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/sonam_wangchuk.png'), 
        },
        {
            title: "Ashish Chanchlani",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/ashish_chanchlani.jpg'),
        },
        {
            title: "Mr. Vijendar Chauhan",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/vijendar_chauhan.jpg'),
        },
        {
            title: "Shree B.N. Ramakrishna",
            description: "Summary of the second past lecture.",
            imageUrl: require('../../components/LectureCard/bn_ramakrishna.jpg'), 
        },
    ];
    const pastSponsors = [
        { name: 'Sponsor A', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Sponsor B', logo: require('../../components/Sponsors/sponsors/microsoft.png') },
        { name: 'Sponsor C', logo: require('../../components/Sponsors/sponsors/ibm.png') },
        { name: 'Sponsor A', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Sponsor C', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Sponsor A', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Sponsor C', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Sponsor C', logo: require('../../components/Sponsors/sponsors/google.png') },
      ];
    
      const mediaSponsors = [
        { name: 'Media Sponsor A', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Media Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Media Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Media Sponsor A', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Media Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Media Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Media Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Media Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
      ];
    
      const affiliatedSponsors = [
        { name: 'Affiliated Sponsor A', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Affiliated Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Affiliated Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Affiliated Sponsor A', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Affiliated Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Affiliated Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Affiliated Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
        { name: 'Affiliated Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
      ];
    return (
        <div className="gls-container">
            <SecondaryNavbar />
            {/* Full-page Background */}
            <div className="full-page" style={{ backgroundImage: `url(${garageImage})` }}>
                <h1 className="centered-text">Guest Lecture Series</h1>
                 <div className="robot">
                     <img src={robot} alt="Robot" />
                 </div>
                 <div className="rotating-circle">
                     <img src={hudImage} alt="HUD Circle" />
                 </div>
            </div>

            {/* Horizontal Scroll */}
            <div className="horizontal-scroll-container">
                <h1 className="upcoming-gls-text">UPCOMING GLS</h1>
                <div className="horizontal-scroll">
                    {upcomingEvents.map((event, index) => (
                        <div
                            key={index}
                            className="scroll-item"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${spacedeckImage})`, 
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                minWidth: '100vw',
                                minHeight: '100vh',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <CardGLS
                                title={event.title}
                                description={event.description}
                                imageUrl={event.imageUrl}
                                buttonText={event.buttonText}
                                date={event.date}
                                time={event.time}
                                venue={event.venue}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="content-container" style={{ backgroundImage: `url(${lecturersBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
  <section className="past-lectures">
    <h1 className="past-lecturers-text">Past Lecturers</h1>
    <div className="past-lectures-grid">
      {pastLectures.map((lecture, index) => (
        <LectureCard
          key={index}
          title={lecture.title}
          description={lecture.description}
          imageUrl={lecture.imageUrl}
          buttonText={lecture.buttonText}
        />
      ))}
    </div>
  </section>
</div>
            {/* Another Full-page Background */}
            <div className="sponsors-container" style={{ backgroundImage: `url(${sponsorsBG})` }}>
        <h1 className="sponsors-heading">Sponsors</h1>
        <div className="sponsors-box">
          <Sponsors sponsors={pastSponsors} title="Past Sponsors" />
          <Sponsors sponsors={mediaSponsors} title="Media Partners" />
          <Sponsors sponsors={affiliatedSponsors} title="Affiliated Partners" />
        </div>
      </div>
        </div>
    );
};

export default GLS;
