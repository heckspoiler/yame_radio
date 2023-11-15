import React from 'react';
import styles from './logo.module.css';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Link href="/" className={styles.logoLink}>
        <h1>Yame Radio</h1>
      </Link>
    </div>
  );
}
