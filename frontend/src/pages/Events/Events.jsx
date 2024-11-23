import React, { useEffect, useState } from 'react';
import './Events.css';
import SecondaryNavbar from '../../components/SecondaryNavbar/SecondaryNavbar';


const Events = () => {
  const events = [
    { 
      id: 1, 
      title: 'Robo Wars', 
      content: 'Robots battle in an epic showdown', 
      imageSrc: '/images/robowar2.jpg', 
      info: 'Unleash your engineering prowess in an epic showdown of robots! In Robo Wars, participants will build and control their combat robots to battle in a specially designed arena. The objective is to disable or immobilize the opponent\'s robot within a time limit. Expect intense clashes, strategic maneuvers, and sparks flying as bots fight for supremacy. Last bot standing wins!' 
    },
    { 
      id: 2, 
      title: 'Robo Soccer', 
      content: 'Football, but with robots!', 
      imageSrc: '/images/robosoccer1.jpg',
      info: 'Robo Soccer is a thrilling event where teams of robots face off in a football match. Each team must build robots capable of dribbling, passing, and scoring goals in a soccer-themed arena. It’s a perfect blend of robotics and sports, demanding both technical expertise and strategic thinking. Who will score the most goals and claim the title of Robo Soccer champion?' 
    },
    { 
      id: 3, 
      title: 'Monster Arena', 
      content: 'Monster trucks meet robots in the ultimate arena battle!', 
      imageSrc: '/images/monsterarena.jpg',
      info: 'Get ready for the Monster Arena, where robotics meets the thrill of monster truck battles. Participants must design and control robots that mimic the power and destruction of monster trucks. The arena is filled with obstacles, ramps, and explosive challenges as robots clash in an adrenaline-pumping contest to see who reigns supreme in the Monster Arena.' 
    },
    { 
      id: 4, 
      title: 'Cubing', 
      content: 'The art of speedcubing and solving the Rubik\'s Cube', 
      imageSrc: '/images/cubing2.jpg',
      info: 'Cubing is an event for puzzle enthusiasts and speedcubing experts. Participants will race against the clock to solve the classic Rubik\'s Cube in the shortest time possible. Whether you\'re a beginner or an experienced cuber, this event offers exciting challenges and a chance to show off your puzzle-solving skills. Will you be the fastest cuber in the competition?' 
    },
    { 
      id: 5, 
      title: 'Robo Strike', 
      content: 'Battle bots in a strategic combat competition', 
      imageSrc: '/images/robostrike.jpg',
      info: 'Robo Strike brings together engineering and combat as participants design robots that must battle in a tactical arena. The event focuses on strategy, precision, and durability. Bots must be able to withstand attacks while dealing damage to their opponents. The last robot standing wins the Robo Strike title.' 
    },
    { 
      id: 6, 
      title: 'Aqua Bot', 
      content: 'Build robots that can navigate water!', 
      imageSrc: '/images/aquabot.jpg',
      info: 'Aqua Bot challenges participants to create robots capable of navigating water obstacles. These robots will have to be designed with water resistance and propulsion in mind. The competition consists of a series of tests where bots must complete tasks on water, from racing to obstacle avoidance. It’s an exciting challenge for aspiring marine robotics engineers.' 
    },
    { 
      id: 7, 
      title: 'VRC', 
      content: 'VJTI Robotics Competition: Design, build, and compete', 
      imageSrc: '/images/vrc.jpg',
      info: 'VJTI Robotics Competition (VRC) is an exciting and educational event where teams compete to design and build robots that can perform various tasks. The competition emphasizes teamwork, problem-solving, and innovation, as teams work together to create robots that can score points in various challenges. Who will build the most efficient and versatile robot?' 
    },
    { 
      id: 8, 
      title: 'Robo Sumo', 
      content: 'Bot battles in a sumo wrestling arena', 
      imageSrc: '/images/sumobot.jpg',
      info: 'Robo Sumo is a thrilling robot battle event where competitors design robots to compete in a sumo wrestling-style match. The objective is to push the opponent’s robot out of the ring within a time limit. It’s a test of strength, strategy, and engineering prowess, as robots battle for dominance in the arena.' 
    },
    { 
      id: 9, 
      title: 'Hackathon', 
      content: 'Code your way to victory!', 
      imageSrc: '/images/hackathon.jpg',
      info: 'Hackathon is a high-energy event where participants come together to solve real-world problems through innovative coding solutions. It’s a marathon of creativity, teamwork, and coding where participants have limited time to build their projects and present them. Whether you\'re a seasoned developer or a newcomer, the Hackathon offers a platform to challenge yourself and showcase your skills.' 
    },
    { 
      id: 10, 
      title: 'F1 RC Racing', 
      content: 'Race remote-controlled cars at high speed!', 
      imageSrc: '/images/f1rc.jpg',
      info: 'F1 RC Racing brings the thrill of Formula 1 racing to the world of remote-controlled cars. Participants will race custom-built RC cars on a challenging track, pushing their machines to the limit. It’s a test of speed, control, and precision, as racers aim to cross the finish line first. Will you dominate the track and claim the victory in F1 RC Racing?' 
    },
    { 
      id: 11, 
      title: 'Technodyssey', 
      content: 'Embark on a journey of technological innovation', 
      imageSrc: '/images/technodyssey.jpg',
      info: 'Technodyssey is an event designed for the tech enthusiasts who love exploring new technological frontiers. It’s a journey into the future of robotics, AI, and engineering, where participants get to solve complex problems using cutting-edge technologies. From solving coding challenges to hands-on tech experiments, Technodyssey is your chance to explore, learn, and innovate.' 
    },
    { 
      id: 12, 
      title: 'Trading Wars', 
      content: 'Compete in the world of stocks and investments', 
      imageSrc: '/images/tradingwars.jpg',
      info: 'Trading Wars is a competitive event where participants simulate real-world stock trading. Players will buy and sell virtual stocks, trying to maximize their profits by making the best investments. It’s a thrilling test of market knowledge, strategy, and decision-making under pressure. Who will rise to the top and emerge as the master of the trading floor?' 
    },
    { 
      id: 13, 
      title: 'Laser Show', 
      content: 'A dazzling display of lasers and technology', 
      imageSrc: '/images/lasershow.jpg',
      info: 'Laser Show is a visual spectacle featuring a combination of lasers, lights, and music. The event showcases how technology can create mesmerizing visual effects. Attendees will experience an unforgettable light show that combines creativity and technology in a beautiful way. It’s an event that will captivate all your senses and leave you in awe.' 
    }
  ];

  const [cardIndex, setCardIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null); // Track selected event
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);


  useEffect(() => {
    function rain() {
      const light = document.querySelector('.light');
      const e = document.createElement('div');
      const left = Math.floor(Math.random() * 310);
      const width = Math.random() * 5;
      const height = Math.random() * 50;
      const duration = Math.random() * 0.5;

      e.classList.add('drop');
      light.appendChild(e);
      e.style.left = left + 'px';
      e.style.width = 0.5 + width + 'px';
      e.style.height = 0.5 + height + 'px';
      e.style.animationDuration = 1 + duration + 's';

      setTimeout(() => {
        light.removeChild(e);
      }, 2000);
    }

    const interval = setInterval(rain, 20);
    return () => clearInterval(interval); 
  }, []);

  const handleEventClick = (index) => {
    setIsAnimating(true);
    setSelectedEvent(index);
    setTimeout(() => {
      setCardIndex(index);
      setIsAnimating(false);
    }, 700); 
  };

  const handleNextEvent = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedEvent((prev) => (prev + 1) % events.length);
      setCardIndex((prevIndex) => (prevIndex + 1) % events.length); 
      setIsAnimating(false);
    }, 700); 
  };

  const handlePreviousEvent = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedEvent((prev) => (prev - 1 + events.length) % events.length);
      setCardIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length); 
      setIsAnimating(false);
    }, 700); 
  };

     const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible); // Toggle details visibility
  };

  return (
    <div className="full-bg">
      <SecondaryNavbar />
      <div className="events-navbar">
        {events.map((event, index) => (
          <p
            key={event.id}
            className={`event ${selectedEvent === index ? "highlighted" : ""}`}
            onClick={() => handleEventClick(index)}
          >
            <span aria-hidden="true">{event.title}</span>
            {event.title}
            <span aria-hidden="true">{event.title}</span>
          </p>
        ))}
      </div>


      <div className="container">
        <div className="light"></div>
      </div>


     <div className={`card ${isAnimating ? 'card-exit-active' : 'card-enter-active'}`}>
      {events[cardIndex].imageSrc && (
        <img
          src={events[cardIndex].imageSrc}
          alt={events[cardIndex].title}
          className="card-image"
        />
      )}
       <div className="card-overlay">
          <h2 className="card-title">{events[cardIndex].title}</h2>
          <p className="card-content">{events[cardIndex].content}</p>
       </div>
    </div>

    <button className="see-more-btn" onClick={toggleDetails}>
        {isDetailsVisible ? 'Close' : 'See More'}
      </button>

        <div className={`event-details-container ${isDetailsVisible ? 'visible' : ''}`}>
        <div className={`event-details-box ${isAnimating ? 'details-exit-active' : 'details-enter-active'}`}>
          <h2>{events[cardIndex].title}</h2>
          <p>{events[cardIndex].info}</p>
        </div>
        <div className="event-buttons">
          <div className="register-btn">
            <span>Register</span>
          </div>
          <div className="brochure-btn">
            <span>Brochure</span>
          </div>
        </div>
      </div>
     
        <div className="button-container">
            <div className="button" onClick={handlePreviousEvent}>
                <div className="line-container">
                    <span className="text">Previous</span>
                    <div className="line line--top-left line--thick thick-line--short"></div>
                    <div className="line line--top-right line--thick thick-line--short"></div>
                    <div className="line line--bottom-left line--thick thick-line--long"></div>
                    <div className="line line--bottom-right line--thick thick-line--long"></div>
                    <div className="line line--top line--thin"></div>
                    <div className="line line--bottom line--thin"></div>
                    </div>
            </div>
            
            <div className="button" onClick={handleNextEvent}>
                <div className="line-container">
                    <span className="text">Next</span>
                    <div className="line line--top-left line--thick thick-line--short"></div>
                    <div className="line line--top-right line--thick thick-line--short"></div>
                    <div className="line line--bottom-left line--thick thick-line--long"></div>
                    <div className="line line--bottom-right line--thick thick-line--long"></div>
                    <div className="line line--top line--thin"></div>
                    <div className="line line--bottom line--thin"></div>
                    </div>
            </div>

            
        </div>
    </div>
  );
};

export default Events;
