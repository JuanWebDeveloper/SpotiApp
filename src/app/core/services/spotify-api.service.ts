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
        'Bearer BQD5fo6HHnsT6lQ3ZKKeR_LRMlLcg-BNCkgy6XeTnsL36Hi6gpGCYDe57fvSRGXT6eQKW7_GxJ8nmf5reuEYYtl6XWeJu-Bj7rX1T18QgVXwu3boJ7-L',
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
