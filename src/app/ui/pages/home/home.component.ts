import { Component } from '@angular/core';
// Spotify Api Services
import { SpotifyApiService } from 'src/app/services/spotify-api.service';

@Component({
  selector: 'spoti-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public newAlbumsRelases: any = [];

  constructor(private spotifyApiService: SpotifyApiService) {
    this.spotifyApiService.getNewAlbumReleases().subscribe((data: any) => {
      this.newAlbumsRelases = data;
      console.log(data);
    });
  }
}
