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
        'Bearer BQB6fwZ726tioinaHySHf6WaPbJ2BmQ8cpShdeNWBoLJDYRtqG073Uhh56Ck73lMep_Hd9skiqi7olOjjPT5xCidMaYdqZ0uL6wX3g3w66sto4HPrhk2',
    });

    return this.http.get(rootUrl + queryParams, { headers });
  }

  /**
   * Bring latest album releases
   * @returns New albums released
   */
  public getNewAlbumReleases() {
    return this.query('browse/new-releases?limit=21').pipe(
      map((response: any) =>
        this.spotifyApiMapper.mapNewAlbumReleases(response.albums.items)
      )
    );
  }
}
