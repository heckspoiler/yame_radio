import React from 'react';
import styles from './header.module.css';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import HeaderMarquee from './Marquee/Marquee';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.upperHeader}>
        <Logo />
        <Navbar />
      </div>
      <HeaderMarquee />
    </header>
  );
}
