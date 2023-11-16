import React from 'react';
import Image from 'next/image';
import instagramIcon from './icons/instagram.svg';
import patreonIcon from './icons/patreon.svg';
import profileIcon from './icons/profile.svg';
import styles from './links.module.css';

export default function Links() {
  return (
    <div className={styles.linksContainer}>
      <a href="https://www.google.com" target="_blank">
        <Image
          priority
          src={instagramIcon}
          alt="Follow us on Twitter"
          className={styles.image}
        />
      </a>
      <a href="https://www.google.com" target="_blank">
        <Image
          priority
          src={patreonIcon}
          alt="Follow us on Twitter"
          className={styles.image}
        />
      </a>
      <a href="https://www.google.com" target="_blank">
        <Image
          priority
          src={profileIcon}
          alt="Follow us on Twitter"
          className={styles.image}
        />
      </a>
    </div>
  );
}
