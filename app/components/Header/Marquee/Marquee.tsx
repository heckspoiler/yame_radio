'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from './marquee.module.css';

import musicPlayerStore from '@/app/store/musicPlayerStore';

const HeaderMarquee: React.FC = () => {
  const songTitle = musicPlayerStore((state) => state.songTitle); // zustand hook for updating song title
  const artistName = musicPlayerStore((state) => state.artist); // zustand hook for updating artist name
  const radioStation = musicPlayerStore((state) => state.radio); // zustand hook for updating radio station
  return (
    <Marquee className={styles.marqueeContainer} speed={20}>
      <div className={styles.marqueeElement}>
        <div className={styles.reddot}></div>
        <p>
          {artistName === 'nothing :( ' ? '' : `${artistName} - ${songTitle}`}
        </p>
        <div className={styles.marqueeSpan}></div>
      </div>
      <div className={styles.marqueeElement}>
        <div className={styles.reddot}></div>
        <p>{`${radioStation}`}</p>
        <div className={styles.marqueeSpan}></div>
      </div>
      <div className={styles.marqueeElement}>
        <div className={styles.reddot}></div>
        <p>
          {artistName === 'nothing :( ' ? '' : `${artistName} - ${songTitle}`}
        </p>
        <div className={styles.marqueeSpan}></div>
      </div>
      <div className={styles.marqueeElement}>
        <div className={styles.reddot}></div>
        <p>{`${radioStation}`}</p>
        <div className={styles.marqueeSpan}></div>
      </div>
    </Marquee>
  );
};

export default HeaderMarquee;
