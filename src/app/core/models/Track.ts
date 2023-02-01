export interface Track {
  name: string;
  album: number;
  images: string;
  uri: string;
  artists: [
    {
      artistId: string;
      artistName: string;
    }
  ];
}
