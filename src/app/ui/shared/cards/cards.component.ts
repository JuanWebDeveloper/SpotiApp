import { Component, Input } from '@angular/core';
// Model Of Information
import { Card } from 'src/app/core/models/Card';

@Component({
  selector: 'spoti-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input() cardInformation: Card | any;
}
