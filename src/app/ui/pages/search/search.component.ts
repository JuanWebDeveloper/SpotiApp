import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// Spotify Api Services
import { SpotifyApiService } from 'src/app/core/services/spotify-api.service';

@Component({
  selector: 'spoti-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public searchFilters: string[] = ['Album', 'Artist', 'Track'];
  public filterSelected: string = '';

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
    const { search } = formSearch.value;

    this.spotifyApiService
      .fetchSearchResults(
        search.toLowerCase(),
        this.filterSelected.toLowerCase()
      )
      .subscribe((data) => console.log(data));
  }
}
