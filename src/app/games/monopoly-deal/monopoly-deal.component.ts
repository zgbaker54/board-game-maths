import { Component } from '@angular/core';
import { Game } from '../../shared/models/game.model';
import { DeckComponent } from '../../shared/components/deck/deck.component';

@Component({
  selector: 'app-monopoly-deal',
  standalone: true,
  imports: [DeckComponent],
  templateUrl: './monopoly-deal.component.html',
  styleUrl: './monopoly-deal.component.scss',
})
export class MonopolyDealComponent {
  game: Game = {
    name: 'Monopoly Deal',
    minPlayers: 2,
    maxPlayers: 5,
    decks: [
      {
        id: 1,
        cards: [
          // Property
          { tags: ['Property', 'Brown;Color', '1M;Money'], count: 2 },
          { tags: ['Property', 'Light Blue;Color', '1M;Money'], count: 3 },
          { tags: ['Property', 'Pink;Color', '2M;Money'], count: 3 },
          { tags: ['Property', 'Orange;Color', '2M;Money'], count: 3 },
          { tags: ['Property', 'Red;Color', '3M;Money'], count: 3 },
          { tags: ['Property', 'Yellow;Color', '3M;Money'], count: 3 },
          { tags: ['Property', 'Green;Color', '4M;Money'], count: 3 },
          { tags: ['Property', 'Dark Blue;Color', '4M;Money'], count: 2 },
          { tags: ['Property', 'Railroads;Color', '2M;Money'], count: 4 },
          { tags: ['Property', 'Utilities;Color', '2M;Money'], count: 2 },

          // Property Wild
          { tags: ['Property', 'Wild', 'Light Blue;Color', 'Brown;Color', '1M;Money'] },
          { tags: ['Property', 'Wild', 'Light Blue;Color', 'Railroads;Color', '4M;Money'] },
          { tags: ['Property', 'Wild', 'Pink;Color', 'Orange;Color', '2M;Money'], count: 2 },
          { tags: ['Property', 'Wild', 'Red;Color', 'Yellow;Color', '3M;Money'], count: 2 },
          { tags: ['Property', 'Wild', 'Dark Blue;Color', 'Green;Color', '4M;Money'] },
          { tags: ['Property', 'Wild', 'Railroads;Color', 'Green;Color', '4M;Money'] },
          { tags: ['Property', 'Wild', 'Railroads;Color', 'Utility;Color', '2M;Money'] },
          {
            tags: [
              'Property',
              'Wild',
              'Light Blue;Color',
              'Brown;Color',
              'Pink;Color',
              'Orange;Color',
              'Red;Color',
              'Yellow;Color',
              'Green;Color',
              'Dark Blue;Color',
              'Railroads;Color',
              'Utilities;Color',
            ],
            count: 2,
          },

          // Action Cards
          { tags: ['Action', 'Deal Breaker', '5M;Money'], count: 2 },
          { tags: ['Action', 'Forced Deal', '3M;Money'], count: 3 },
          { tags: ['Action', 'Sly Deal', '3M;Money'], count: 3 },
          { tags: ['Action', 'Just Say No', '4M;Money'], count: 3 },
          { tags: ['Action', 'Debt Collector', '3M;Money'], count: 3 },
          { tags: ['Action', "It's My Birthday", '2M;Money'], count: 3 },
          { tags: ['Action', 'Double the Rent', '1M;Money'], count: 2 },
          { tags: ['Action', 'House', '3M;Money'], count: 3 },
          { tags: ['Action', 'Hotel', '4M;Money'], count: 2 },
          { tags: ['Action', 'Pass Go', '1M;Money'], count: 10 },

          // Rent
          { tags: ['Action', 'Rent', 'Light Blue;Color', 'Brown;Color', '1M;Money'], count: 2 },
          { tags: ['Action', 'Rent', 'Pink;Color', 'Orange;Color', '1M;Money'], count: 2 },
          { tags: ['Action', 'Rent', 'Red;Color', 'Yellow;Color', '1M;Money'], count: 2 },
          { tags: ['Action', 'Rent', 'Dark Blue;Color', 'Green;Color', '1M;Money'], count: 2 },
          { tags: ['Action', 'Rent', 'Railroads;Color', 'Utilities;Color', '1M;Money'], count: 2 },
          {
            tags: [
              'Action',
              'Rent',
              'Wild',
              'Light Blue;Color',
              'Brown;Color',
              'Pink;Color',
              'Orange;Color',
              'Red;Color',
              'Yellow;Color',
              'Green;Color',
              'Dark Blue;Color',
              'Railroads;Color',
              'Utilities;Color',
              '3M;Money'
            ],
            count: 3,
          },

          // Money
          { tags: ['1M;Money'], count: 6 },
          { tags: ['2M;Money'], count: 5 },
          { tags: ['3M;Money'], count: 3 },
          { tags: ['4M;Money'], count: 3 },
          { tags: ['5M;Money'], count: 2 },
          { tags: ['10M;Money'], count: 1 },
        ],
      },
    ],
    expansions: [],
  };
}
