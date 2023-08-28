import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeDiff = targetTime - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="text-center">
      <div className="text-4xl font-semibold mb-2 text-white">See you in</div>
      <div className="text-xl mb-4">
        <div className="font-semibold text-3xl text-white">Days</div>
        <div className="font-semibold text-3xl text-white">{timeRemaining.days}</div>
      </div>
      <div className="flex justify-center space-x-4">
        <div className="text-xl">
          <div className="font-semibold text-3xl text-white">Hours</div>
          <div className="font-semibold text-3xl text-white">{timeRemaining.hours}</div>
        </div>
        <div className="text-xl">
          <div className="font-semibold text-3xl text-white">Minutes</div>
          <div className="font-semibold text-3xl text-white">{timeRemaining.minutes}</div>
        </div>
        <div className="text-xl">
          <div className="font-semibold text-3xl text-white">Seconds</div>
          <div className="font-semibold text-3xl text-white">{timeRemaining.seconds}</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
