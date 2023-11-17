import React from 'react';
import styles from './homepage.module.css';
import Sidebar from '../components/Home/Sidebar/Sidebar';
import LowerSection from '../components/Home/LowerSection/LowerSection';
type Props = {};

export const HomePage = (props: Props) => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.lowerSideContainer}>
        <Sidebar />
        <LowerSection />
      </div>
    </div>
  );
};
