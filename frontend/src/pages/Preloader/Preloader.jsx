import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete(); // Notify parent that the preloader is done
    }, 6500); // Match video length

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="preloader-overlay">
      <div className="preloader">
        <video
          src={`${process.env.PUBLIC_URL}/preloader3.mp4`}
          autoPlay
          muted
          loop
          playsInline
          className="preloader-video"
        />
      </div>
    </div>
  );
};

export default Preloader;
