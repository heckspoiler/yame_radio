interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  genres: string[];
  duration: number;
  url: string;
  coverArtUrl: string;
}

export const allSongs: Song[] = [
  {
    id: 1,
    title: 'Iceman',
    artist: 'Yung Lean',
    album: 'Stranger',
    genres: ['Hip Hop', 'Rap', 'Cloudrap', 'Dreamy'],
    duration: 243,
    url: 'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp3',
    coverArtUrl:
      'https://i1.sndcdn.com/artworks-FJX0X0gTK6ONw0ce-RdMjlw-t500x500.jpg',
  },

  {
    id: 2,
    title: 'Count On It',
    artist: 'John McEnroe',
    album: 'Food Waster',
    genres: ['House', 'Funky', '90s', 'Chicago House'],
    duration: 222,
    url: 'https://dl.espressif.com/dl/audio/ff-16b-1c-44100hz.mp3',
    coverArtUrl:
      'https://m.media-amazon.com/images/I/71wntRXPjcL._UF1000,1000_QL80_.jpg',
  },
];
