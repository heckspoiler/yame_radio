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
import musicPlayerStore from '@/app/store/musicPlayerStore';

type Props = {};

const AudioPlayer = (props: Props) => {
  const songTitle = musicPlayerStore((state) => state.songTitle); // zustand hook for updating song title
  const artistName = musicPlayerStore((state) => state.artist); // zustand hook for updating artist name
  return (
    <div className={styles.audioPlayer}>
      <div className={styles.playerVitals}>
        <p className={styles.songInfo}>
          {artistName && songTitle ? (
            <>
              Playing Now:
              <span className={styles.trackName}>
                {`${artistName} - ${songTitle}`}
              </span>
            </>
          ) : null}
        </p>

        <div className={styles.progressAndTime}>
          <ProgressBar />
          <TimeStamp />
        </div>
        <div className={styles.buttonContainer}>
          <BackButton />
          <PlayPauseButton />
          <ForwardButton />
          <LikeButton />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
