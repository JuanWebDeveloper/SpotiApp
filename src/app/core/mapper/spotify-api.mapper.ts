import { Injectable } from '@angular/core';
// Models Of Information
import { Album } from '../models/Album';

@Injectable({
  providedIn: 'root',
})
export class SpotifyApiMapper {
  /**
   * Assigns the request response to the API and maps it to an object of type Album.
   * @param newAlbum
   * @returns newAlbumMapped
   */
  public mapAlbum(newAlbum: any): Album {
    return {
      name: newAlbum.name,
      releaseDate: newAlbum.release_date,
      images: newAlbum.images[0].url,
      uri: newAlbum.uri,
      artists: newAlbum.artists.map((artist: any) => {
        return {
          artistId: artist.id,
          artistName: artist.name,
        };
      }),
    };
  }

  /**
   * Assigns the information of the last albums that have come out.
   * @param newAlbumReleases
   * @returns newAlbumReleasesMapped
   */
  public mapNewAlbumReleases(newAlbumReleases: any[]): Album[] {
    return newAlbumReleases.map((album) => this.mapAlbum(album));
  }
}
