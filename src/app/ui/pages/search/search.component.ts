import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// Spotify Api Services
import { SpotifyApiService } from 'src/app/core/services/spotify-api.service';
// Models Of Information
import { Album } from 'src/app/core/models/Album';
import { Artist } from 'src/app/core/models/Artist';
import { Track } from 'src/app/core/models/Track';

@Component({
  selector: 'spoti-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public searchFilters: string[] = ['Album', 'Artist', 'Track'];
  public filterSelected: string = '';
  public searchValueContainer: string | undefined;
  public filterValueContainer: string | undefined;
  public albumResponsesContainer: Album[] | Artist[] | Track[] | any = [];
  public artistResponsesContainer: Album[] | Artist[] | Track[] | any = [];
  public trackResponsesContainer: Album[] | Artist[] | Track[] | any = [];
  public loading: boolean | undefined;
  public searching: boolean = false;
  public thereErrors: boolean | undefined;
  public errorMessage: string | undefined;

  constructor(private spotifyApiService: SpotifyApiService) {}

  ngOnInit(): void {
    this.filterSelected = this.searchFilters[0];
  }

  /**
   * Change the search filter
   * @param searchFilter
   */
  public changeSearchFilter(searchFilter: string): void {
    this.filterSelected = searchFilter;
  }

  /**
   * Fetch search results
   * @param formSearch
   * @returns Search results
   */
  performSearch(formSearch: NgForm): void {
    this.loading = true;
    const { search } = formSearch.value;
    this.searchValueContainer = search;
    this.filterValueContainer = this.filterSelected;
    this.albumResponsesContainer = [];
    this.artistResponsesContainer = [];
    this.trackResponsesContainer = [];
    this.thereErrors = false;

    this.spotifyApiService
      .fetchSearchResults(
        search.toLowerCase(),
        this.filterSelected.toLowerCase()
      )
      .subscribe(
        (data) => {
          if (data[0].type === 'album') {
            this.albumResponsesContainer = data;
          } else if (data[0].type === 'artist') {
            this.artistResponsesContainer = data;
          } else {
            this.trackResponsesContainer = data;
          }
          this.loading = false;
          this.searching = true;
        },
        ({ error }) => {
          this.loading = false;
          this.thereErrors = true;
          this.errorMessage = error.error.message;
        }
      );
  }
}
