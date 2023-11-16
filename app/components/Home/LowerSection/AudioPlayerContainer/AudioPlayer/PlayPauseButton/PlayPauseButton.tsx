'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './playPauseButton.module.css';

type Props = {};

export default function PlayPauseButton({}: Props) {
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  return (
    <button className={styles.buttonContainer} onClick={togglePlay}>
      {!playing ? (
        <Image
          src="/public_icons/playbutton.svg"
          alt="play button"
          width={35}
          height={35}
        />
      ) : (
        <Image
          src="/public_icons/pausebutton.svg"
          alt="play button"
          width={35}
          height={35}
        />
      )}
    </button>
  );
}
