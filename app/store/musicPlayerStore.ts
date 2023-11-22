import { create } from 'zustand';

interface MusicPlayerState {
  songTitle: string;
  artist: string;
  duration: number;
  link: string;
  radio: string;
  setRadioStation: (radio: string) => void;
  setSongTitle: (title: string) => void;
  setArtist: (artist: string) => void;
}

const musicPlayerStore = create<MusicPlayerState>((set) => ({
  songTitle: '',
  artist: 'nothing :( ',
  duration: 0,
  link: '',
  radio: 'void',
  setRadioStation: (radio) => ({ radio: radio }),
  setSongTitle: (title) => set({ songTitle: title }),
  setArtist: (artist) => set({ artist: artist }),
}));
export default musicPlayerStore;
