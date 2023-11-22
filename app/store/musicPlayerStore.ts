import { create } from 'zustand';

interface MusicPlayerState {
  songTitle: string;
  artist: string;
  duration: string | number;
  link: string;
  radio: string;
  setRadioStation: (radio: string) => void;
  setSongTitle: (title: string) => void;
  setArtist: (artist: string) => void;
  setDuration: (duration: number) => void;
}

const musicPlayerStore = create<MusicPlayerState>((set) => ({
  songTitle: '',
  artist: '',
  duration: 0,
  link: '',
  radio: '',
  setRadioStation: (radio) => set({ radio: radio }),
  setSongTitle: (title) => set({ songTitle: title }),
  setArtist: (artist) => set({ artist: artist }),
  setDuration: (duration: number) => ({ duration: duration }),
}));
export default musicPlayerStore;
