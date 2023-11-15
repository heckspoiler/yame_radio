import React from 'react';
import styles from './header.module.css';
import Logo from './Logo/Logo';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.upperHeader}>
        <Logo />
      </div>
    </header>
  );
}
