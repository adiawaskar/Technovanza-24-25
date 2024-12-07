import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import './App.css';
import Landing from './pages/Landing/Landing';
import GLS from './pages/GLS/GLS';
import Events from './pages/Events/Events';
import Exhibition from './pages/Exhibition/Exhibition';
import Teams from './pages/Teams/Teams';
import Gallery from './pages/Gallery/Gallery';
import Preloader from './pages/Preloader/Preloader';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderComplete = () => {
    setShowPreloader(false); 
  };

  return (
    <Router>
      <div className="App">
        {/* Preloader is shown only until it completes */}
        {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

        {/* Main app content with routes is displayed once preloader is done */}
        {!showPreloader && (
          <>
            <Routes> 
              <Route path="/" element={<Landing />} />
              <Route path="/gls" element={<GLS />} />
              <Route path="/events" element={<Events />} />
              <Route path="/exhibition" element={<Exhibition />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/teams" element={<Teams />} />
            </Routes>

            {/* Vercel Analytics placed inside Router */}
            <Analytics />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
