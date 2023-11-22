import { create } from 'zustand';

interface MusicPlayerState {
  songTitle: string;
  artist: string;
  link: string;
  length: number;
}

const musicPlayerStore = create<MusicPlayerState>((set) => ({
  songTitle: 'default',
  artist: 'default',
  link: 'default',
  length: 0,
}));

export default musicPlayerStore;
