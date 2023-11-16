import React from 'react';
import Links from './Links/Links';
import styles from './lowerSection.module.css';
import AudioPlayerContainer from './AudioPlayerContainer/AudioPlayerContainer';

const LowerSection: React.FC = () => {
  return (
    <div className={styles.lowerSection}>
      <Links />
      <AudioPlayerContainer />
    </div>
  );
};

export default LowerSection;
