import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from './marquee.module.css';

export default function HeaderMarquee() {
  return (
    <Marquee className={styles.marqueeContainer} pauseOnHover={true}>
      <p>NO MUSIC FOR NOW</p>
      <div></div>
      <p>NO MUSIC FOR NOW</p>
      <div></div>
      <p>NO MUSIC FOR NOW</p>
      <div></div>
    </Marquee>
  );
}
