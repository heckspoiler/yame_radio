import React from 'react';
import styles from './logo.module.css';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <div className={styles.logoContainer}>
      <Link href="/" className={styles.logoLink}>
        <h1>Yame Radio</h1>
      </Link>
    </div>
  );
};

export default Logo;
