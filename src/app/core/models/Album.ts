export interface Album {
  name: string;
  images: string;
  uri: string;
  artists: [
    {
      artistId: string;
      artistName: string;
    }
  ];
}
