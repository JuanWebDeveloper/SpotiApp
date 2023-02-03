import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { LayoutComponent } from './ui/layout/layout.component';
import { NavbarComponent } from './ui/shared/navbar/navbar.component';
import { HomeComponent } from './ui/pages/home/home.component';
import { SearchComponent } from './ui/pages/search/search.component';
import { ArtistComponent } from './ui/pages/artist/artist.component';

const routes: Routes = [
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      { path: '', component: NavbarComponent, outlet: 'navbar' },
      { path: '', component: HomeComponent },
    ],
  },
  {
    path: 'search',
    component: LayoutComponent,
    children: [
      { path: '', component: NavbarComponent, outlet: 'navbar' },
      { path: '', component: SearchComponent },
    ],
  },
  {
    path: 'artist',
    component: LayoutComponent,
    children: [
      { path: '', component: NavbarComponent, outlet: 'navbar' },
      { path: '', component: ArtistComponent },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
