import React from 'react';
import styles from './progressBar.module.css';

type Props = {};

export const ProgressBar = (props: Props) => {
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBarProgression}></div>
    </div>
  );
};
