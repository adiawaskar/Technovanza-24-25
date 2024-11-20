import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing/Landing';
import GLS from './pages/GLS/GLS';
import Events from './pages/Events/Events';
import Exhibition from './pages/Exhibition/Exhibition';
import Teams from './pages/Teams/Teams';

function App() {

  //  useEffect(() => {
  //   //custom cursor 
  //   const cursor = document.getElementById('target-cursor');
    
  //   const handleMouseMove = (e) => {
  //     cursor.style.left = e.pageX - cursor.offsetWidth / 2 + 'px';
  //     cursor.style.top = e.pageY - cursor.offsetHeight / 2 + 'px';
  //   };

  //   document.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  return (
    <Router>
      <div className="App">
     
        <Routes> 
          <Route path="/" element={<Landing />} />
          <Route path="/gls" element={<GLS />} />
          <Route path="/events" element={<Events />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

      // <div className="App">
      // <div id="target-cursor"></div>