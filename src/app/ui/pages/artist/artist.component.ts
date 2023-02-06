import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Spotify Api Services
import { SpotifyApiService } from 'src/app/core/services/spotify-api.service';
// Model Of Information
import { Artist } from 'src/app/core/models/Artist';

@Component({
  selector: 'spoti-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent {
  public artistData: Artist | undefined;

  constructor(
    private router: ActivatedRoute,
    private spotifyApiService: SpotifyApiService
  ) {
    this.router.params.subscribe((params) => {
      this.spotifyApiService
        .getArtistById(params['artistId'])
        .subscribe((artist: Artist) => (this.artistData = artist));
    });
  }
}
