import React from 'react';
import Links from './Links/Links';
import styles from './lowerSection.module.css';
import AudioPlayer from './AudioPlayer/AudioPlayer';

const LowerSection: React.FC = () => {
  return (
    <div className={styles.lowerSection}>
      <Links />
      <AudioPlayer />
    </div>
  );
};

export default LowerSection;
