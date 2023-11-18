import React from 'react';
import styles from './header.module.css';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import HeaderMarquee from './Marquee/Marquee';

const Header: React.FC = () => {
  return (
    <header className={styles.header} id="header">
      <div className={styles.upperHeader}>
        <Logo />
        <Navbar />
      </div>
      <HeaderMarquee />
    </header>
  );
};

export default Header;
