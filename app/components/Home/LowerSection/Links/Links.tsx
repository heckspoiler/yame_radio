import React from 'react';
import Image from 'next/image';
import instagramIcon from './icons/instagram.svg';

export default function Links() {
  return (
    <div>
      {' '}
      <div>
        <Image priority src={instagramIcon} alt="Follow us on Twitter" />
      </div>
    </div>
  );
}
