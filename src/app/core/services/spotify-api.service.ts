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
        'Bearer BQBlQ0RxxnWjfBUqAjHgKPfxJsTPF-4771PlH7VxxR2uEWUd3AR05IRzfQ7fqiQ9v-AvwjyrFcIrPVyW47TO7F_wFmo1b4fHMtRdXG5WYzVQmi1-lB89',
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
