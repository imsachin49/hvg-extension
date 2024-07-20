import { useState, useEffect } from 'react';

const Pomodoro = () => {
  const [time, setTime] = useState(1500); 
  const [active, setActive] = useState(false);
  const [mode, setMode] = useState('Pomodoro'); // Modes: Pomodoro, Short Break, Long Break

  useEffect(() => {
    let timer = null;
    if (active) {
      timer = setInterval(() => {
        setTime((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else if (!active && time !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [active, time]);

  const startTimer = () => {
    setActive(true);
  };

  const stopTimer = () => {
    setActive(false);
  };

  const resetTimer = () => {
    setActive(false);
    setTime(mode === 'Pomodoro' ? 1500 : mode === 'Short Break' ? 300 : 900);
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setActive(false);
    setTime(newMode === 'Pomodoro' ? 1500 : newMode === 'Short Break' ? 300 : 900);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const getBackgroundColor = () => {
    switch (mode) {
      case 'Short Break':
        return 'bg-light-indigo';
      case 'Long Break':
        return 'bg-light-teal';
      default:
        return 'bg-light-red';  // Define a custom class for the default color
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center my-4 rounded-md ${getBackgroundColor()}`}>
      <div className="text-white p-5 rounded-lg shadow-lg">
        <div className="flex justify-between mb-4">
          <button
            onClick={() => switchMode('Pomodoro')}
            className={`py-[2px] px-2 ${mode === 'Pomodoro' ? 'bg-zinc-400/30' : ''} rounded-md`}
          >
            Pomodoro
          </button>
          <button
            onClick={() => switchMode('Short Break')}
            className={`py-[2px] px-2 ${mode === 'Short Break' ? 'bg-zinc-400/30' : ''} rounded-md`}
          >
            Short Break
          </button>
          <button
            onClick={() => switchMode('Long Break')}
            className={`py-[2px] px-2 ${mode === 'Long Break' ? 'bg-zinc-400/30' : ''} rounded-md`}
          >
            Long Break
          </button>
        </div>
        <div className="text-6xl mb-4 text-center">{formatTime(time)}</div>
        <div className="flex items-center justify-center gap-2">
          {!active && (
            <button onClick={startTimer} className="bg-zinc-400/70 text-gray-100 py-2 px-4 rounded-md shadow-md hover:bg-gray-400/30">
              START
            </button>
          )}
          {active && (
            <button onClick={stopTimer} className="bg-zinc-400/70 text-gray-100 py-2 px-4 rounded-md shadow-md hover:bg-gray-400/30">
              STOP
            </button>
          )}
          <button onClick={resetTimer} className="bg-zinc-400/70 text-gray-100 py-2 px-4 rounded-md shadow-md hover:bg-gray-400/30">
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
