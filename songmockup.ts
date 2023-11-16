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
    url: 'www.test.com',
    coverArtUrl:
      'https://i1.sndcdn.com/artworks-FJX0X0gTK6ONw0ce-RdMjlw-t500x500.jpg',
  },
];
