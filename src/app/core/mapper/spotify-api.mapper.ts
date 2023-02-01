import { Injectable } from '@angular/core';
// Models Of Information
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
import { Track } from '../models/Track';

@Injectable({
  providedIn: 'root',
})
export class SpotifyApiMapper {
  /**
   * Mapper the information of the last albums that have come out.
   * @param album
   * @return albumMapped
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
   * @param albumsInformation
   * @return mappedAlbumsInformation
   */
  public mapAlbumsInformation(albumsInformation: any[]): Album[] {
    return albumsInformation.map((album) => this.mapAlbum(album));
  }

  /**
   * Mapper the information of artists.
   * @param artist
   * @return mappedArtist
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
   * @return mappedArtistsData
   */
  public mapArtistsData(artistsData: any[]): Artist[] {
    return artistsData.map((artist) => this.mapArtist(artist));
  }

  /**
   * Mapper the information of tracks.
   * @param track
   * @return mappedTrack
   */
  public mapTrack(track: any): Track {
    return {
      name: track.name,
      album: track.album.name,
      images: track.album.images[0].url,
      uri: track.uri,
      artists: track.artists.map((artist: any) => {
        return {
          artistId: artist.id,
          artistName: artist.name,
        };
      }),
    };
  }

  /**
   * Gets the response the search the track in the API and mapped it to an object of type Track.
   * @params tracksInformation
   * @return mappedTracksInformation
   */
  public mapTracksInformation(tracksInformation: any[]): Track[] {
    return tracksInformation.map((track) => this.mapTrack(track));
  }
}
