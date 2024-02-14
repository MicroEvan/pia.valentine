import React, { useEffect, useState } from 'react';

export default function Song() {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(new Audio("/nikukonde.mp3"));
  }, []);

  useEffect(() => {
    if (audio) {
      audio.play();
    }
  }, [audio]);

  return (
    <div>
      {/* Your app content */}
    </div>
  );
};