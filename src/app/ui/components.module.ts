import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// All Components
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [LayoutComponent, HomeComponent],
  imports: [BrowserModule, CommonModule, RouterModule],
})
export class ComponentsModule {}
