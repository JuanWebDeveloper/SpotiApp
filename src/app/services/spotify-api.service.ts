import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyApiService {
  constructor(private http: HttpClient) {}

  query(queryParams: string) {
    const rootUrl = 'https://api.spotify.com/v1/';

    const headers: HttpHeaders = new HttpHeaders({
      Authorization:
        'Bearer BQB4zHMfnVW8TtHnXkscn1z5pjiX2D9aRKnbu-6LYlK4IYnnCqGr_w-YfOQjuJCJE-QbXNc7v-nGoOo4ucVHed3amCWQ8l1woBFLez1IjG0jjeuZ8I2j',
    });

    return this.http.get(rootUrl + queryParams, { headers });
  }

  public getNewAlbumReleases() {
    return this.query('browse/new-releases?limit=21').pipe(
      map((data: any) => {
        return data.albums.items;
      })
    );
  }
}
