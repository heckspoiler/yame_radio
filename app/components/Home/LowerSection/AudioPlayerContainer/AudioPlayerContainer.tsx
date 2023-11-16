'use client';

import React from 'react';
import styles from './audioPlayerContainer.module.css';
import AudioPlayer from './AudioPlayer/AudioPlayer';

const AudioPlayerContainer: React.FC = () => {
  return (
    <div className={styles.audioPlayerContainer}>
      <AudioPlayer />
    </div>
  );
};

export default AudioPlayerContainer;
