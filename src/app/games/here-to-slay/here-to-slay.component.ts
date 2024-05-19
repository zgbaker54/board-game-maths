import { Component } from '@angular/core';
import { DiceComponent } from '../../shared/components/dice/dice.component';
import { Game } from '../../shared/models/game.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-here-to-slay',
  standalone: true,
  imports: [CommonModule, DiceComponent],
  templateUrl: './here-to-slay.component.html',
  styleUrl: './here-to-slay.component.scss',
})
export class HereToSlayComponent {
  game: Game = {
    name: 'Here to Slay',
    minPlayers: 0,
    maxPlayers: 0,
    decks: [],
    expansions: [],
    diceSets: [
      {
        dice: [{ type: 'd6' }, { type: 'd6' }],
      },
    ],
  };
}
