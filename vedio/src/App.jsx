import React, { useRef, useState } from 'react';
import './App.css';

const App = () => {
  const videoRef = useRef(null); // useRef to reference the video element
  const [isPlaying, setIsPlaying] = useState(false); // Track the video play/pause state

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pause the video
      } else {
        videoRef.current.play(); // Play the video
      }
      setIsPlaying(!isPlaying); // Toggle play/pause state
    }
  };

  return (
    <div className="app">
      <h1>React Video Player with Play/Pause</h1>

      <div className="video-container">
        {/* Video element */}
        <video ref={videoRef} width="600" controls={false}>
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4" // Sample video URL
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause button */}
        <button onClick={handlePlayPause} className="play-pause-button">
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default App;
