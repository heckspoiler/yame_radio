import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from './marquee.module.css';

export default function HeaderMarquee() {
  return (
    <Marquee className={styles.marqueeContainer} pauseOnHover={true}>
      <div className={styles.marqueeElement}>
        <div className={styles.reddot}></div>
        <p>NO MUSIC FOR NOW</p>
        <div className={styles.marqueeSpan}></div>
      </div>
      <div className={styles.marqueeElement}>
        <div className={styles.reddot}></div>
        <p>NO MUSIC FOR NOW</p>
        <div className={styles.marqueeSpan}></div>
      </div>
      <div className={styles.marqueeElement}>
        <div className={styles.reddot}></div>
        <p>NO MUSIC FOR NOW</p>
        <div className={styles.marqueeSpan}></div>
      </div>
    </Marquee>
  );
}
