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
        'Bearer BQAKJTuLLC9Ih4yJ8-ueouGyJQnFZqRP3lnU57izBI_Q2LaFyKriAYshJdzj2fHvn8mFhWvykON3o5ojbkKC9nZwuFV1iCSsJWWtprRZWAVuNRdQn4el',
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
        console.log(response.albums.items);
        return this.spotifyApiMapper.mapNewAlbumReleases(response.albums.items);
      })
    );
  }
}
