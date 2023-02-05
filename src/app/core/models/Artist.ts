export interface Artist {
  name: string;
  followers: number;
  popularity: number;
  externalUrl: string;
  images: string;
  uri: string;
  genres: string[];
  type?: string;
}
