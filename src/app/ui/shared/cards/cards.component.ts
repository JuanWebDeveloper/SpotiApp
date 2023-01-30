import { Component, Input } from '@angular/core';
// Model Of Information
import { Album } from 'src/app/core/models/Album';

@Component({
  selector: 'spoti-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input() albums: Album | any;
}
