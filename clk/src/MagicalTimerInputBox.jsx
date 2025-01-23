import React, { useRef, useState } from 'react';

function MagicalTimerInputBox() {
  // Refs
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  // States
  const [timeLeft, setTimeLeft] = useState(10);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Handlers
  const focusTextBox = () => {
    inputRef.current.focus();
  };

  const startTimer = () => {
    if (isTimerRunning || timeLeft <= 0) return; // Avoid restarting an already running timer
    setIsTimerRunning(true);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setIsTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsTimerRunning(false);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTimeLeft(10);
    setIsTimerRunning(false);
  };

  // Effect to focus the input box on mount
  React.useEffect(() => {
    focusTextBox();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>Magical Timer and Input Box</h1>
      
      {/* Text Box */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        style={{ padding: '10px', fontSize: '16px', width: '300px', marginBottom: '20px' }}
      />
      <div>
        <button onClick={focusTextBox} style={{ padding: '10px', margin: '5px' }}>
          Focus Box
        </button>
      </div>

      {/* Countdown Timer */}
      <div style={{ marginTop: '20px' }}>
        <h2>
          {timeLeft > 0 ? (
            <span>{timeLeft} seconds</span>
          ) : (
            <span style={{ color: 'red', fontWeight: 'bold' }}>Time's Up!</span>
          )}
        </h2>
        <button onClick={startTimer} style={{ padding: '10px', margin: '5px' }}>
          Start Timer
        </button>
        <button onClick={stopTimer} style={{ padding: '10px', margin: '5px' }}>
          Stop Timer
        </button>
        <button onClick={resetTimer} style={{ padding: '10px', margin: '5px' }}>
          Reset Timer
        </button>
      </div>
    </div>
  );
}

export default MagicalTimerInputBox;
