import React from 'react';
import PlayPauseButton from './PlayPauseButton/PlayPauseButton';
import {
  ForwardButton,
  BackButton,
} from './ForwardBackwardButton/ForwardBackwardButton';
import { LikeButton } from './LikeButton/LikeButton';

import styles from './audioPlayer.module.css';
import { allSongs } from '../../../../../../songmockup';

type Props = {};

const AudioPlayer = (props: Props) => {
  return (
    <div>
      <div className={styles.buttonContainer}>
        <BackButton />
        <PlayPauseButton />
        <ForwardButton />
        <LikeButton />
      </div>
    </div>
  );
};

export default AudioPlayer;
