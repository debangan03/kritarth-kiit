import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const CircularCounter = () => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);
  const [progress, setProgress] = useState(0);

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setDidViewCountUp(true);
      setProgress(100);
    } else {
      setDidViewCountUp(false);
    }
  };

  useEffect(() => {
    if (!didViewCountUp) {
      setProgress(0);
    }
  }, [didViewCountUp]);

  return (
    <div className="flex justify-center items-center h-screen">
      <VisibilitySensor onChange={onVisibilityChange} offset={{ top: 10 }} delayedCall>
        <div className="relative w-64 h-64">
          <svg className="w-full h-full" viewBox="0 0 45 45">
            <circle
              cx="22.5"
              cy="22.5"
              r="15.9155"
              fill="none"
              stroke="#38a169"
              strokeWidth="4"
            />
            <path
              className="text-gray-300 stroke-current"
              strokeWidth="2"
              fill="none"
              d="M22.5 6.5845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className={`text-yellow-500 stroke-current transition-all ${
                didViewCountUp ? "duration-[3000ms]" : "duration-0"
              }`}
              strokeWidth="2"
              fill="none"
              strokeDasharray={`${progress}, 100`}
              d="M22.5 6.5845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-4xl font-poppins font-semibold">
            {didViewCountUp ? (
              <CountUp start={0} end={100000} duration={3} formattingFn={num => num >=100000 ? '100K+' : num.toLocaleString() + '+'} />
            ) : (
              <span>0</span>
            )}
          </div>
        </div>
      </VisibilitySensor>
    </div>
  );
};

export default CircularCounter;
