import React from 'react';
import Links from './Links/Links';
import styles from './lowerSection.module.css';

export default function LowerSection() {
  return (
    <div className={styles.lowerSection}>
      <Links />
    </div>
  );
}
