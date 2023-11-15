import React from 'react';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.listObject}>Home</li>
        <li className={styles.listObject}>News</li>
        <li className={styles.listObject}>About</li>
        <li className={styles.listObject}>Shop</li>
      </ul>
    </nav>
  );
}
