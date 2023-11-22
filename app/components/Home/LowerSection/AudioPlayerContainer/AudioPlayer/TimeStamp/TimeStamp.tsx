'use client';

import React from 'react';
import styles from './timeStamp.module.css';
import musicPlayerStore from '@/app/store/musicPlayerStore';

type Props = {};

export const TimeStamp = (props: Props) => {
  // zustand hook for updating song duration
  const timeStamp = musicPlayerStore((state) => state.duration);
  console.log(timeStamp);
  return <div className={styles.timeStamp}>{timeStamp}</div>;
};
