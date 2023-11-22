import { create } from 'zustand';

interface MusicPlayerState {
  songTitle: string;
  artist: string;
  duration: number;
  link: string;
  setSongTitle: (title: string) => void;
  setArtist: (artist: string) => void;
}

const musicPlayerStore = create<MusicPlayerState>((set) => ({
  songTitle: '',
  artist: 'nothing :( ',
  duration: 0,
  link: '',
  setSongTitle: (title) => set({ songTitle: title }),
  setArtist: (artist) => set({ artist: artist }),
}));
export default musicPlayerStore;
