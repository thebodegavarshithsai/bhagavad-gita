import React from 'react';

const AudioPlayer = () => {
  return (
    <div>
      <audio controls>
        <source src="/audio/your-audio-file.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
