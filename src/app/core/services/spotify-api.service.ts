import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
// Mapped Of Data
import { SpotifyApiMapper } from '../mapper/spotify-api.mapper';

@Injectable({
  providedIn: 'root',
})
export class SpotifyApiService {
  constructor(
    private http: HttpClient,
    private spotifyApiMapper: SpotifyApiMapper
  ) {}

  /**
   * Centralized consultation
   * @param queryParams
   * @returns The running get method
   */
  query(queryParams: string) {
    const rootUrl = 'https://api.spotify.com/v1/';

    const headers: HttpHeaders = new HttpHeaders({
      Authorization:
        'Bearer BQBGm57I3NKrygV3QVITm1JQygkCh6MnyqFlK_NPIHbexuk3jc7DmrkAUfh_FaJaKRnjq8U7Ta6k1XYimS6_S4WAvrADh0QFuQTx_y5AhQACOTMS3772',
    });

    return this.http.get(rootUrl + queryParams, { headers });
  }

  /**
   * Bring latest album releases
   * @returns New albums released
   */
  public getNewAlbumReleases() {
    return this.query('browse/new-releases?limit=21').pipe(
      map((res: any) => {
        return this.spotifyApiMapper.mapAlbumsInformation(res.albums.items);
      })
    );
  }

  /**
   * Find information related to the user's search
   * @param userSearch
   * @param searchFilter
   * @returns Search results
   */
  public fetchSearchResults(userSearch: string, searchFilter: string) {
    return this.query(
      `search?q=${userSearch}&type=${searchFilter}&limit=21`
    ).pipe(
      map((res: any) => {
        if (searchFilter === 'album') {
          return this.spotifyApiMapper.mapAlbumsInformation(res.albums.items);
        } else if (searchFilter === 'artist') {
          return this.spotifyApiMapper.mapArtistsData(res.artists.items);
        } else {
          return this.spotifyApiMapper.mapTracksInformation(res.tracks.items);
        }
      })
    );
  }
}
