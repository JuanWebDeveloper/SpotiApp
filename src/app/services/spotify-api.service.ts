import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyApiService {
  constructor(private http: HttpClient) {}

  public getNewAlbumReleases() {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization:
        'Bearer BQB4zHMfnVW8TtHnXkscn1z5pjiX2D9aRKnbu-6LYlK4IYnnCqGr_w-YfOQjuJCJE-QbXNc7v-nGoOo4ucVHed3amCWQ8l1woBFLez1IjG0jjeuZ8I2j',
    });

    return this.http
      .get(`https://api.spotify.com/v1/browse/new-releases?limit=21`, {
        headers,
      })
      .pipe(
        map((data: any) => {
          return data.albums.items;
        })
      );
  }
}
