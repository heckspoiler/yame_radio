import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from './marquee.module.css';

const HeaderMarquee: React.FC = () => {
  return (
    <Marquee className={styles.marqueeContainer} speed={20}>
      <div className={styles.marqueeElement}>
        <div className={styles.reddot}></div>
        <p>Yung Lean - Iceman</p>
        <div className={styles.marqueeSpan}></div>
      </div>
      <div className={styles.marqueeElement}>
        <div className={styles.reddot}></div>
        <p>Playing Now</p>
        <div className={styles.marqueeSpan}></div>
      </div>
      <div className={styles.marqueeElement}>
        <div className={styles.reddot}></div>
        <p>Fluffy Radio</p>
        <div className={styles.marqueeSpan}></div>
      </div>
      <div className={styles.marqueeElement}>
        <div className={styles.reddot}></div>
        <p>Playing Now</p>
        <div className={styles.marqueeSpan}></div>
      </div>
    </Marquee>
  );
};

export default HeaderMarquee;
