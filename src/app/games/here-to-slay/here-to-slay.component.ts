import { Component } from '@angular/core';
import { DiceComponent } from '../../shared/components/dice/dice.component';
import { Game } from '../../shared/models/game.model';
import { CommonModule } from '@angular/common';
import { DeckComponent } from '../../shared/components/deck/deck.component';

@Component({
  selector: 'app-here-to-slay',
  standalone: true,
  imports: [CommonModule, DeckComponent, DiceComponent],
  templateUrl: './here-to-slay.component.html',
  styleUrl: './here-to-slay.component.scss',
})
export class HereToSlayComponent {
  game: Game = {
    minPlayers: 0,
    maxPlayers: 0,
    decks: [
      {
        id: 1,
        name: 'Main',
        pick: 5,
        cards: [
          { name: 'Guardian', tags: ['Guardian;Hero'], count: 8},
          { name: 'Wizard', tags: ['Wizard;Hero'], count: 8},
          { name: 'Thief', tags: ['Thief;Hero'], count: 8},
          { name: 'Ranger', tags: ['Ranger;Hero'], count: 8},
          { name: 'Bard', tags: ['Bard;Hero'], count: 8},
          { name: 'Fighter', tags: ['Fighter;Hero'], count: 8},
          { name: 'Challenge', tags: ['Challenge'], count: 14},
          { name: 'Magic', tags: ['Magic'], count: 13},
          { name: 'Cursed Item', tags: ['Item', 'Cursed'], count: 4},
          { name: 'Item', tags: ['Item'], count: 11},
          { name: 'Modifier +', tags: ['+;Modifier'], count: 4},
          { name: 'Modifier -', tags: ['-;Modifier'], count: 4},
          { name: 'Modifier +-', tags: ['+;Modifier','-;Modifier'], count: 17},
        ]
      },
      {
        id: 2,
        name: 'Monster Cards',
        pick: 3,
        cards: [
          { name: 'Mega Slime', tags: ['4 Heroes'] },
          { name: 'Titan Wyvern', tags: ['2 Heroes', 'Fighter;Hero'] },
          { name: 'Orthus', tags: ['2 Heroes', 'Wizard;Hero'] },
          { name: 'Rex Major', tags: ['2 Heroes', 'Guardian;Hero'] },
          { name: 'Anuran Cauldron', tags: ['3 Heroes'] },
          { name: 'Terratuga', tags: ['1 Hero'] },
          { name: 'Artic Aries', tags: ['1 Hero'] },
          { name: 'Abyss Queen', tags: ['2 Heroes'] },
          { name: 'Corrupted Sabretooth', tags: ['3 Heroes'] },
          { name: 'Dark Dragon King', tags: ['2 Heroes', 'Bard;Hero'] },
          { name: 'Crowned Serpent', tags: ['2 Heroes'] },
          { name: 'Bloodwing', tags: ['2 Heroes'] },
          { name: 'Warworn Owlbear', tags: ['2 Heroes', 'Thief;Hero'] },
          { name: 'Dracos', tags: ['1 Hero'] },
          { name: 'Malamammoth', tags: ['2 Heroes', 'Ranger;Hero'] },
        ],
      }
    ],
    expansions: [],
    diceSets: [
      {
        dice: [{ type: 'd6' }, { type: 'd6' }],
      },
    ],
  };
}
