import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import Home from '@/app/page';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <Link href="/" className={styles.Link}>
          <li className={styles.listObject}>HOME</li>
        </Link>
        <Link href="/" className={styles.Link}>
          <li className={styles.listObject}>NEWS</li>
        </Link>
        <Link href="/" className={styles.Link}>
          <li className={styles.listObject}>ABOUT</li>
        </Link>
        <Link href="/" className={styles.Link}>
          <li className={styles.listObject}>SHOP</li>
        </Link>
      </ul>
    </nav>
  );
}
