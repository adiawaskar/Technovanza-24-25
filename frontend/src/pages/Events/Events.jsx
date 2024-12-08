import React, { useEffect, useState } from 'react';
import './Events.css';
import SecondaryNavbar from '../../components/SecondaryNavbar/SecondaryNavbar';


const Events = () => {
  const events = [
    { 
      id: 1, 
      title: 'Robo Wars', 
      content: 'Robots battle in an epic showdown', 
      imageSrc: require('../../components/Assets/Events/robowars.png'), 
      info: 'Strength doesn’t come from what you can do; it comes from overcoming what your opponent thought you couldn’t. Technovanza 2025 presents the Robo Wars, the ultimate battleground where engineering meets destruction! Gear up to witness the clash of the titans as robots weighing 8 kg and 15 kg lock horns in an arena built for mayhem. From powerful spins to strategic strikes, every move counts as you unleash your bot’s full potential. This is not just a test of toughness but also of tactics, as you outsmart and overpower your opponent in a no-holds-barred robotic rumble. Prepare to electrify the crowd with sparks flying, metal clashing, and bots battling for supremacy. Are you ready to dominate the arena? Bring your best bot and show us the true power of innovation. Let the war begin!',
      brochure: 'https://drive.google.com/file/d/1HXVXm4xIJplBU00spOE-nSfeKewaLMmw/view?usp=drive_link',
      register: 'https://unstop.com/o/Bw2t7gD?lb=uImoFA8T&utm_medium=Share&utm_source=shortUrl'
    },
    { 
      id: 2, 
      title: 'Robo Soccer', 
      content: 'Football, but with robots!', 
      imageSrc: require('../../components/Assets/Events/robosoccer.png'),
      info: 'Football is the beautiful game, and when it\'s played by robots, it’s pure innovation. Get ready for a spectacular fusion of engineering and soccer! Welcome to Robo Soccer at Technovanza 2025, where we redefine the love for football with the magic of robotics. Build your manual soccer-playing bots, strategize your moves, and channel the brilliance of Messi, Ronaldo, or Neymar—robotic style! No screens. No controllers. Just pure, heart-pounding action on the field. As your bot dribbles, defends, and scores, the arena will come alive with cheers and adrenaline. It’s time to stop watching and start playing. So, gather your squad, get your bots ready, and bring the trophy home. Are you ready to kick it? Because Robo Soccer is where the future of football begins!' ,
      brochure: 'https://drive.google.com/file/d/1L_2BJKxT7HjU4IrZiaD42n6uMd9fW5b-/view?usp=drive_link',
      register: 'https://unstop.com/o/LrZFYyG?lb=uImoFA8T&utm_medium=Share&utm_source=shortUrl'
    },
    { 
      id: 3, 
      title: 'Robo Strike', 
      content: 'Battle bots in a strategic combat competition', 
      imageSrc: require('../../components/Assets/Events/robostrike.png'),
      info: 'Every strike is a chance to turn dreams into reality! Brace yourselves for the electrifying Robo Strike, where innovation meets the thrill of the arcade! Technovanza 2025 invites you to unleash your inner robotic genius in this unique mashup of Air Hockey and Robotics. Build and command your bots to glide, strike, and dominate the arena in an intense battle of skill and precision. It’s not just about hitting the puck—it’s about hitting it with strategy, speed, and strength. Each strike is a step closer to glory, and every second is a chance to outmaneuver your opponent. Will your bot bring home the winning strike? Game on, engineers! Let’s make it a showdown to remember.' ,
      brochure: 'https://drive.google.com/file/d/1fjCAkK6cbOcVSCZL4TuzougcqQ6I5xdg/view?usp=drive_link',
      register: 'https://unstop.com/o/wEfdSc6?lb=uImoFA8T&utm_medium=Share&utm_source=shortUrl'
    },
    { 
      id: 4, 
      title: 'Robo Sumo', 
      content: 'Bot battles in a sumo wrestling arena', 
      imageSrc: require('../../components/Assets/Events/robosumo.png'),
      info: 'Technovanza 2025 presents Robo Sumo, where bots clash in a battle of brute strength, resilience, and strategy! Step into the Dangal-styled arena, where two bots face off in an electrifying contest. Push your opponent to their limits—quite literally—by overpowering them and driving them out of the ring. Who will dominate the arena? Who will outlast the 120 seconds of intense combat? Gear up for a thrilling experience of power and precision like never before' ,
      brochure: 'https://drive.google.com/file/d/1BKehraYTTUzYKfNWcId1sbhgWE04Th7m/view?usp=drive_link',
      register: 'https://unstop.com/o/5JmGVwQ?lb=uImoFA8T&utm_medium=Share&utm_source=shortUrl'
    }, 
    { 
      id: 5, 
      title: 'VRC', 
      content: 'VJTI Robotics Competition: Design, build, and compete', 
      imageSrc: require('../../components/Assets/Events/vrc.png'),
      info: 'Every innovation starts as an idea, and every champion starts as a challenger. Technovanza 2025 invites you to the VJTI Robotics Challenge (VRC) – the ultimate test of creativity, engineering, and strategy! This year, the battlefield takes a virtual leap, blending technology with imagination. In this UNITY Game Engine-based simulation, you will design, build, and program your virtual bots to navigate through challenging arenas filled with intricate obstacles and tasks. Whether it’s crafting precise models or coding flawless algorithms, the power is in your hands to shape your bot into a champion. Compete in a world where every decision matters, where innovation meets execution, and where skill defines success. Let your creativity shine as you take on the Virtual VRC, where the thrills of robotics come alive in an immersive online format. Are you ready to rise to the challenge? Step into the virtual arena and make your mark!',
      brochure: 'https://drive.google.com/file/d/1OwixdyShawPbcQsWvGgwP-TmpB1AJiUA/view?usp=drive_link' 
    },
    { 
      id: 6, 
      title: 'Monster Arena', 
      content: 'Monster trucks meet robots in the ultimate arena battle!', 
      imageSrc: require('../../components/Assets/Events/monsterarena.png'),
      info: 'A monster isn\'t born... A monster is made! Technovanza 2025 proudly brings you Monster Arena, where legends are forged in the fiery crucible of challenges.Burnt like a brick in fire, shaped by every hurdle, this is the tale of creating something extraordinary. Beneath the stars and amidst the cosmic expanse, your monster awaits its moment to shine. Let’s embark on this stellar journey—across galaxies, over moons, and through the technical universe—to bring forth your monster.Are you ready to unleash the ultimate creation and conquer the Monster Arena?' ,
      brochure: 'https://drive.google.com/file/d/1rR2E656dAT3tzaJMOIUFQt82-FUT3SAz/view?usp=drive_link',
      register: 'https://unstop.com/o/AMQaRzP?lb=uImoFA8T&utm_medium=Share&utm_source=shortUrl'
    },
    { 
      id: 7, 
      title: 'F1 Power Drift', 
      content: 'Race remote-controlled cars at high speed!', 
      imageSrc: require('../../components/Assets/Events/f1.png'),
      info: 'Get ready for the ultimate racing experience at the F1 Power Drift Grand Prix! This year, it’s all about speed, precision, and power drifting. Design your own high-performance race bots and take on a challenging track full of tight turns and obstacles. Test your skills in this high-octane race, where only the fastest and most agile bots will succeed. It’s time to show off your drifting mastery and cross the finish line in style. Are you ready to drift your way to victory? Join us at Technovanza 2025!' ,
      brochure: 'https://drive.google.com/file/d/1uOtvc8R0pw7vUOzTuAZDfq3gE3sKgG76/view?usp=drive_link',
      register: 'https://unstop.com/o/iWx9cHr?lb=uImoFA8T&utm_medium=Share&utm_source=shortUrl'
    },
    { 
      id: 8, 
      title: 'Hackathon', 
      content: 'Code your way to victory!', 
      imageSrc: require('../../components/Assets/Events/hackathon.png'),
      info: 'Hackathon is a high-energy event where participants come together to solve real-world problems through innovative coding solutions. It’s a marathon of creativity, teamwork, and coding where participants have limited time to build their projects and present them. Whether you\'re a seasoned developer or a newcomer, the Hackathon offers a platform to challenge yourself and showcase your skills.' ,
      brochure: 'https://drive.google.com/file/d/1gV1XWZDWodIwn3_8K7YJULFmYuZZgnk5/view?usp=drive_linkX',
      register: 'https://unstop.com/o/vixc1dj?lb=uImoFA8T&utm_medium=Share&utm_source=shortUrl'
    },
    { 
      id: 9, 
      title: 'Bit By Bit', 
      content: 'Build robots that can navigate water!', 
      imageSrc: require('../../components/Assets/Events/bitbybit.png'),
      info: 'Step into the thrilling world of competitive coding with Bit-by-Bit, where every keystroke brings you closer to glory! Picture a grid of coding challenges carefully curated to test your logic, strategy, and creativity. Each row holds a set of problems, and your mission is to choose, conquer, and finish first.With the clock ticking, decisions matter: Which challenge aligns with your strengths? Can you strategize under pressure? How fast and precise can you be?This isn\'t just a competition—it\'s a battle of logic, precision, and teamwork. The first team to crack their chosen row wins the race. Whether you’re a seasoned coder or an emerging talent, Bit-by-Bit is your stage to shine. Are you ready to turn coding into a battlefield? Rise to the challenge, strategize, and emerge victorious one solution at a time.' ,
      brochure: 'https://drive.google.com/file/d/1j1Gay3cDXwBCwc5UZjcttCEOZpb3_aT3/view?usp=drive_link',
      register: 'https://unstop.com/o/AC1oHsh?lb=uImoFA8T&utm_medium=Share&utm_source=shortUrl'
    },
    { 
      id: 10, 
      title: 'Code Relay', 
      content: 'Bot battles in a sumo wrestling arena', 
      imageSrc: require('../../components/Assets/Events/coderelay.png'),
      info: 'Welcome to Code Relay, where coding meets creativity, and teamwork drives triumph! Get ready to dive into a dynamic team-based challenge that’s as much about collaboration as it is about code. In this high-energy competition, your mission is to recreate a visually stunning website using modern web technologies. Sounds simple? Here’s the twist: it’s a relay! Each team member will take the baton to code their part within a limited time before passing it on. Precision and seamless coordination are the keys to victory. As the timer counts down, can you adapt, communicate, and code under pressure to piece together the perfect design? The team that delivers the most accurate replication wins not just the prize but the admiration of their peers. Think fast. Code faster. Relay to victory!' ,
      brochure: 'https://drive.google.com/file/d/1Vyhs1s5TF-K_84r-4dposBFwRU2bCFJK/view?usp=drive_link',
      register: 'https://unstop.com/o/AltsuYg?lb=uImoFA8T&utm_medium=Share&utm_source=shortUrl'
    },
    { 
      id: 11, 
      title: 'Prompt Battle', 
      content: 'Prompt Battle', 
      imageSrc: require('../../components/Assets/Events/promptbattle.png'),
      info: 'Step into the arena of ideas with Prompt Battle, where creativity meets ingenuity! This is your platform to think outside the box, innovate on the spot, and turn your concepts into groundbreaking solutions. Whether it\'s technical brilliance or imaginative storytelling, this battle will test your ability to adapt and impress in real time. Compete against the sharpest minds and let your ideas do the talking. The spotlight is yours—are you ready to take the stage and emerge victorious? Let the battle begin at Technovanza 2025!' ,
      brochure: 'https://drive.google.com/file/d/1kaWxIEcn4PyWh06lMIks5nFEIZPlEi6D/view?usp=drive_link'
    },    
    { 
      id: 12, 
      title: 'School Cup', 
      content: 'Competition for schools', 
      imageSrc: require('../../components/Assets/Events/schoolcup.png'),
      info: 'Technovanza School Cup 2024 is here! Are you ready to innovate, compete, and explore the technologies of tomorrow? Step into the world of Technologies of the Parallel Future and bring your ideas to life! Showcase your skills, challenge your limits, and stand a chance to shine among the brightest young minds! ' ,
      brochure: 'https://drive.google.com/file/d/1zrO2StSdOffGQhHKMkZPPBivHLGXI9l1/view?usp=drive_link',
      register: 'https://unstop.com/o/X7Lgye0?lb=uImoFA8T&utm_medium=Share&utm_source=shortUrl'
    },    
  ];

  const [cardIndex, setCardIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
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
          {/* <h2 className="card-title">{events[cardIndex].title}</h2> */}
          {/* <p className="card-content">{events[cardIndex].content}</p> */}
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
            <div className="register-btn" onClick={() => window.open(events[cardIndex].register, '_blank')}>
                <span>Register</span>
            </div>
            <div className="brochure-btn" onClick={() => window.open(events[cardIndex].brochure, '_blank')}>
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
