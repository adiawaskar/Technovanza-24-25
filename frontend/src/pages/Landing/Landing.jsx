 import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import './Landing.css';
import 'css-doodle';
import CountdownTimer from '../../components/Countdown/CountdownTimer';
import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import aboutImage from './about.jpg'

const Landing = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    class BasicWorldDemo {
      constructor() {
        this.targetPosition = new THREE.Vector3(0, 0, 100);
        this.hoverOffset = new THREE.Vector3(0, 0, 0);
        this._Initialize();
      }

      _Initialize() {
        this._threejs = new THREE.WebGLRenderer({ antialias: true });
        this._threejs.shadowMap.enabled = true;
        this._threejs.shadowMap.type = THREE.PCFSoftShadowMap;
        this._threejs.setPixelRatio(window.devicePixelRatio);
        this._threejs.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this._threejs.domElement); 

        window.addEventListener('resize', () => this._OnWindowResize(), false);
        window.addEventListener('mousemove', this._OnMouseMove.bind(this), false);

        const fov = 60;
        const aspect = window.innerWidth / window.innerHeight;
        const near = 1.0;
        const far = 1000.0;
        this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        this._camera.position.set(0, 20, 0);

        this._scene = new THREE.Scene();
        let light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
        light.position.set(20, 100, 10);
        light.castShadow = true;
        this._scene.add(new THREE.AmbientLight(0x101010));
        this._scene.add(light);

        const loader = new THREE.CubeTextureLoader();
        const texture = loader.load([
          './images/px_bg.png', './images/nx_bg.png', './images/py_bg.png', 
          './images/ny_bg.png', './images/pz_bg.png', './images/nz_bg.png'
        ]);
        this._scene.background = texture;

         this._AttachDropdownListeners(); //responsive content button event listener

        document.getElementById('back')?.addEventListener('click', () => this._SetView('back', 'about'));
        document.getElementById('left')?.addEventListener('click', () => this._SetView('left', 'highlights'));
        document.getElementById('front')?.addEventListener('click', () => this._SetView('front', 'theme'));
        document.getElementById('right')?.addEventListener('click', () => this._SetView('right', 'location'));
        document.getElementById('up')?.addEventListener('click', () => this._SetView('up', 'home'));

       
        this._SetView('up', 'home');

        this._RAF();
      }


      _AttachDropdownListeners() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu) {
        dropdownMenu.querySelectorAll('.landing-btn').forEach((btn) => {
            btn.addEventListener('click', (event) => {
                const id = event.target.id; // Get button ID
                this._HandleDropdownNavigation(id);
                 setIsDropdownOpen(false);
                });
            });
        }
    }

    _HandleDropdownNavigation(id) {
    switch (id) {
        case 'up': this._SetView('up', 'home'); break;
        case 'back': this._SetView('back', 'about'); break;
        case 'left': this._SetView('left', 'highlights'); break;
        case 'front': this._SetView('front', 'theme'); break;
        case 'right': this._SetView('right', 'location'); break;
        default: console.warn(`No navigation handler for dropdown ID: ${id}`);
    }
}

      _OnWindowResize() {
        this._camera.aspect = window.innerWidth / window.innerHeight;
        this._camera.updateProjectionMatrix();
        this._threejs.setSize(window.innerWidth, window.innerHeight);
      }

      _OnMouseMove(event) {
        if (!this.hoverOffset) this.hoverOffset = new THREE.Vector3(0, 0, 0);
        const mouseX = (event.clientX / window.innerWidth) - 0.5;
        const mouseY = (event.clientY / window.innerHeight) - 0.5;
        this.hoverOffset.set(mouseX * 15, mouseY * 15, 0);
      }

      _SetupNavigation() {
        document.getElementById('nav-next')?.addEventListener('click', () => this._handleNavigation('next'));
        document.getElementById('nav-back')?.addEventListener('click', () => this._handleNavigation('back'));
      }

      _SetView(direction, section) {
        const distance = 100;
        switch (direction) {
          case 'back': this.targetPosition.set(0, 0, -distance); break;
          case 'left': this.targetPosition.set(-distance, 0, 0); break;
          case 'front': this.targetPosition.set(0, 0, distance); break;
          case 'right': this.targetPosition.set(distance, 0, 0); break;
          case 'up': this.targetPosition.set(0, -distance, 0); break;
          // case 'down': this.targetPosition.set(0, distance, 0); break;
        }

        const stars = document.getElementById('stars');
        stars.classList.remove('hidden');
        stars.style.pointerEvents = 'auto';

        document.querySelectorAll('.content-box').forEach(box => {
          box.classList.add('hidden', 'fade-out');
          box.classList.remove('fade-in');
        });
        document.querySelectorAll('.home-box').forEach(box => {
          box.classList.add('hidden', 'fade-out');
          box.classList.remove('fade-in');
        });

        setTimeout(() => {
          stars.classList.add('hidden');
          stars.style.pointerEvents = 'none';

          setTimeout(() => {
            const contentBox = document.getElementById(section);
            if (contentBox) {
              contentBox.classList.remove('hidden', 'fade-out');
              contentBox.classList.add('fade-in');
            }
          }, 1700);
        }, 500);
      }

      _Lerp(start, end, t) {
        return start * (1 - t) + end * t;
      }

      _UpdateCameraPosition() {
        this._camera.position.x = this._Lerp(this._camera.position.x, this.targetPosition.x + this.hoverOffset.x, 0.05);
        this._camera.position.y = this._Lerp(this._camera.position.y, this.targetPosition.y + this.hoverOffset.y, 0.05);
        this._camera.position.z = this._Lerp(this._camera.position.z, this.targetPosition.z + this.hoverOffset.z, 0.05);
        this._camera.lookAt(0, 0, 0);
      }

      _RAF() {
        requestAnimationFrame(() => {
          this._UpdateCameraPosition();
          this._threejs.render(this._scene, this._camera);
          this._RAF();
        });
      }
    }

    const app = new BasicWorldDemo();

    return () => {
      app._threejs.dispose();
      document.body.removeChild(app._threejs.domElement); 
    };
  }, []);

  return (
    <div>
     <div className="logo-wrapper">
  <a href="https://vjti.ac.in" target="_blank" rel="noopener noreferrer">
    <div id="technovanza-logo"></div>
  </a>
</div>

      

      <div id="cockpit-background"></div>
    
     
      <css-doodle id="stars" className="hidden">
        {`
          :doodle {
            @grid: 500x1/ 40vmin;
          }
          :container {
            perspective: 10vmin;
          }
          @place-cell: center;
          @size: 60% 6px;
          will-change: transform, opacity;
          transform-style: preserve-3d;
          background: linear-gradient(to left, 
            @multi(@p([2-4]), @p(#00b8a9, #f8f3d4, #6a0dad, #ffde7d)), 
            transparent @r(80%)
          );
          animation: move @r(1s, 2s, .1) linear infinite;
          animation-delay: -@r(.1s, 2s);
          --trans: translateX(50%) rotateX(@r(-180deg, 180deg)) rotateY(@r(-180deg, 180deg)) rotateZ(@r(-180deg, 180deg));
          transform-origin: 0 center;
          transform: var(--trans) scale(0);
          opacity: 0;
          @keyframes move {
            20% { opacity: 1; }
            100% { transform: var(--trans) scale(2); }
          }
        `}
      </css-doodle>



    <div className="bottom-nav">   
        <Link to="/events"><span>Events </span></Link>
        <Link to="/exhibition"><span>Exhibition </span></Link>
        <Link to="/gls"><span>GLS </span></Link>
        <Link to="/gallery"><span>Gallery </span></Link>
        <Link to="/teams"><span>Teams </span></Link>
    </div>


<div className="left-frame">
    <div className="landing-btn1-container">
        <landing-btn id="up">Home</landing-btn>
        <landing-btn id="back">About</landing-btn>
        <landing-btn id="left">Highlights</landing-btn>
        <landing-btn id="front">Theme</landing-btn>
        <landing-btn id="right">Locate</landing-btn>
    </div>  
    
    <div className="social-icons">
        <a href="https://www.instagram.com/technovanza/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://in.linkedin.com/company/technovanza-vjti" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.youtube.com/user/technovanzaVJTI" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://twitter.com/technovanza?lang=en" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.facebook.com/technovanza" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
    </div>
</div>


{/* Dropdown for small screens */}
 <div className="dropdown">
            <button onClick={toggleDropdown}>Contents</button>
            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                <button id="up" className="landing-btn">Home</button>
                <button id="back" className="landing-btn">About</button>
                <button id="left" className="landing-btn">Highlights</button>
                <button id="front" className="landing-btn">Theme</button>
                <button id="right" className="landing-btn">Locate</button>
            </div>
  </div>


  <div className="right-frame">
        <CountdownTimer />
  </div>
<div id="home" className="home-box hidden">
  <div className="home-content">
    <div className="home-heading"></div>
  </div>
</div>





      <div id="about" className="content-box hidden">
      <h2>About</h2>
         <div className="about-container">
         <img
          src={require('./about.jpg')} // Update this path
          alt="About"
          className="about-image"
        />
          {/* <iframe
            src="https://www.youtube.com/embed/PPmYb8rDxoY"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <div className="about-text">
             <p>  Technovanza, the premier technical initiative of the VJTI Social Group,
        stands as one of Asia's largest techno-managerial festivals, attracting
        over 75,000 participants each year.
        Guided by our motto, <strong>"Taking Technology to Society,"</strong> inspired by
        Dr. A. P. J. Abdul Kalam. We host impactful lectures from renowned speakers
        and over 20 competitive events that showcase innovation and challenge participants.
        </p>
          </div>
        </div>
      </div>

      <div id="highlights" className="content-box hidden">
        <h2>Highlights</h2>
        <div className="highlights-container">
          <iframe
            src="https://www.youtube.com/embed/PPmYb8rDxoY"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div className="highlights-text">
          <p>  Technovanza, the premier technical initiative of the VJTI Social Group,
        stands as one of Asia's largest techno-managerial festivals, attracting
        over 75,000 participants each year.
        Guided by our motto, <strong>"Taking Technology to Society,"</strong> inspired by
        Dr. A. P. J. Abdul Kalam. We host impactful lectures from renowned speakers
        and over 20 competitive events that showcase innovation and challenge participants.
        </p>
          </div>
        </div>
      </div>
      
      <div id="theme" className="content-box hidden">
        <h2>Theme</h2>
        <div className="theme-container">
          <iframe
            src="https://www.youtube.com/embed/AQAV2GdLIl0"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div className="theme-text">
        <p>Immerse yourself in the world of Technovanza with our theme, 
          <strong>"Dimensional Drift: Unveiling Tech's Parallel Worlds."</strong> 
          Embark on a journey through technology’s extraordinary dimensions, 
          where innovation and creativity reveal unseen possibilities. Discover how advancements in AI, VR, 
          and other cutting-edge technologies reshape our perceptions and inspire a future 
          limited only by our imagination!</p>

            </div>
        </div>
      </div>

      <div id="location" className="content-box hidden">
        <h2>Locate Us</h2>

        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9432282763996!2d72.85354627438042!3d19.022223153660192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf26f4972d21%3A0x2c50185364aca4c1!2sVeermata%20Jijabai%20Technological%20Institute%20VJTI!5e0!3m2!1sen!2sin!4v1704468679370!5m2!1sen!2sin" 
          width="300" 
          height="250" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy">

        </iframe>
      </div>
      
    </div>
  );
};

export default Landing;