import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white">
      <div className="flex space-x-2 text-2xl font-bold">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black z-10 transform origin-top animate-flip" />
          <div>{timeLeft.days} days</div>
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black z-10 transform origin-top animate-flip" />
          <div>{String(timeLeft.hours).padStart(2, '0')}:</div>
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black z-10 transform origin-top animate-flip" />
          <div>{String(timeLeft.minutes).padStart(2, '0')}:</div>
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black z-10 transform origin-top animate-flip" />
          <div>{String(timeLeft.seconds).padStart(2, '0')}</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;