import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import Song from 'components/Song'

import Container from '@components/Container'

export default function Home() {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(new Audio("/nikukonde.mp3"));
  }, []);

  useEffect(() => {
    if (audio) {
      audio.play();
    }
  }, [audio]);

  useEffect(() => {
    const handleReload = () => {
      if (audio) {
        audio.play();
      }
    };

    window.addEventListener('beforeunload', handleReload);

    return () => {
      window.removeEventListener('beforeunload', handleReload);
    };
  }, [audio]);

  return (
    <div className="container">
      <Head>
        <title>Happy Valentines Pia My love</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <link href="https://fonts.googleapis.com/css?family=Solitreo" rel="stylesheet" />
      <div class="grid-container">
      <Container />
      <Song />
      </div>


      </main>

      
    </div>
  )
}
