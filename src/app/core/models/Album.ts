export interface Album {
  name: string;
  releaseDate: string;
  images: string;
  uri: string;
  artists: [
    {
      artistId: string;
      artistName: string;
    }
  ];
}
