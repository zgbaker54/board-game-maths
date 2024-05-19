import { combinations } from 'mathjs';
import { Game } from '../../shared/models/game.model';
import { Card } from '../../shared/models/deck.model';

export const game: Game = {
  minPlayers: 3,
  maxPlayers: 7,
  expansions: [{ id: 1, name: 'Cities' }],
  diceSets: [],
  decks: [
    {
      id: 1,
      name: 'Age I',
      pick: 7,
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

        { tags: ['Green;Color', 'Compass;Science'], minPlayers: 3 },
        { tags: ['Green;Color', 'Compass;Science'], minPlayers: 5 },
        { tags: ['Green;Color', 'Gear;Science'], minPlayers: 3 },
        { tags: ['Green;Color', 'Gear;Science'], minPlayers: 7 },
        { tags: ['Green;Color', 'Tablet;Science'], minPlayers: 3 },
        { tags: ['Green;Color', 'Tablet;Science'], minPlayers: 4 },
      ],
    },
    {
      id: 2,
      name: 'Age II',
      pick: 7,
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
          minPlayers: 4,
        },
        {
          tags: ['Brown;Color', 'Common Resource', 'Clay;Resource'],
          minPlayers: 3,
        },
        {
          tags: ['Brown;Color', 'Common Resource', 'Clay;Resource'],
          minPlayers: 4,
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
          tags: ['Gray;Color', 'Luxury Resource', 'Glassworks;Resource'],
          minPlayers: 3,
        },
        {
          tags: ['Gray;Color', 'Luxury Resource', 'Glassworks;Resource'],
          minPlayers: 5,
        },
        {
          tags: ['Gray;Color', 'Luxury Resource', 'Press;Resource'],
          minPlayers: 3,
        },
        {
          tags: ['Gray;Color', 'Luxury Resource', 'Press;Resource'],
          minPlayers: 5,
        },
        {
          tags: ['Gray;Color', 'Luxury Resource', 'Loom;Resource'],
          minPlayers: 3,
        },
        {
          tags: ['Gray;Color', 'Luxury Resource', 'Loom;Resource'],
          minPlayers: 5,
        },

        { tags: ['Blue;Color', 'Victory Points'], minPlayers: 3, count: 4 },
        { tags: ['Blue;Color', 'Victory Points'], minPlayers: 5 },
        { tags: ['Blue;Color', 'Victory Points'], minPlayers: 6 },
        { tags: ['Blue;Color', 'Victory Points'], minPlayers: 7, count: 2 },

        {
          tags: [
            'Yellow;Color',
            'Common Resource',
            'Wood;Resource',
            'Stone;Resource',
            'Clay;Resource',
            'Ore;Resource',
          ],
          minPlayers: 3,
        },
        {
          tags: [
            'Yellow;Color',
            'Common Resource',
            'Wood;Resource',
            'Stone;Resource',
            'Clay;Resource',
            'Ore;Resource',
          ],
          minPlayers: 5,
        },
        {
          tags: [
            'Yellow;Color',
            'Common Resource',
            'Wood;Resource',
            'Stone;Resource',
            'Clay;Resource',
            'Ore;Resource',
          ],
          minPlayers: 6,
        },
        {
          tags: [
            'Yellow;Color',
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
            'Luxury Resource',
            'Glassworks;Resource',
            'Press;Resource',
            'Loom;Resource',
          ],
          minPlayers: 7,
        },
        {
          tags: ['Yellow;Color', 'Brown;Color', 'Gold;Resource'],
          minPlayers: 3,
        },
        {
          tags: ['Yellow;Color', 'Brown;Color', 'Gold;Resource'],
          minPlayers: 6,
        },
        {
          tags: ['Yellow;Color', 'Gray;Color', 'Gold;Resource'],
          minPlayers: 4,
        },
        {
          tags: ['Yellow;Color', 'Gray;Color', 'Gold;Resource'],
          minPlayers: 7,
        },

        { tags: ['Red;Color', 'Military'], minPlayers: 3, count: 3 },
        { tags: ['Red;Color', 'Military'], minPlayers: 4 },
        { tags: ['Red;Color', 'Military'], minPlayers: 5 },
        { tags: ['Red;Color', 'Military'], minPlayers: 6, count: 2 },
        { tags: ['Red;Color', 'Military'], minPlayers: 7, count: 2 },

        { tags: ['Green;Color', 'Compass;Science'], minPlayers: 3 },
        { tags: ['Green;Color', 'Compass;Science'], minPlayers: 4 },
        { tags: ['Green;Color', 'Gear;Science'], minPlayers: 3 },
        { tags: ['Green;Color', 'Gear;Science'], minPlayers: 5 },
        { tags: ['Green;Color', 'Tablet;Science'], minPlayers: 3, count: 2 },
        { tags: ['Green;Color', 'Tablet;Science'], minPlayers: 6 },
        { tags: ['Green;Color', 'Tablet;Science'], minPlayers: 7 },
      ],
    },
    {
      id: 3,
      name: 'Age III',
      pick: 7,
      totalCardsAdjust: (playerCount: number) => {
        return playerCount + 2 - 10;
      },
      totalValidCards: (playerCount: number, validCards: Card[]) => {
        const totalCount = validCards.reduce(
          (prev, value) => prev + (value.count ?? 1),
          0
        );
        const purpleCount = validCards
          .filter((x) => x.tags.includes('Purple;Color'))
          .reduce((prev, value) => prev + (value.count ?? 1), 0);
        if (purpleCount === 0) {
          return [totalCount, totalCount];
        } else if (purpleCount > playerCount + 2) {
          return [
            totalCount + playerCount + 2 - 10,
            totalCount + playerCount + 2 - 10,
          ];
        } else {
          return [Math.max(0, totalCount + playerCount + 2 - 10), totalCount];
        }
      },
      cards: [
        { tags: ['Blue;Color', 'Victory Points'], minPlayers: 3, count: 5 },
        { tags: ['Blue;Color', 'Victory Points'], minPlayers: 4 },
        { tags: ['Blue;Color', 'Victory Points'], minPlayers: 5 },
        { tags: ['Blue;Color', 'Victory Points'], minPlayers: 6, count: 2 },
        { tags: ['Blue;Color', 'Victory Points'], minPlayers: 7 },

        {
          tags: ['Yellow;Color', 'Gold;Resource', 'Victory Points'],
          minPlayers: 3,
        },
        {
          tags: ['Yellow;Color', 'Gold;Resource', 'Victory Points'],
          minPlayers: 6,
        },

        {
          tags: [
            'Yellow;Color',
            'Brown;Color',
            'Gold;Resource',
            'Victory Points',
          ],
          minPlayers: 3,
        },
        {
          tags: [
            'Yellow;Color',
            'Brown;Color',
            'Gold;Resource',
            'Victory Points',
          ],
          minPlayers: 4,
        },

        {
          tags: [
            'Yellow;Color',
            'Gray;Color',
            'Gold;Resource',
            'Victory Points',
          ],
          minPlayers: 4,
        },
        {
          tags: [
            'Yellow;Color',
            'Gray;Color',
            'Gold;Resource',
            'Victory Points',
          ],
          minPlayers: 6,
        },

        {
          tags: [
            'Yellow;Color',
            'Red;Color',
            'Gold;Resource',
            'Victory Points',
          ],
          minPlayers: 5,
        },
        {
          tags: [
            'Yellow;Color',
            'Red;Color',
            'Gold;Resource',
            'Victory Points',
          ],
          minPlayers: 7,
        },

        {
          tags: ['Yellow;Color', 'Wonder', 'Gold;Resource', 'Victory Points'],
          minPlayers: 3,
        },
        {
          tags: ['Yellow;Color', 'Wonder', 'Gold;Resource', 'Victory Points'],
          minPlayers: 5,
        },

        { tags: ['Red;Color', 'Military'], minPlayers: 3, count: 3 },
        { tags: ['Red;Color', 'Military'], minPlayers: 4, count: 2 },
        { tags: ['Red;Color', 'Military'], minPlayers: 5, count: 2 },
        { tags: ['Red;Color', 'Military'], minPlayers: 6 },
        { tags: ['Red;Color', 'Military'], minPlayers: 7, count: 2 },

        { tags: ['Green;Color', 'Compass;Science'], minPlayers: 3, count: 2 },
        { tags: ['Green;Color', 'Compass;Science'], minPlayers: 6 },
        { tags: ['Green;Color', 'Compass;Science'], minPlayers: 7 },
        { tags: ['Green;Color', 'Gear;Science'], minPlayers: 3, count: 2 },
        { tags: ['Green;Color', 'Gear;Science'], minPlayers: 5 },
        { tags: ['Green;Color', 'Gear;Science'], minPlayers: 7 },
        { tags: ['Green;Color', 'Tablet;Science'], minPlayers: 3 },
        { tags: ['Green;Color', 'Tablet;Science'], minPlayers: 4 },

        {
          tags: ['Purple;Color', 'Gear;Science', 'Compass;Science', 'Tablet;Science'],
          minPlayers: 3,
          probabilityFunc: purpleCardProbability,
        },
        {
          tags: ['Purple;Color', 'Brown;Color', 'Victory Points'],
          minPlayers: 3,
          probabilityFunc: purpleCardProbability,
        },
        {
          tags: ['Purple;Color', 'Gray;Color', 'Victory Points'],
          minPlayers: 3,
          probabilityFunc: purpleCardProbability,
        },
        {
          tags: ['Purple;Color', 'Blue;Color', 'Victory Points'],
          minPlayers: 3,
          probabilityFunc: purpleCardProbability,
        },
        {
          tags: ['Purple;Color', 'Yellow;Color', 'Victory Points'],
          minPlayers: 3,
          probabilityFunc: purpleCardProbability,
        },
        {
          tags: ['Purple;Color', 'Wonder', 'Victory Points'],
          minPlayers: 3,
          probabilityFunc: purpleCardProbability,
        },
        {
          tags: ['Purple;Color', 'Wonder', 'Victory Points'],
          minPlayers: 3,
          probabilityFunc: purpleCardProbability,
        },
        {
          tags: ['Purple;Color', 'Red;Color', 'Victory Points'],
          minPlayers: 3,
          probabilityFunc: purpleCardProbability,
        },
        {
          tags: ['Purple;Color', 'Green;Color', 'Victory Points'],
          minPlayers: 3,
          probabilityFunc: purpleCardProbability,
        },
        {
          tags: ['Purple;Color', 'Brown;Color', 'Gray;Color', 'Victory Points'],
          minPlayers: 3,
          probabilityFunc: purpleCardProbability,
        },
      ],
    },
    {
      id: 1,
      name: 'Age I',
      expansionId: 1,
      totalCardsAdjust: (playerCount: number) => {
        return playerCount - 14;
      },
      totalValidCards: (playerCount: number, validCards: Card[]) => {
        const totalCount = validCards.reduce(
          (prev, value) => prev + (value.count ?? 1),
          0
        );
        const blackCount = validCards
          .filter((x) => x.tags.includes('Black;Color'))
          .reduce((prev, value) => prev + (value.count ?? 1), 0);
        if (blackCount === 0) {
          return [totalCount, totalCount];
        } else if (blackCount > playerCount) {
          return [totalCount + playerCount - 14, totalCount + playerCount - 14];
        } else {
          return [Math.max(0, totalCount + playerCount - 14), totalCount];
        }
      },
      cards: [
        {
          tags: ['Black;Color'],
          minPlayers: 3,
          count: 14,
          probabilityFunc: blackCardProbability,
        },
      ],
    },
  ],
};

function purpleCardProbability(playerCount: number): number {
  return combinations(9, playerCount + 2) / combinations(10, playerCount + 2);
}

function blackCardProbability(playerCount: number): number {
  return combinations(13, playerCount) / combinations(14, playerCount);
}
