import { Component } from '@angular/core';
// Spotify Api Services
import { SpotifyApiService } from 'src/app/core/services/spotify-api.service';
// Model Of Information
import { Album } from 'src/app/core/models/Album';

@Component({
  selector: 'spoti-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public newAlbumsRelases: Album[] = [];
  public loading: boolean | undefined;
  public thereErrors: boolean | undefined;
  public errorMessage: string | undefined;

  constructor(private spotifyApiService: SpotifyApiService) {
    this.loading = true;
    this.thereErrors = false;

    this.spotifyApiService.getNewAlbumReleases().subscribe(
      (data: Album[]) => {
        this.newAlbumsRelases = data;
        this.loading = false;
      },
      ({ error }) => {
        this.loading = false;
        this.thereErrors = true;
        this.errorMessage = error.error.message;
      }
    );
  }
}
