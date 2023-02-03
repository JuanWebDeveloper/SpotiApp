import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Pipes
import { UriSanitizerPipe } from '../core/pipe/uri-sanitizer.pipe';
import { EmptyImagePipe } from '../core/pipe/empty-image.pipe';
// All Components
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CardsComponent } from './shared/cards/cards.component';
import { SearchComponent } from './pages/search/search.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { ArtistComponent } from './pages/artist/artist.component';

@NgModule({
  declarations: [
    UriSanitizerPipe,
    EmptyImagePipe,
    LayoutComponent,
    HomeComponent,
    NavbarComponent,
    CardsComponent,
    SearchComponent,
    LoadingComponent,
    ArtistComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class ComponentsModule {}
