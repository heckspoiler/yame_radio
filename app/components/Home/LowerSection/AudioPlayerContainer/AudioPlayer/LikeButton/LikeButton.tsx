import React, { useState, useEffect, useRef } from 'react';
import styles from './likeButton.module.css';

type Props = {};

export const LikeButton = (props: Props) => {
  const [liked, setLiked] = useState(false);
  const fillRef = useRef(null);

  const toggleLike = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    if (liked) {
      fillRef.current.style.transition = 'width 0.5s';
      fillRef.current.style.width = '0%';
    } else {
      fillRef.current.style.width = '100%';
    }
  }, [liked]);

  return (
    <button className={styles.likeHeartContainer} onClick={toggleLike}>
      <svg
        width="15"
        height="13"
        viewBox="0 0 19 17"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5986 2.02933C18.3042 3.54224 18.477 6.17035 16.9847 7.89939L9.99295 16L2.20187 8.10157C0.599377 6.477 0.599377 3.84305 2.20187 2.21848C3.80436 0.593915 6.40251 0.593915 8.005 2.21848L9.59319 3.82856L10.8084 2.42067C12.3007 0.691632 14.8931 0.516424 16.5986 2.02933Z"
          fill="none"
          stroke="black"
          strokeWidth="0.5"
        />

        <mask id="heartMask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <rect
            ref={fillRef}
            x="0"
            y="0"
            width="0%"
            height="100%"
            fill="black"
          />
        </mask>
        <path
          d="M16.5986 2.02933C18.3042 3.54224 18.477 6.17035 16.9847 7.89939L9.99295 16L2.20187 8.10157C0.599377 6.477 0.599377 3.84305 2.20187 2.21848C3.80436 0.593915 6.40251 0.593915 8.005 2.21848L9.59319 3.82856L10.8084 2.42067C12.3007 0.691632 14.8931 0.516424 16.5986 2.02933Z"
          fill="#F22929"
          mask="url(#heartMask)"
        />
      </svg>
    </button>
  );
};
