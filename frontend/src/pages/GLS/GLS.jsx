import React from 'react';
import './GLS.css';
import spacedeckImage from './upcominggls.webp';
import exhibitionImage from './upcomingexhibition.webp';
import garageImage from './spaceship_garage.webp';
import LectureCard from '../../components/LectureCard/LectureCard';
import CardGLS from '../../components/CardGLS/CardGLS';
import Sponsors from '../../components/Sponsors/Sponsors';
import sponsorsBG from './sponsorsBg4.jpg';
import lecturersBg from './lecturersBg3.jpg';
import hudImage from './hud.webp';
import robot from './robot.webp';
import SecondaryNavbar from '../../components/SecondaryNavbar/SecondaryNavbar';
// import PastSponsors from '../PastSponsors/PastSponsors';


const GLS = () => {
    const upcomingExhibition = [
        {
            title: "Unitree Robotics",
            description: "Meet the ultimate duo of agility and intelligence — G1 and GO2 by Unitree Robotics! 🚀 Watch them redefine robotics like never before. Secure your spot today!",
            imageUrl: require("../../components/Assets/GLS/unitree.webp"), // Replace with actual image URL
            buttonText: "Register",
            date: "21st, 22nd, 23rd Dec 2024",
            time: "9am - 5pm",
            venue: "VJTI Mumbai"
        },
        {
            title: "Artiligent Robots",
            description: "Step into the world of intelligent robots with Ariligent! From smart solutions to futuristic designs, experience technology that’s one step ahead.",
            imageUrl: require("../../components/Assets/GLS/artiligent.webp"),  // Replace with actual image URL
            buttonText: "Register",
            date: "21st, 22nd, 23rd Dec 2024",
            time: "9am - 5pm",
            venue: "VJTI Mumbai"
        },
        {
            title: "Indro 6.0",
            description: "Meet Indro 6.0 — India's largest humanoid robot! A masterpiece of innovation and engineering awaits you. Join us and witness history in the making!",
             imageUrl: require("../../components/Assets/GLS/indro.webp"), 
            buttonText: "Register",
            date: "21st, 22nd, 23rd Dec 2024",
            time: "9am - 5pm",
            venue: "VJTI Mumbai"
        },
        {
            title: "Janyutech Robots",
            description: "Revolutionizing defense, one innovation at a time! Don’t miss the ultimate showcase of advanced AI and precision engineering with Janyutech Robots. Be there to witness the future of technology!",
             imageUrl: require("../../components/Assets/GLS/janyutech.webp"), 
            buttonText: "Register",
            date: "21st, 22nd, 23rd Dec 2024",
            time: "9am - 5pm",
            venue: "VJTI Mumbai"
        },
        {
            title: "Udaan 1.0",
            description: "Elevate your passion for technology with Udaan 1.0. A DIY drone kit that takes learning to new heights! Don't just dream of flying; build and pilot your innovation at Technovanza 2025.",
            imageUrl: require("../../components/Assets/GLS/udaan.webp"), 
            buttonText: "Register",
            date: "21st, 22nd, 23rd Dec 2024",
            time: "9am - 5pm",
            venue: "VJTI Mumbai"
        },
        {
            title: "Robo Bionics",
            description: "Join us at the Science and Tech Exhibition 2024 to witness 'Robo Bionics Grippy,' India’s 3D-printed prosthetic hand with touch sensitivity and multi-grip control.",
            imageUrl: require("../../components/Assets/GLS/robobionics.webp"), 
            buttonText: "Register",
            date: "21st, 22nd, 23rd Dec 2024",
            time: "10am - 5pm",
            venue: "VJTI Mumbai"
        },
        {
            title: "PiHU-1",
            description: "Step into the future with PiHU-1! Unveiling groundbreaking innovations at Technovanza's Science and Tech Exhibition 2025! Features: Audio-visual interaction system, Telepresence, Biped walking, Sensory feedback system, Smart teachable machine",
            imageUrl: require("../../components/Assets/GLS/pihu.jpeg"), 
            buttonText: "Register",
            date: "21st, 22nd, 23rd Dec 2024",
            time: "10am - 5pm",
            venue: "VJTI Mumbai"
        },
    ];

    const upcomingGLS = [
        {
            title: "Shri A.S. Kiran Kumar",
            description: "Dive into the stars and beyond! Shri A. S. Kiran Kumar, former ISRO Chairman, takes us through the marvels of India’s space program.",
            imageUrl: require("../../components/Assets/GLS/askirankumar.jpeg"), // Replace with actual image URL
            buttonText: "Register",
            date: "21st December, 2024",
            time: "11:00 AM",
            venue: "VJTI, Mumbai"
        },
        {
            title: "Science Talk with Rajan Chopra & Abhishek Agrahari",
            description: "Dive into the wonders of science! Technovanza's Science Talk brings you the dynamic duo—Rajan Chopra, a passionate Science Educator, and Abhishek Agrahari, an inspiring Science Communicator. From unraveling mysteries to sparking curiosity, this session is a must for all science enthusiasts!",
            imageUrl: require("../../components/Assets/GLS/rajanabhishek.jpeg"), // Replace with actual image URL
            buttonText: "Register",
             date: "21st December, 2024",
            time: "5:00 PM",
            venue: "VJTI, Mumbai"
        },
        {
            title: "Kuntal Joisher",
            description: "Witness an awe-inspiring journey of determination! Join us as Kuntal Joisher, the first vegan to conquer Mount Everest, shares his incredible story of resilience and purpose.",
            imageUrl: require("../../components/Assets/GLS/kuntaljoisher.jpeg"), 
            buttonText: "Register",
             date: "22nd December, 2024",
            time: "3:00 PM",
            venue: "VJTI, Mumbai"
        },
        {
            title: "Satya Narayan Choudhary, IPS",
            description: "Empowering Minds, Ensuring Safety! Join us for an insightful session with Satya Narayan Choudhary, IPS, Joint Commissioner of Police (L&O), Mumbai, as he delves into critical topics like cyber fraud awareness and women safety. Learn how to stay secure in an ever-evolving digital world.",
            imageUrl: require("../../components/Assets/GLS/ipssatya.jpeg"), 
            buttonText: "Register",
             date: "23rd December, 2024",
            time: "3:00 PM",
            venue: "VJTI, Mumbai"
        },
    ];
    const pastLectures = [
        {
            title: "Late Dr. A.P.J. Abdul Kalam",
            description: "Former President of India, renowned scientist, and the visionary behind India's missile program. Known as the 'Missile Man' and awarded the Bharat Ratna.",
            imageUrl: require('../../components/LectureCard/apj_abdul_kalam.webp'),
        },
        {
            title: "Sophia",
            description: "World-famous humanoid robot created by Hanson Robotics, known for her AI capabilities and human-like appearance. Named a UNDP Innovation Champion and granted Saudi Arabian citizenship.",
            imageUrl: require('../../components/LectureCard/sophia.jpeg'),
        },
        {
            title: "Late Mr. Ratan Tata",
            description: "Chairman Emeritus of Tata Sons, philanthropist, and one of India's most influential business leaders. He led the Tata Group for over two decades and received the Padma Bhushan and Padma Vibhushan.",
            imageUrl: require('../../components/LectureCard/ratan_tata.jpg'),
        },
        {
            title: "HH Dalai Lama",
            description: "The spiritual leader of Tibetan Buddhism, Nobel Peace Prize laureate, and advocate of non-violence and compassion. Founder of the Dalai Lama Trust and recipient of the Congressional Gold Medal.",
            imageUrl: require('../../components/LectureCard/dalai_lama.avif'),
        },
        {
            title: "Dr. Kiran Bedi",
            description: "India’s first female officer in the Indian Police Service, social activist, and advocate for prison reforms. Awarded the Ramon Magsaysay Award for her contribution to public service.",
            imageUrl: require('../../components/LectureCard/kiran_bedi.jpg'),
        },
        {
            title: "Dr. Leland Hartwell",
            description: "Nobel laureate and pioneering cancer researcher known for his contributions to cell biology and cancer therapeutics. Awarded the Nobel Prize in Physiology or Medicine in 2001.",
            imageUrl: require('../../components/LectureCard/leland_hartwell.jpg'),
        },
        {
            title: "Mr. Adam Cheyer",
            description: "A visionary computer scientist and entrepreneur, co-founder of Siri Inc., and a key contributor to groundbreaking AI and voice assistant technologies.",
            imageUrl: require('../../components/LectureCard/adamcheyer.webp'),
        },
        {
            title: "Mr. Alan Mamedi",
            description: "Co-founder and CEO of Truecaller, a global leader in caller identification and spam blocking technology, simplifying communication for millions worldwide.",
            imageUrl: require('../../components/LectureCard/alanmamedi.avif'),
        },
        {
            title: "Mrs. Karishma Mehta",
            description: "Founder of Humans of Bombay, a storytelling platform that captures and shares inspiring personal narratives of individuals from diverse walks of life.",
            imageUrl: require('../../components/LectureCard/karishmamehta.png'),
        },
        {
            title: "Mr. Boman Irani",
            description: "Popular Indian actor known for his versatile roles in Bollywood and his achievements in the entertainment industry. Awarded the Filmfare Award for Best Supporting Actor.",
            imageUrl: require('../../components/LectureCard/boman_irani.jpg'),
        },
        {
            title: "Mrs. Ratna Pathak",
            description: "Renowned Indian actress celebrated for her powerful roles in both films and television, especially in Hindi cinema. Known for her work in ‘Sarabhai vs Sarabhai’ and the Padma Bhushan award.",
            imageUrl: require('../../components/LectureCard/ratna_pathak.webp'),
        },
        {
            title: "Mr. Darshan Jariwala",
            description: "Acclaimed actor in Indian theatre and film, known for his performances in Hindi and Gujarati cinema. Recipient of the National Film Award for Best Supporting Actor.",
            imageUrl: require('../../components/LectureCard/darshan_jariwala.jpg'),
        },
        {
            title: "Mr. Harsha Bhogle",
            description: "Famous cricket commentator and sports analyst, widely recognized for his insightful commentary and cricket expertise. Awarded the Padma Shri and Sports Journalist of the Year.",
            imageUrl: require('../../components/LectureCard/harsha_bhogle.jpg'),
        },
        {
            title: "Mr. Bjarne Stroustrup",
            description: "Danish computer scientist and the creator of the C++ programming language, one of the most influential languages in software development. Author of ‘The C++ Programming Language’ and recipient of the Computer Pioneer Award.",
            imageUrl: require('../../components/LectureCard/bjarne_stroustrup.webp'),
        },
        {
            title: "Mr. Jayant Narlikar",
            description: "Indian astrophysicist and renowned scholar in cosmology, known for his contributions to theoretical physics. Former director of the Inter-University Centre for Astronomy and Astrophysics.",
            imageUrl: require('../../components/LectureCard/jayant_narlikar.jpg'),
        },
        {
            title: "Mr. Javagal Srinath",
            description: "Former Indian cricketer and one of the most successful fast bowlers in India’s cricket history. Member of the 2003 Cricket World Cup team and awarded the Arjuna Award.",
            imageUrl: require('../../components/LectureCard/javagal_srinath.jpg'),
        },
        {
            title: "Mr. Narayana Murthy",
            description: "Co-founder of Infosys, a leading global IT services company, and one of India's most prominent business leaders. Awarded Padma Vibhushan and co-founder of the Infosys Foundation.",
            imageUrl: require('../../components/LectureCard/narayana_murthy.jpg'),
        },
        {
            title: "Shri Gaur Gopal Das",
            description: "Internationally renowned motivational speaker, lifestyle coach, and spiritual leader associated with the ISKCON movement. Author of bestselling books and a prominent speaker at global forums.",
            imageUrl: require('../../components/LectureCard/gaurgopal_das.webp'),
        },
        {
            title: "Mr. Vappala Balachandran",
            description: "Renowned Indian scientist and intelligence officer, known for his expertise in national security and counter-terrorism. Former officer in the Indian Intelligence Bureau.",
            imageUrl: require('../../components/LectureCard/vappala_balachandran.jpg'),
        },
        {
            title: "Dr. Niranjan Hiranandani",
            description: "A prominent Indian entrepreneur, co-founder and managing director of the Hiranandani Group, renowned for transforming urban landscapes with world-class real estate projects.",
            imageUrl: require('../../components/LectureCard/niranjanhiranandani.jpg'),
        },
        {
            title: "Padmashree Nana Patekar",
            description: "Award-winning Bollywood actor known for his roles in Indian cinema and his philanthropic contributions. Recipient of the National Film Award and Padma Shri.",
            imageUrl: require('../../components/LectureCard/nana_patekar.jpg'),
        },
        {
            title: "Mr. Rajendra Singh",
            description: "Water conservationist, known as the ‘Waterman of India’ for his efforts in reviving rivers and promoting sustainable water management. Awarded the Ramon Magsaysay Award.",
            imageUrl: require('../../components/LectureCard/rajendra_singh.jpg'),
        },
        {
            title: "Mr. Simon Taufel",
            description: "Australian former cricket umpire, widely regarded as one of the best umpires in the history of international cricket. Winner of the ICC Umpire of the Year Award five times.",
            imageUrl: require('../../components/LectureCard/simon_taufel.jpg'),
        },
        {
            title: "Mr. Sonam Wangchuk",
            description: "Innovative engineer and education reformist from Ladakh, known for his work in sustainable architecture and water conservation. Founder of the Himalayan Institute of Alternatives and inventor of the Ice Stupa project.",
            imageUrl: require('../../components/LectureCard/sonam_wangchuk.png'),
        },
        {
            title: "Ashish Chanchlani",
            description: "Popular Indian YouTuber and content creator, known for his humorous videos and large following on social media. Recipient of the YouTube Diamond Play Button.",
            imageUrl: require('../../components/LectureCard/ashish_chanchlani.jpg'),
        },
        {
            title: "Mr. Vijendar Chauhan",
            description: "Prominent business leader with expertise in finance and a strong presence in the corporate world. Founder of several successful startups and mentor to many emerging entrepreneurs.",
            imageUrl: require('../../components/LectureCard/vijendar_chauhan.jpg'),
        },
        {
            title: "Shree B.N. Ramakrishna",
            description: "A senior scientist at ISRO, B.N. Ramakrishna contributed to the development of satellite communication systems and space research, playing a pivotal role in ISRO's early missions and infrastructure.",
            imageUrl: require('../../components/LectureCard/bn_ramakrishna.jpg'),
        },
        {
            title: "Admiral Sunil Lamba",
            description: "Former Chief of Naval Staff of India, he led the Indian Navy with distinction, emphasizing modernization, strategic vision, and maritime security.",
            imageUrl: require('../../components/LectureCard/sunillamba.jpg'),
        },
        {
            title: "Mr. Atul Rane",
            description: "Renowned Indian aerospace scientist and Director General of BrahMos Aerospace, contributing significantly to India's defense capabilities with advancements in missile technology.",
            imageUrl: require('../../components/LectureCard/atulrane.jpg'),
        },
        {
            title: "Birender Singh Dhanoa",
            description: "Former Chief of Air Staff of the Indian Air Force, known for his leadership during the Balakot airstrikes and strengthening India's aerial defense capabilities.",
            imageUrl: require('../../components/LectureCard/birendersinghdhanoa.jpg'),
        },
        {
            title: "A. Arun",
            description: "Celebrated motivational speaker and leadership expert, A. Arun has delivered transformative corporate training sessions across the globe. Recognized with the 'Leadership Excellence Award,' he has inspired countless individuals to achieve their best.",
            imageUrl: require('../../components/LectureCard/a_arun.jpg')
        },
        {
          title: "Aman Dhattarwal",
          description: "Aman Dhattarwal is a pioneer in online education, founder of 'Apni Kaksha,' and an influential YouTube educator. Known for making quality education accessible, he has received the 'Young Educator of the Year Award' for his contributions.",
          imageUrl: require('../../components/LectureCard/aman_dhattarwal.jpg')
        },
        {
          title: "Annu Kapoor",
          description: "Veteran actor and television host, Annu Kapoor is a National Award-winning artist celebrated for his versatility in Indian cinema and television. His career spans decades of iconic performances that continue to inspire.",
          imageUrl: require('../../components/LectureCard/annu_kapoor.jpg')
        },
        {
          title: "Dilip Chhabria",
          description: "Visionary automobile designer and founder of DC Design, Dilip Chhabria has transformed the Indian auto industry. Awarded the 'Lifetime Achievement Award in Automobile Design,' he is renowned for his revolutionary car concepts.",
          imageUrl: require('../../components/LectureCard/dilip_chhabria.avif')
        },
        {
          title: "Gary Kirsten",
          description: "Former South African cricketer and coach of India’s 2011 ICC World Cup-winning team, Gary Kirsten is a global cricketing icon. He is honored with the 'Order of Ikhamanga' for his contributions to the sport.",
          imageUrl: require('../../components/LectureCard/gary_kirsten.webp')
        },
        {
          title: "Harpal Singh",
          description: "Known as the 'Energy Chef of India,' Harpal Singh is a culinary innovator and TV personality. His creativity in Indian cuisine earned him the 'Culinary Excellence Award,' making him a household name in gastronomy.",
          imageUrl: require('../../components/LectureCard/harpal_singh.jpg')
        },
        {
          title: "Prithviraj Chauhan",
          description: "Former Chief Minister of Maharashtra, Prithviraj Chauhan is a seasoned politician known for his administrative skills and reformist approach. A senior Congress leader, he has contributed significantly to policy-making and governance in India.",
          imageUrl: require('../../components/LectureCard/prithviraj_chauhan.jpg')
        },          
        {
          title: "R. Chidambaram",
          description: "Renowned nuclear scientist and former Principal Scientific Adviser to the Government of India, R. Chidambaram is pivotal to India’s nuclear achievements. He is a recipient of the 'Padma Vibhushan' for his significant contributions.",
          imageUrl: require('../../components/LectureCard/r_chidambaram.webp')
        },
        {
          title: "S. Somnath",
          description: "Chairman of ISRO and an eminent aerospace scientist, S. Somnath has played a key role in India's space missions, including Chandrayaan. His leadership and innovation earned him the 'ISRO Excellence Award.'",
          imageUrl: require('../../components/LectureCard/s_somnath.jpg')
        },
        {
          title: "Satish Dua",
          description: "Lt. Gen. Satish Dua (Retd.) is a highly decorated Indian Army officer and recipient of the 'Ati Vishisht Seva Medal.' Known for his strategic expertise, he is a prominent voice on national security matters.",
          imageUrl: require('../../components/LectureCard/satish_dua.jpg')
        },
        {
        title: "Suresh Prabhu",
          description: "Suresh Prabhu is a seasoned Indian politician, former Union Minister of Railways, and advocate of sustainable development. Recognized globally, he has represented India at multiple international forums.",
          imageUrl: require('../../components/LectureCard/suresh_prabhu.avif')
        },
        {
          title: "Vinod Dham",
          description: "Known as the 'Father of the Pentium Chip,' Vinod Dham revolutionized computing with his innovations in microprocessors. A technology entrepreneur, he is a recipient of multiple global honors for his contributions to the tech industry.",
          imageUrl: require('../../components/LectureCard/vinod_dham.jpg')
        }
    ];
    //a.arun, aman dhattarwal, annu kapoor, dilip chhabria, gary kirsten, harpal singh, prithviraj chauhan, r chidambaram, s somnath, satish dua, suresh prabhu, vinod dham
    
    const sponsors = [
        {name: 'VJTI TBI', logo: require('../../components/Sponsors/sponsors/vjtitbi.jpeg')},
        {name: 'The Parnika', logo: require('../../components/Sponsors/sponsors/parnika.jpeg')},
        {name: 'Oxycool', logo: require('../../components/Sponsors/sponsors/oxycool.jpeg')},
        {name: 'Krishna ', logo: require('../../components/Sponsors/sponsors/krishnadefense.jpeg')},
        {name: 'botmakers', logo: require('../../components/Sponsors/sponsors/botmakers.JPG')},
        {name: 'cubelelo', logo: require('../../components/Sponsors/sponsors/cubelelo.JPG')},
        {name: 'mrchobbies', logo: require('../../components/Sponsors/sponsors/mrchobbies.JPG')},
        {name: 'unstop', logo: require('../../components/Sponsors/sponsors/unstop.JPG')},
        {name: 'eazydiner', logo: require('../../components/Sponsors/sponsors/eazydiner.JPG')},
        {name: 'ansys', logo: require('../../components/Sponsors/sponsors/ansys.JPG')},
        {name: 'desikitchen', logo: require('../../components/Sponsors/sponsors/desikitchen.JPG')},
        {name: 'sil', logo: require('../../components/Sponsors/sponsors/sil.JPG')},
        {name: 'techexpert', logo: require('../../components/Sponsors/sponsors/techexpert.JPG')},
        {name: 'factor', logo: require('../../components/Sponsors/sponsors/factor.JPG')},
        {name: 'honeybell', logo: require('../../components/Sponsors/sponsors/honeybell.JPG')},
        {name: 'mindicator', logo: require('../../components/Sponsors/sponsors/mindicator.JPG')},
        {name: 'roket', logo: require('../../components/Sponsors/sponsors/roket.JPG')},
        {name: 'thedopaminestore', logo: require('../../components/Sponsors/sponsors/thedopaminestore.JPG')},
        {name: 'mahindra', logo: require('../../components/Sponsors/sponsors/mahindra.JPG')},
        {name: 'prahar', logo: require('../../components/Sponsors/sponsors/prahar.JPG')},
        {name: 'smaash', logo: require('../../components/Sponsors/sponsors/smaash.JPG')},
        {name: 'pudhari', logo: require('../../components/Sponsors/sponsors/pudhari.JPG')},
        {name: 'tripsbuddy', logo: require('../../components/Sponsors/sponsors/tripsbuddy.JPG')},
        {name: 'things2do', logo: require('../../components/Sponsors/sponsors/things2do.JPG')},
        {name: 'g', logo: require('../../components/Sponsors/sponsors/g.JPG')},
        {name: 'mediamentor', logo: require('../../components/Sponsors/sponsors/mediamentor.JPG')},
    ]
    // const pastSponsors = [
    //     { name: 'Sponsor A', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Sponsor B', logo: require('../../components/Sponsors/sponsors/microsoft.png') },
    //     { name: 'Sponsor C', logo: require('../../components/Sponsors/sponsors/ibm.png') },
    //     { name: 'Sponsor A', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Sponsor C', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Sponsor A', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Sponsor C', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Sponsor C', logo: require('../../components/Sponsors/sponsors/google.png') },
    //   ];
    
    //   const mediaSponsors = [
    //     { name: 'Media Sponsor A', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Media Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Media Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Media Sponsor A', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Media Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Media Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Media Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Media Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
    //   ];
    
    //   const affiliatedSponsors = [
    //     { name: 'Affiliated Sponsor A', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Affiliated Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Affiliated Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Affiliated Sponsor A', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Affiliated Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Affiliated Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Affiliated Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
    //     { name: 'Affiliated Sponsor B', logo: require('../../components/Sponsors/sponsors/google.png') },
    //   ];
    return (
        <div className="gls-container">
            <SecondaryNavbar />
            {/* Full-page Background */}
            <div className="full-page" style={{ backgroundImage: `url(${garageImage})` }}>
                <h1 className="centered-text">Exhibition & GLS</h1>
                 <div className="robot">
                     <img src={robot} alt="Robot" />
                 </div>
                 <div className="rotating-circle">
                     <img src={hudImage} alt="HUD Circle" />
                 </div>
            </div>

            {/* Horizontal Scroll for exhibition*/}
            <div className="horizontal-scroll-container">
                <h1 className="upcoming-exhibition-text">UPCOMING EXHIBITION</h1>
                <div className="horizontal-scroll">
                    {upcomingExhibition.map((event, index) => (
                        <div
                            key={index}
                            className="scroll-item"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${exhibitionImage})`, 
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
                <h3 className="swipe">swipe for more</h3>
            </div>


            {/* Horizontal Scroll for gls */}
            <div className="horizontal-scroll-container">
                <h1 className="upcoming-gls-text">UPCOMING GLS</h1>
                <div className="horizontal-scroll">
                    {upcomingGLS.map((event, index) => (
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
                <h3 className="swipe">swipe for more</h3>
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
          <Sponsors sponsors={sponsors} />
          {/* <Sponsors sponsors={pastSponsors} title="Past Sponsors" /> */}
          {/* <Sponsors sponsors={mediaSponsors} title="Media Partners" />
          <Sponsors sponsors={affiliatedSponsors} title="Affiliated Partners" /> */}
        </div>
      </div>
        </div>
    );
};

export default GLS;
