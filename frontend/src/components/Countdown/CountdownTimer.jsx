import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
  const [time, setTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const updateTimer = () => {
      const futureDate = new Date("December 20, 2024 20:00:00").getTime();
      const now = new Date().getTime();
      const diff = futureDate - now;

      if (diff <= 0) {
        setTime({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTime({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="timer">
      <div>{time.days}<span>days</span></div>
      <br />
      <div>{time.hours}<span>hours</span></div>
        <br />
      <div>{time.minutes}<span>minutes</span></div>
        <br />
      <div>{time.seconds}<span>seconds</span></div>
    </div>
  );
};

export default CountdownTimer;
