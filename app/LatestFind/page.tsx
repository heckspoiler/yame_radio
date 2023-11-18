'use client';

import React, { useEffect } from 'react';
import { motion as m } from 'framer-motion';
import { pageVariants, pageTransition } from '@/utils/animations';
import styles from './latestFind.module.css';

type Props = {};

export const LatestFind: React.FC<Props> = () => {
  return (
    <m.div className={styles.latestFindsContainer} id="latestFind">
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
    </m.div>
  );
};
