import { Injectable } from '@angular/core';
// Models Of Information
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';

@Injectable({
  providedIn: 'root',
})
export class SpotifyApiMapper {
  /**
   * Mapper the information of the last albums that have come out.
   * @param album
   * @returns albumMapped
   */
  public mapAlbum(album: any): Album {
    return {
      name: album.name,
      releaseDate: album.release_date,
      images: album.images[0].url,
      uri: album.uri,
      artists: album.artists.map((artist: any) => {
        return {
          artistId: artist.id,
          artistName: artist.name,
        };
      }),
    };
  }

  /**
   * Gets the response from the API request and sends it to be mapped to an object of type Album.
   * @param newAlbumReleases
   * @returns newAlbumReleasesMapped
   */
  public mapNewAlbumReleases(newAlbumReleases: any[]): Album[] {
    return newAlbumReleases.map((album) => this.mapAlbum(album));
  }

  /**
   * Mapper the information of artists.
   * @param artist
   * @returns mappedArtist
   */
  public mapArtist(artist: any): Artist {
    return {
      name: artist.name,
      followers: artist.followers.total,
      images: artist.images[0].url,
      uri: artist.uri,
      genres: artist.genres.map((genre: any) => genre),
    };
  }

  /**
   * Gets the response the search the artist in the API and mapped it to an object of type Artist.
   * @param artistsData
   * @returns mappedArtistsData
   */
  public mapArtistsData(artistsData: any[]): Artist[] {
    return artistsData.map((artist) => this.mapArtist(artist));
  }
}
