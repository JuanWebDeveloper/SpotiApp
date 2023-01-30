import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// All Components
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CardsComponent } from './shared/cards/cards.component';
// Pipes
import { UriSanitizerPipe } from '../core/pipe/uri-sanitizer.pipe';
import { EmptyImagePipe } from '../core/pipe/empty-image.pipe';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    NavbarComponent,
    CardsComponent,
    UriSanitizerPipe,
    EmptyImagePipe
  ],
  imports: [BrowserModule, CommonModule, RouterModule, HttpClientModule],
})
export class ComponentsModule {}
