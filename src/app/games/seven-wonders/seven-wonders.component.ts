import { Component } from '@angular/core';
import { DeckComponent } from '../../shared/components/deck/deck.component';
import { game } from './seven-wonders.metadata';

@Component({
  selector: 'app-seven-wonders',
  standalone: true,
  imports: [DeckComponent],
  templateUrl: './seven-wonders.component.html',
  styleUrl: './seven-wonders.component.scss',
})
export class SevenWondersComponent {
  game = game;
}
