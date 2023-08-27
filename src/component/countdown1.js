import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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

  // Calculate the percentage of time remaining
  const totalTime = new Date(targetDate).getTime() - new Date().getTime();
  const percentage = (timeRemaining.days * (1000 * 60 * 60 * 24) + timeRemaining.hours * (1000 * 60 * 60) + timeRemaining.minutes * (1000 * 60) + timeRemaining.seconds * (1000)) / totalTime;

  return (
    <div className="text-center">
      <div className="text-2xl font-semibold mb-2">Countdown Timer</div>
      <div className="relative inline-block">
      <CircularProgressbar
        value={percentage}
        strokeWidth={10}
        styles={buildStyles({
            strokeLinecap: 'butt',
            pathTransitionDuration: 1,
            pathColor: '#DAC60F',
            trailColor: '#e2e8f0',
    })}
    />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-xl">
            <div className="font-semibold text-gray-600">Days</div>
            <div>{timeRemaining.days}</div>
          </div>
          <div className="text-xl">
            <div className="font-semibold text-gray-600">Hours</div>
            <div>{timeRemaining.hours}</div>
          </div>
          <div className="text-xl">
            <div className="font-semibold text-gray-600">Minutes</div>
            <div>{timeRemaining.minutes}</div>
          </div>
          <div className="text-xl">
            <div className="font-semibold text-gray-600">Seconds</div>
            <div>{timeRemaining.seconds}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
