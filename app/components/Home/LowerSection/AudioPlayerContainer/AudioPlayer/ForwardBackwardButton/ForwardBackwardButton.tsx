import React from 'react';
import Image from 'next/image';
import styles from './ForwardBackwardButton.module.css';

type Props = {};

export const ForwardButton = (props: Props) => {
  return (
    <button className={styles.skipButton}>
      <Image
        src="/public_icons/forwardbutton.svg"
        alt="forward button"
        width={30}
        height={30}
      />
    </button>
  );
};

export const BackButton = (props: Props) => {
  return (
    <button className={`${styles.skipButton} ${styles.backButton}`}>
      <Image
        src="/public_icons/backbutton.svg"
        alt="back button"
        width={30}
        height={30}
      />
    </button>
  );
};
