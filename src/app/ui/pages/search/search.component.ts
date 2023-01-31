import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spoti-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public searchFilters: string[] = ['Albums', 'Artists', 'Songs'];
  public filterSelected: string | undefined;

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
}
