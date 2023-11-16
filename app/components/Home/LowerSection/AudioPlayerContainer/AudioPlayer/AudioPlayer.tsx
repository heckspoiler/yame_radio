import React from 'react';
import PlayPauseButton from './PlayPauseButton/PlayPauseButton';
import { allSongs } from '../../../../../../songmockup';

type Props = {};

const AudioPlayer = (props: Props) => {
  return (
    <div>
      <PlayPauseButton />
    </div>
  );
};

export default AudioPlayer;
