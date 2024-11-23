import React, { useEffect, useState } from 'react';
import './Events.css';


const Events = () => {
  const events = [
    { id: 1, title: 'Robo Wars', content: 'Robots battle in an epic showdown', imageSrc: '/images/robowar2.jpg', info: 'Unleash your engineering prowess in an epic showdown of robots! In Robo Wars, participants will build and control their combat robots to battle in a specially designed arena. The objective is to disable or immobilize the opponent\'s robot within a time limit. Expect intense clashes, strategic maneuvers, and sparks flying as bots fight for supremacy. Last bot standing wins!' },
    { id: 2, title: 'Robo Soccer', content: 'Details for Event 2', imageSrc:'/images/robosoccer1.jpg' },
    { id: 3, title: 'Monster Arena', content: 'Details for Event 3', imageSrc:'/images/monsterarena.jpg' },
    { id: 4, title: 'Cubing', content: 'Details for Event 4', imageSrc:'/images/cubing2.jpg' },
    { id: 5, title: 'Robo Strike', content: 'Details for Event 5' },
    { id: 6, title: 'Aqua Bot', content: 'Details for Event 6' },
    { id: 7, title: 'VRC', content: 'Details for Event 7' },
    { id: 8, title: 'Sumo Bot', content: 'Details for Event 8' },
    { id: 9, title: 'Event 9', content: 'Details for Event 9' },
    { id: 10, title: 'Event 10', content: 'Details for Event 9' },
    { id: 11, title: 'Event 11', content: 'Details for Event 9' },
    { id: 12, title: 'Event 12', content: 'Details for Event 9' },
    { id: 13, title: 'Event 13', content: 'Details for Event 9' },
    //robo strike, aqua bot, vrc, sumo
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
