import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing/Landing';

function App() {

   useEffect(() => {
    //custom cursor 
    const cursor = document.getElementById('target-cursor');
    
    const handleMouseMove = (e) => {
      cursor.style.left = e.pageX - cursor.offsetWidth / 2 + 'px';
      cursor.style.top = e.pageY - cursor.offsetHeight / 2 + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Router>
      <div className="App">
      <div id="target-cursor"></div>
        <Routes> 
          <Route path="/" element={<Landing />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
