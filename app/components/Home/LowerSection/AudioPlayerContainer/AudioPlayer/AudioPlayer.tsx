import React from 'react';
import PlayPauseButton from './PlayPauseButton/PlayPauseButton';
import {
  ForwardButton,
  BackButton,
} from './ForwardBackwardButton/ForwardBackwardButton';
import { LikeButton } from './LikeButton/LikeButton';
import { ProgressBar } from './ProgressBar/ProgressBar';
import { TimeStamp } from './TimeStamp/TimeStamp';
import styles from './audioPlayer.module.css';
import { allSongs } from '../../../../../../songmockup';

type Props = {};

const AudioPlayer = (props: Props) => {
  return (
    <div>
      <p>Yung Lean - Iceman</p>
      <ProgressBar />
      <div className={styles.buttonContainer}>
        <BackButton />
        <PlayPauseButton />
        <ForwardButton />
        <LikeButton />
      </div>
      <TimeStamp />
    </div>
  );
};

export default AudioPlayer;
