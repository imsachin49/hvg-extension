import { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IoPlay, IoPause } from "react-icons/io5";

export default function Pomodoro() {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft(prevSecondsLeft => {
          if (prevSecondsLeft <= 0) {
            clearInterval(intervalRef.current);
            return 0;
          }
          return prevSecondsLeft - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const percentage = (secondsLeft / (25 * 60)) * 100;

  const handlePlayPause = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-4 border">
      <div className="w-[150px] h-[150px] mb-4">
        <CircularProgressbar
          value={percentage}
          text={`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
          styles={buildStyles({
            textColor: '#fff',
            pathColor: '#4caf50',
            trailColor: '#d6d6d6',
            textSize: '16px',
          })}
        />
      </div>
      <div className="text-white text-lg mb-4">Focus Time</div>
      <button
        onClick={handlePlayPause}
        className="flex items-center justify-center bg-green-500 text-white rounded-full w-10 h-10 focus:outline-none"
      >
        {isRunning ? <IoPause size={24} /> : <IoPlay size={24} />}
      </button>
    </div>
  );
}
