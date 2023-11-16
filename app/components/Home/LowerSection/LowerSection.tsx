import React from 'react';
import Links from './Links/Links';
import styles from './lowerSection.module.css';
import AudioPlayer from './AudioPlayer/AudioPlayer';

export default function LowerSection() {
  return (
    <div className={styles.lowerSection}>
      <Links />
      <AudioPlayer />
    </div>
  );
}
