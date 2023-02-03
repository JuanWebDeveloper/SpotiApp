export interface Track {
  name: string;
  album: string;
  images: string;
  uri: string;
  artists: [
    {
      artistId: string;
      artistName: string;
    }
  ];
  type: string;
}
