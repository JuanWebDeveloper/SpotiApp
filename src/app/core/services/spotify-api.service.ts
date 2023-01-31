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
        'Bearer BQAtQKJ0ZqAVSrvUp73NB6LAK8ye37Ml5kPABcaPPx2y0Hp1-34cxzFY3jmPFZ28aA8bkfibB5gxwWONKB6lc3n9b7mhgjS0uAAaN9YRrajqXsUA-ykI',
    });

    return this.http.get(rootUrl + queryParams, { headers });
  }

  /**
   * Bring latest album releases
   * @returns New albums released
   */
  public getNewAlbumReleases() {
    return this.query('browse/new-releases?limit=3').pipe(
      map((response: any) => {
        return this.spotifyApiMapper.mapNewAlbumReleases(response.albums.items);
      })
    );
  }
}
