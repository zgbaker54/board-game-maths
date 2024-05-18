import { Component } from '@angular/core';
import { DeckComponent } from '../../shared/components/deck/deck.component';
import { Game } from '../../shared/models/game.model';

@Component({
  selector: 'app-seven-wonders',
  standalone: true,
  imports: [DeckComponent],
  templateUrl: './seven-wonders.component.html',
  styleUrl: './seven-wonders.component.scss',
})
export class SevenWondersComponent {
  game: Game = {
    name: '7 Wonders',
    minPlayers: 3,
    maxPlayers: 7,
    expansions: [],
    decks: [
      {
        id: 1,
        name: 'Age I',
        cards: [
          {
            tags: ['Brown;Color', 'Common Resource', 'Wood;Resource'],
            minPlayers: 3,
          },
          {
            tags: ['Brown;Color', 'Common Resource', 'Wood;Resource'],
            minPlayers: 4,
          },
          {
            tags: ['Brown;Color', 'Common Resource', 'Stone;Resource'],
            minPlayers: 3,
          },
          {
            tags: ['Brown;Color', 'Common Resource', 'Stone;Resource'],
            minPlayers: 5,
          },
          {
            tags: ['Brown;Color', 'Common Resource', 'Clay;Resource'],
            minPlayers: 3,
          },
          {
            tags: ['Brown;Color', 'Common Resource', 'Clay;Resource'],
            minPlayers: 5,
          },
          {
            tags: ['Brown;Color', 'Common Resource', 'Ore;Resource'],
            minPlayers: 3,
          },
          {
            tags: ['Brown;Color', 'Common Resource', 'Ore;Resource'],
            minPlayers: 4,
          },
          {
            tags: [
              'Brown;Color',
              'Common Resource',
              'Wood;Resource',
              'Clay;Resource',
            ],
            minPlayers: 6,
          },
          {
            tags: [
              'Brown;Color',
              'Common Resource',
              'Stone;Resource',
              'Clay;Resource',
            ],
            minPlayers: 4,
          },
          {
            tags: [
              'Brown;Color',
              'Common Resource',
              'Ore;Resource',
              'Clay;Resource',
            ],
            minPlayers: 3,
          },
          {
            tags: [
              'Brown;Color',
              'Common Resource',
              'Wood;Resource',
              'Stone;Resource',
            ],
            minPlayers: 3,
          },
          {
            tags: [
              'Brown;Color',
              'Common Resource',
              'Wood;Resource',
              'Ore;Resource',
            ],
            minPlayers: 5,
          },
          {
            tags: [
              'Brown;Color',
              'Common Resource',
              'Stone;Resource',
              'Ore;Resource',
            ],
            minPlayers: 6,
          },

          {
            tags: ['Gray;Color', 'Luxury Resource', 'Glassworks;Resource'],
            minPlayers: 3,
          },
          {
            tags: ['Gray;Color', 'Luxury Resource', 'Glassworks;Resource'],
            minPlayers: 6,
          },
          {
            tags: ['Gray;Color', 'Luxury Resource', 'Press;Resource'],
            minPlayers: 3,
          },
          {
            tags: ['Gray;Color', 'Luxury Resource', 'Press;Resource'],
            minPlayers: 6,
          },
          {
            tags: ['Gray;Color', 'Luxury Resource', 'Loom;Resource'],
            minPlayers: 3,
          },
          {
            tags: ['Gray;Color', 'Luxury Resource', 'Loom;Resource'],
            minPlayers: 6,
          },

          { tags: ['Blue;Color', 'Victory Points'], minPlayers: 3, count: 3 },
          { tags: ['Blue;Color', 'Victory Points'], minPlayers: 4 },
          { tags: ['Blue;Color', 'Victory Points'], minPlayers: 5 },
          { tags: ['Blue;Color', 'Victory Points'], minPlayers: 6 },
          { tags: ['Blue;Color', 'Victory Points'], minPlayers: 7, count: 2 },

          { tags: ['Yellow;Color', 'Gold;Resource'], minPlayers: 4 },
          { tags: ['Yellow;Color', 'Gold;Resource'], minPlayers: 5 },
          { tags: ['Yellow;Color', 'Gold;Resource'], minPlayers: 7 },
          {
            tags: [
              'Yellow;Color',
              'Discount',
              'Luxury Resource',
              'Glassworks;Resource',
              'Press;Resource',
              'Loom;Resource',
            ],
            minPlayers: 3,
          },
          {
            tags: [
              'Yellow;Color',
              'Discount',
              'Luxury Resource',
              'Glassworks;Resource',
              'Press;Resource',
              'Loom;Resource',
            ],
            minPlayers: 6,
          },
          {
            tags: [
              'Yellow;Color',
              'Discount',
              'Common Resource',
              'Wood;Resource',
              'Stone;Resource',
              'Clay;Resource',
              'Ore;Resource',
            ],
            count: 2,
            minPlayers: 3,
          },
          {
            tags: [
              'Yellow;Color',
              'Discount',
              'Common Resource',
              'Wood;Resource',
              'Stone;Resource',
              'Clay;Resource',
              'Ore;Resource',
            ],
            count: 2,
            minPlayers: 7,
          },

          { tags: ['Red;Color', 'Military'], minPlayers: 3, count: 3 },
          { tags: ['Red;Color', 'Military'], minPlayers: 4 },
          { tags: ['Red;Color', 'Military'], minPlayers: 5 },
          { tags: ['Red;Color', 'Military'], minPlayers: 7 },

          { tags: ['Green;Color', 'Compass'], minPlayers: 3 },
          { tags: ['Green;Color', 'Compass'], minPlayers: 5 },
          { tags: ['Green;Color', 'Gear'], minPlayers: 3 },
          { tags: ['Green;Color', 'Gear'], minPlayers: 7 },
          { tags: ['Green;Color', 'Tablet'], minPlayers: 3 },
          { tags: ['Green;Color', 'Tablet'], minPlayers: 4 },
        ],
      },
      {
        id: 2,
        name: 'Age II',
        cards: [],
      },
      {
        id: 3,
        name: 'Age III',
        cards: [],
      },
    ],
  };
}
