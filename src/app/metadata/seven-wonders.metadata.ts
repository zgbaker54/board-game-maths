import { Game } from '../shared/models/game.model';
import { Card } from '../shared/models/deck.model';
import { CardsCount, nChooseK } from '../shared/helper';

export const sevenWondersMetadata: Game = {
  minPlayers: 3,
  maxPlayers: 7,
  expansions: [{ id: 1, name: 'Cities' }],
  diceSets: [],
  decks: [
    {
      id: 1,
      name: 'Age I',
      pickMin: 1,
      pickMax: 7,
      pick: 7,
      cards: [
        { name: 'Lumber Yard', minPlayers: 3, properties: {color: ['Brown'], resource: ['Wood'],  } },
{ name: 'Lumber Yard', minPlayers: 4, properties: {color: ['Brown'], resource: ['Wood'],  } },
{ name: 'Stone Pit', minPlayers: 3, properties: {color: ['Brown'], resource: ['Stone'],  } },
{ name: 'Stone Pit', minPlayers: 5, properties: {color: ['Brown'], resource: ['Stone'],  } },
{ name: 'Clay Pool', minPlayers: 3, properties: {color: ['Brown'], resource: ['Clay'],  } },
{ name: 'Clay Pool', minPlayers: 5, properties: {color: ['Brown'], resource: ['Clay'],  } },
{ name: 'Ore Vein', minPlayers: 3, properties: {color: ['Brown'], resource: ['Ore'],  } },
{ name: 'Ore Vein', minPlayers: 4, properties: {color: ['Brown'], resource: ['Ore'],  } },
{ name: 'Tree Farm', minPlayers: 6, properties: {color: ['Brown'], resource: ['Wood','Clay'], cost: ['Gold'],  } },
{ name: 'Excavation', minPlayers: 4, properties: {color: ['Brown'], resource: ['Stone','Clay'], cost: ['Gold'],  } },
{ name: 'Clay Pit', minPlayers: 3, properties: {color: ['Brown'], resource: ['Clay','Ore'], cost: ['Gold'],  } },
{ name: 'Timber Yard', minPlayers: 3, properties: {color: ['Brown'], resource: ['Stone','Wood'], cost: ['Gold'],  } },
{ name: 'Forest Cave', minPlayers: 5, properties: {color: ['Brown'], resource: ['Wood','Ore'], cost: ['Gold'],  } },
{ name: 'Mine', minPlayers: 6, properties: {color: ['Brown'], resource: ['Ore','Stone'], cost: ['Gold'],  } },
{ name: 'Loom', minPlayers: 3, properties: {color: ['Gray'], resource: ['Loom'],  } },
{ name: 'Loom', minPlayers: 6, properties: {color: ['Gray'], resource: ['Loom'],  } },
{ name: 'Glassworks', minPlayers: 3, properties: {color: ['Gray'], resource: ['Glassworks'],  } },
{ name: 'Glassworks', minPlayers: 6, properties: {color: ['Gray'], resource: ['Glassworks'],  } },
{ name: 'Press', minPlayers: 3, properties: {color: ['Gray'], resource: ['Press'],  } },
{ name: 'Press', minPlayers: 6, properties: {color: ['Gray'], resource: ['Press'],  } },
{ name: 'Pawnshop', minPlayers: 4, properties: {color: ['Blue'], resource: ['Victory Points'],  } },
{ name: 'Pawnshop', minPlayers: 7, properties: {color: ['Blue'], resource: ['Victory Points'],  } },
{ name: 'Baths', minPlayers: 3, properties: {color: ['Blue'], resource: ['Victory Points'], cost: ['Stone'],  } },
{ name: 'Baths', minPlayers: 7, properties: {color: ['Blue'], resource: ['Victory Points'], cost: ['Stone'],  } },
{ name: 'Altar', minPlayers: 3, properties: {color: ['Blue'], resource: ['Victory Points'],  } },
{ name: 'Altar', minPlayers: 5, properties: {color: ['Blue'], resource: ['Victory Points'],  } },
{ name: 'Theater', minPlayers: 3, properties: {color: ['Blue'], resource: ['Victory Points'],  } },
{ name: 'Theater', minPlayers: 6, properties: {color: ['Blue'], resource: ['Victory Points'],  } },
{ name: 'Tavern', minPlayers: 4, properties: {color: ['Yellow'], resource: ['Gold'],  } },
{ name: 'Tavern', minPlayers: 5, properties: {color: ['Yellow'], resource: ['Gold'],  } },
{ name: 'Tavern', minPlayers: 7, properties: {color: ['Yellow'], resource: ['Gold'],  } },
{ name: 'East Trading Post', minPlayers: 3, properties: {color: ['Yellow'], resource: ['Discount Clay/Stone/Wood/Ore'],  } },
{ name: 'East Trading Post', minPlayers: 7, properties: {color: ['Yellow'], resource: ['Discount Clay/Stone/Wood/Ore'],  } },
{ name: 'West Trading Post', minPlayers: 3, properties: {color: ['Yellow'], resource: ['Discount Clay/Stone/Wood/Ore'],  } },
{ name: 'West Trading Post', minPlayers: 7, properties: {color: ['Yellow'], resource: ['Discount Clay/Stone/Wood/Ore'],  } },
{ name: 'Marketplace', minPlayers: 3, properties: {color: ['Yellow'], resource: ['Discount Loom/Glassworks/Press'],  } },
{ name: 'Marketplace', minPlayers: 6, properties: {color: ['Yellow'], resource: ['Discount Loom/Glassworks/Press'],  } },
{ name: 'Stockade', minPlayers: 3, properties: {color: ['Red'], resource: ['Military'], cost: ['Wood'],  } },
{ name: 'Stockade', minPlayers: 7, properties: {color: ['Red'], resource: ['Military'], cost: ['Wood'],  } },
{ name: 'Barracks', minPlayers: 3, properties: {color: ['Red'], resource: ['Military'], cost: ['Ore'],  } },
{ name: 'Barracks', minPlayers: 5, properties: {color: ['Red'], resource: ['Military'], cost: ['Ore'],  } },
{ name: 'Guard Tower', minPlayers: 3, properties: {color: ['Red'], resource: ['Military'], cost: ['Clay'],  } },
{ name: 'Guard Tower', minPlayers: 4, properties: {color: ['Red'], resource: ['Military'], cost: ['Clay'],  } },
{ name: 'Apothecary', minPlayers: 3, properties: {color: ['Green'], resource: ['Compass'], cost: ['Loom'],  } },
{ name: 'Apothecary', minPlayers: 5, properties: {color: ['Green'], resource: ['Compass'], cost: ['Loom'],  } },
{ name: 'Workshop', minPlayers: 3, properties: {color: ['Green'], resource: ['Gear'], cost: ['Glassworks'],  } },
{ name: 'Workshop', minPlayers: 7, properties: {color: ['Green'], resource: ['Gear'], cost: ['Glassworks'],  } },
{ name: 'Scriptorium', minPlayers: 3, properties: {color: ['Green'], resource: ['Tablet'], cost: ['Press'],  } },
{ name: 'Scriptorium', minPlayers: 4, properties: {color: ['Green'], resource: ['Tablet'], cost: ['Press'],  } },
      //   {
      //     minPlayers: 3,
      //     properties: { color: ['Brown'], resource: ['Wood'] },
      //   },
      //   {
      //     tags: ['Brown;Color', 'Common Resource', 'Wood;Resource'],
      //     minPlayers: 4,
      //   },
      //   {
      //     tags: ['Brown;Color', 'Common Resource', 'Stone;Resource'],
      //     minPlayers: 3,
      //   },
      //   {
      //     tags: ['Brown;Color', 'Common Resource', 'Stone;Resource'],
      //     minPlayers: 5,
      //   },
      //   {
      //     tags: ['Brown;Color', 'Common Resource', 'Clay;Resource'],
      //     minPlayers: 3,
      //   },
      //   {
      //     tags: ['Brown;Color', 'Common Resource', 'Clay;Resource'],
      //     minPlayers: 5,
      //   },
      //   {
      //     tags: ['Brown;Color', 'Common Resource', 'Ore;Resource'],
      //     minPlayers: 3,
      //   },
      //   {
      //     tags: ['Brown;Color', 'Common Resource', 'Ore;Resource'],
      //     minPlayers: 4,
      //   },
      //   {
      //     tags: [
      //       'Brown;Color',
      //       'Common Resource',
      //       'Wood;Resource',
      //       'Clay;Resource',
      //     ],
      //     minPlayers: 6,
      //   },
      //   {
      //     tags: [
      //       'Brown;Color',
      //       'Common Resource',
      //       'Stone;Resource',
      //       'Clay;Resource',
      //     ],
      //     minPlayers: 4,
      //   },
      //   {
      //     tags: [
      //       'Brown;Color',
      //       'Common Resource',
      //       'Ore;Resource',
      //       'Clay;Resource',
      //     ],
      //     minPlayers: 3,
      //   },
      //   {
      //     tags: [
      //       'Brown;Color',
      //       'Common Resource',
      //       'Wood;Resource',
      //       'Stone;Resource',
      //     ],
      //     minPlayers: 3,
      //   },
      //   {
      //     tags: [
      //       'Brown;Color',
      //       'Common Resource',
      //       'Wood;Resource',
      //       'Ore;Resource',
      //     ],
      //     minPlayers: 5,
      //   },
      //   {
      //     tags: [
      //       'Brown;Color',
      //       'Common Resource',
      //       'Stone;Resource',
      //       'Ore;Resource',
      //     ],
      //     minPlayers: 6,
      //   },

      //   {
      //     tags: ['Gray;Color', 'Luxury Resource', 'Glassworks;Resource'],
      //     minPlayers: 3,
      //   },
      //   {
      //     tags: ['Gray;Color', 'Luxury Resource', 'Glassworks;Resource'],
      //     minPlayers: 6,
      //   },
      //   {
      //     tags: ['Gray;Color', 'Luxury Resource', 'Press;Resource'],
      //     minPlayers: 3,
      //   },
      //   {
      //     tags: ['Gray;Color', 'Luxury Resource', 'Press;Resource'],
      //     minPlayers: 6,
      //   },
      //   {
      //     tags: ['Gray;Color', 'Luxury Resource', 'Loom;Resource'],
      //     minPlayers: 3,
      //   },
      //   {
      //     tags: ['Gray;Color', 'Luxury Resource', 'Loom;Resource'],
      //     minPlayers: 6,
      //   },

      //   { tags: ['Blue;Color', 'Victory Points'], minPlayers: 3, count: 3 },
      //   { tags: ['Blue;Color', 'Victory Points'], minPlayers: 4 },
      //   { tags: ['Blue;Color', 'Victory Points'], minPlayers: 5 },
      //   { tags: ['Blue;Color', 'Victory Points'], minPlayers: 6 },
      //   { tags: ['Blue;Color', 'Victory Points'], minPlayers: 7, count: 2 },

      //   { tags: ['Yellow;Color', 'Gold;Resource'], minPlayers: 4 },
      //   { tags: ['Yellow;Color', 'Gold;Resource'], minPlayers: 5 },
      //   { tags: ['Yellow;Color', 'Gold;Resource'], minPlayers: 7 },
      //   {
      //     tags: [
      //       'Yellow;Color',
      //       'Discount',
      //       'Luxury Resource',
      //       'Glassworks;Resource',
      //       'Press;Resource',
      //       'Loom;Resource',
      //     ],
      //     minPlayers: 3,
      //   },
      //   {
      //     tags: [
      //       'Yellow;Color',
      //       'Discount',
      //       'Luxury Resource',
      //       'Glassworks;Resource',
      //       'Press;Resource',
      //       'Loom;Resource',
      //     ],
      //     minPlayers: 6,
      //   },
      //   {
      //     tags: [
      //       'Yellow;Color',
      //       'Discount',
      //       'Common Resource',
      //       'Wood;Resource',
      //       'Stone;Resource',
      //       'Clay;Resource',
      //       'Ore;Resource',
      //     ],
      //     count: 2,
      //     minPlayers: 3,
      //   },
      //   {
      //     tags: [
      //       'Yellow;Color',
      //       'Discount',
      //       'Common Resource',
      //       'Wood;Resource',
      //       'Stone;Resource',
      //       'Clay;Resource',
      //       'Ore;Resource',
      //     ],
      //     count: 2,
      //     minPlayers: 7,
      //   },

      //   { tags: ['Red;Color', 'Military'], minPlayers: 3, count: 3 },
      //   { tags: ['Red;Color', 'Military'], minPlayers: 4 },
      //   { tags: ['Red;Color', 'Military'], minPlayers: 5 },
      //   { tags: ['Red;Color', 'Military'], minPlayers: 7 },

      //   { tags: ['Green;Color', 'Compass;Science'], minPlayers: 3 },
      //   { tags: ['Green;Color', 'Compass;Science'], minPlayers: 5 },
      //   { tags: ['Green;Color', 'Gear;Science'], minPlayers: 3 },
      //   { tags: ['Green;Color', 'Gear;Science'], minPlayers: 7 },
      //   { tags: ['Green;Color', 'Tablet;Science'], minPlayers: 3 },
      //   { tags: ['Green;Color', 'Tablet;Science'], minPlayers: 4 },
      ],
    },
    // {
    //   id: 2,
    //   name: 'Age II',
    //   pickMin: 1,
    //   pickMax: 7,
    //   pick: 7,
    //   cards: [
    //     {
    //       tags: ['Brown;Color', 'Common Resource', 'Wood;Resource'],
    //       minPlayers: 3,
    //     },
    //     {
    //       tags: ['Brown;Color', 'Common Resource', 'Wood;Resource'],
    //       minPlayers: 4,
    //     },
    //     {
    //       tags: ['Brown;Color', 'Common Resource', 'Stone;Resource'],
    //       minPlayers: 3,
    //     },
    //     {
    //       tags: ['Brown;Color', 'Common Resource', 'Stone;Resource'],
    //       minPlayers: 4,
    //     },
    //     {
    //       tags: ['Brown;Color', 'Common Resource', 'Clay;Resource'],
    //       minPlayers: 3,
    //     },
    //     {
    //       tags: ['Brown;Color', 'Common Resource', 'Clay;Resource'],
    //       minPlayers: 4,
    //     },
    //     {
    //       tags: ['Brown;Color', 'Common Resource', 'Ore;Resource'],
    //       minPlayers: 3,
    //     },
    //     {
    //       tags: ['Brown;Color', 'Common Resource', 'Ore;Resource'],
    //       minPlayers: 4,
    //     },

    //     {
    //       tags: ['Gray;Color', 'Luxury Resource', 'Glassworks;Resource'],
    //       minPlayers: 3,
    //     },
    //     {
    //       tags: ['Gray;Color', 'Luxury Resource', 'Glassworks;Resource'],
    //       minPlayers: 5,
    //     },
    //     {
    //       tags: ['Gray;Color', 'Luxury Resource', 'Press;Resource'],
    //       minPlayers: 3,
    //     },
    //     {
    //       tags: ['Gray;Color', 'Luxury Resource', 'Press;Resource'],
    //       minPlayers: 5,
    //     },
    //     {
    //       tags: ['Gray;Color', 'Luxury Resource', 'Loom;Resource'],
    //       minPlayers: 3,
    //     },
    //     {
    //       tags: ['Gray;Color', 'Luxury Resource', 'Loom;Resource'],
    //       minPlayers: 5,
    //     },

    //     { tags: ['Blue;Color', 'Victory Points'], minPlayers: 3, count: 4 },
    //     { tags: ['Blue;Color', 'Victory Points'], minPlayers: 5 },
    //     { tags: ['Blue;Color', 'Victory Points'], minPlayers: 6 },
    //     { tags: ['Blue;Color', 'Victory Points'], minPlayers: 7, count: 2 },

    //     {
    //       tags: [
    //         'Yellow;Color',
    //         'Common Resource',
    //         'Wood;Resource',
    //         'Stone;Resource',
    //         'Clay;Resource',
    //         'Ore;Resource',
    //       ],
    //       minPlayers: 3,
    //     },
    //     {
    //       tags: [
    //         'Yellow;Color',
    //         'Common Resource',
    //         'Wood;Resource',
    //         'Stone;Resource',
    //         'Clay;Resource',
    //         'Ore;Resource',
    //       ],
    //       minPlayers: 5,
    //     },
    //     {
    //       tags: [
    //         'Yellow;Color',
    //         'Common Resource',
    //         'Wood;Resource',
    //         'Stone;Resource',
    //         'Clay;Resource',
    //         'Ore;Resource',
    //       ],
    //       minPlayers: 6,
    //     },
    //     {
    //       tags: [
    //         'Yellow;Color',
    //         'Luxury Resource',
    //         'Glassworks;Resource',
    //         'Press;Resource',
    //         'Loom;Resource',
    //       ],
    //       minPlayers: 3,
    //     },
    //     {
    //       tags: [
    //         'Yellow;Color',
    //         'Luxury Resource',
    //         'Glassworks;Resource',
    //         'Press;Resource',
    //         'Loom;Resource',
    //       ],
    //       minPlayers: 6,
    //     },
    //     {
    //       tags: [
    //         'Yellow;Color',
    //         'Luxury Resource',
    //         'Glassworks;Resource',
    //         'Press;Resource',
    //         'Loom;Resource',
    //       ],
    //       minPlayers: 7,
    //     },
    //     {
    //       tags: ['Yellow;Color', 'Brown;Color', 'Gold;Resource'],
    //       minPlayers: 3,
    //     },
    //     {
    //       tags: ['Yellow;Color', 'Brown;Color', 'Gold;Resource'],
    //       minPlayers: 6,
    //     },
    //     {
    //       tags: ['Yellow;Color', 'Gray;Color', 'Gold;Resource'],
    //       minPlayers: 4,
    //     },
    //     {
    //       tags: ['Yellow;Color', 'Gray;Color', 'Gold;Resource'],
    //       minPlayers: 7,
    //     },

    //     { tags: ['Red;Color', 'Military'], minPlayers: 3, count: 3 },
    //     { tags: ['Red;Color', 'Military'], minPlayers: 4 },
    //     { tags: ['Red;Color', 'Military'], minPlayers: 5 },
    //     { tags: ['Red;Color', 'Military'], minPlayers: 6, count: 2 },
    //     { tags: ['Red;Color', 'Military'], minPlayers: 7, count: 2 },

    //     { tags: ['Green;Color', 'Compass;Science'], minPlayers: 3 },
    //     { tags: ['Green;Color', 'Compass;Science'], minPlayers: 4 },
    //     { tags: ['Green;Color', 'Gear;Science'], minPlayers: 3 },
    //     { tags: ['Green;Color', 'Gear;Science'], minPlayers: 5 },
    //     { tags: ['Green;Color', 'Tablet;Science'], minPlayers: 3, count: 2 },
    //     { tags: ['Green;Color', 'Tablet;Science'], minPlayers: 6 },
    //     { tags: ['Green;Color', 'Tablet;Science'], minPlayers: 7 },
    //   ],
    // },
    // {
    //   id: 3,
    //   name: 'Age III',
    //   pickMin: 1,
    //   pickMax: 7,
    //   pick: 7,
    //   totalCardsAdjust: (playerCount: number) => {
    //     return playerCount + 2 - 10;
    //   },
    //   totalValidCards: (playerCount: number, validCards: Card[]) => {
    //     const totalCount = CardsCount(validCards);
    //     const purpleCount = CardsCount(
    //       validCards.filter((x) => x.tags.includes('Purple;Color'))
    //     );
    //     if (purpleCount === 0) {
    //       return [totalCount, totalCount];
    //     } else if (purpleCount > playerCount + 2) {
    //       return [
    //         totalCount + playerCount + 2 - 10,
    //         totalCount + playerCount + 2 - 10,
    //       ];
    //     } else {
    //       return [Math.max(0, totalCount + playerCount + 2 - 10), totalCount];
    //     }
    //   },
    //   cards: [
    //     { tags: ['Blue;Color', 'Victory Points'], minPlayers: 3, count: 5 },
    //     { tags: ['Blue;Color', 'Victory Points'], minPlayers: 4 },
    //     { tags: ['Blue;Color', 'Victory Points'], minPlayers: 5 },
    //     { tags: ['Blue;Color', 'Victory Points'], minPlayers: 6, count: 2 },
    //     { tags: ['Blue;Color', 'Victory Points'], minPlayers: 7 },

    //     {
    //       tags: ['Yellow;Color', 'Gold;Resource', 'Victory Points'],
    //       minPlayers: 3,
    //     },
    //     {
    //       tags: ['Yellow;Color', 'Gold;Resource', 'Victory Points'],
    //       minPlayers: 6,
    //     },

    //     {
    //       tags: [
    //         'Yellow;Color',
    //         'Brown;Color',
    //         'Gold;Resource',
    //         'Victory Points',
    //       ],
    //       minPlayers: 3,
    //     },
    //     {
    //       tags: [
    //         'Yellow;Color',
    //         'Brown;Color',
    //         'Gold;Resource',
    //         'Victory Points',
    //       ],
    //       minPlayers: 4,
    //     },

    //     {
    //       tags: [
    //         'Yellow;Color',
    //         'Gray;Color',
    //         'Gold;Resource',
    //         'Victory Points',
    //       ],
    //       minPlayers: 4,
    //     },
    //     {
    //       tags: [
    //         'Yellow;Color',
    //         'Gray;Color',
    //         'Gold;Resource',
    //         'Victory Points',
    //       ],
    //       minPlayers: 6,
    //     },

    //     {
    //       tags: [
    //         'Yellow;Color',
    //         'Red;Color',
    //         'Gold;Resource',
    //         'Victory Points',
    //       ],
    //       minPlayers: 5,
    //     },
    //     {
    //       tags: [
    //         'Yellow;Color',
    //         'Red;Color',
    //         'Gold;Resource',
    //         'Victory Points',
    //       ],
    //       minPlayers: 7,
    //     },

    //     {
    //       tags: ['Yellow;Color', 'Wonder', 'Gold;Resource', 'Victory Points'],
    //       minPlayers: 3,
    //     },
    //     {
    //       tags: ['Yellow;Color', 'Wonder', 'Gold;Resource', 'Victory Points'],
    //       minPlayers: 5,
    //     },

    //     { tags: ['Red;Color', 'Military'], minPlayers: 3, count: 3 },
    //     { tags: ['Red;Color', 'Military'], minPlayers: 4, count: 2 },
    //     { tags: ['Red;Color', 'Military'], minPlayers: 5, count: 2 },
    //     { tags: ['Red;Color', 'Military'], minPlayers: 6 },
    //     { tags: ['Red;Color', 'Military'], minPlayers: 7, count: 2 },

    //     { tags: ['Green;Color', 'Compass;Science'], minPlayers: 3, count: 2 },
    //     { tags: ['Green;Color', 'Compass;Science'], minPlayers: 6 },
    //     { tags: ['Green;Color', 'Compass;Science'], minPlayers: 7 },
    //     { tags: ['Green;Color', 'Gear;Science'], minPlayers: 3, count: 2 },
    //     { tags: ['Green;Color', 'Gear;Science'], minPlayers: 5 },
    //     { tags: ['Green;Color', 'Gear;Science'], minPlayers: 7 },
    //     { tags: ['Green;Color', 'Tablet;Science'], minPlayers: 3 },
    //     { tags: ['Green;Color', 'Tablet;Science'], minPlayers: 4 },

    //     {
    //       tags: [
    //         'Purple;Color',
    //         'Gear;Science',
    //         'Compass;Science',
    //         'Tablet;Science',
    //       ],
    //       minPlayers: 3,
    //       probabilityFunc: purpleCardProbability,
    //     },
    //     {
    //       tags: ['Purple;Color', 'Brown;Color', 'Victory Points'],
    //       minPlayers: 3,
    //       probabilityFunc: purpleCardProbability,
    //     },
    //     {
    //       tags: ['Purple;Color', 'Gray;Color', 'Victory Points'],
    //       minPlayers: 3,
    //       probabilityFunc: purpleCardProbability,
    //     },
    //     {
    //       tags: ['Purple;Color', 'Blue;Color', 'Victory Points'],
    //       minPlayers: 3,
    //       probabilityFunc: purpleCardProbability,
    //     },
    //     {
    //       tags: ['Purple;Color', 'Yellow;Color', 'Victory Points'],
    //       minPlayers: 3,
    //       probabilityFunc: purpleCardProbability,
    //     },
    //     {
    //       tags: ['Purple;Color', 'Wonder', 'Victory Points'],
    //       minPlayers: 3,
    //       probabilityFunc: purpleCardProbability,
    //     },
    //     {
    //       tags: ['Purple;Color', 'Wonder', 'Victory Points'],
    //       minPlayers: 3,
    //       probabilityFunc: purpleCardProbability,
    //     },
    //     {
    //       tags: ['Purple;Color', 'Red;Color', 'Victory Points'],
    //       minPlayers: 3,
    //       probabilityFunc: purpleCardProbability,
    //     },
    //     {
    //       tags: ['Purple;Color', 'Green;Color', 'Victory Points'],
    //       minPlayers: 3,
    //       probabilityFunc: purpleCardProbability,
    //     },
    //     {
    //       tags: ['Purple;Color', 'Brown;Color', 'Gray;Color', 'Victory Points'],
    //       minPlayers: 3,
    //       probabilityFunc: purpleCardProbability,
    //     },
    //   ],
    // },
    // {
    //   id: 1,
    //   name: 'Age I',
    //   expansionId: 1,
    //   pickMin: 1,
    //   pickMax: 8,
    //   pick: 8,
    //   totalCardsAdjust: (playerCount: number) => {
    //     return playerCount - 14;
    //   },
    //   totalValidCards: (playerCount: number, validCards: Card[]) => {
    //     const totalCount = CardsCount(validCards);
    //     const blackCount = CardsCount(
    //       validCards.filter((x) => x.tags.includes('Black;Color'))
    //     );
    //     if (blackCount === 0) {
    //       return [totalCount, totalCount];
    //     } else if (blackCount > playerCount) {
    //       return [totalCount + playerCount - 14, totalCount + playerCount - 14];
    //     } else {
    //       return [Math.max(0, totalCount + playerCount - 14), totalCount];
    //     }
    //   },
    //   cards: [
    //     {
    //       tags: ['Black;Color'],
    //       minPlayers: 3,
    //       count: 14,
    //       probabilityFunc: blackCardProbability,
    //     },
    //   ],
    // },
    // {
    //     id: 2,
    //     name: 'Age II',
    //     expansionId: 1,
    //     pickMin: 1,
    //     pickMax: 8,
    //     pick: 8,
    //     totalCardsAdjust: (playerCount: number) => {
    //       return playerCount - 14;
    //     },
    //     totalValidCards: (playerCount: number, validCards: Card[]) => {
    //       const totalCount = CardsCount(validCards);
    //       const blackCount = CardsCount(
    //         validCards.filter((x) => x.tags.includes('Black;Color'))
    //       );
    //       if (blackCount === 0) {
    //         return [totalCount, totalCount];
    //       } else if (blackCount > playerCount) {
    //         return [totalCount + playerCount - 14, totalCount + playerCount - 14];
    //       } else {
    //         return [Math.max(0, totalCount + playerCount - 14), totalCount];
    //       }
    //     },
    //     cards: [
    //       {
    //         tags: ['Black;Color'],
    //         minPlayers: 3,
    //         count: 14,
    //         probabilityFunc: blackCardProbability,
    //       },
    //     ],
    //   },
    //   {
    //     id: 3,
    //     name: 'Age III',
    //     expansionId: 1,
    //     pickMin: 1,
    //     pickMax: 8,
    //     pick: 8,
    //     totalCardsAdjust: (playerCount: number) => {
    //       return playerCount - 14;
    //     },
    //     totalValidCards: (playerCount: number, validCards: Card[]) => {
    //       const totalCount = CardsCount(validCards);
    //       const blackCount = CardsCount(
    //         validCards.filter((x) => x.tags.includes('Black;Color'))
    //       );
    //       if (blackCount === 0) {
    //         return [totalCount, totalCount];
    //       } else if (blackCount > playerCount) {
    //         return [totalCount + playerCount - 14, totalCount + playerCount - 14];
    //       } else {
    //         return [Math.max(0, totalCount + playerCount - 14), totalCount];
    //       }
    //     },
    //     cards: [
    //       {
    //         tags: ['Black;Color'],
    //         minPlayers: 3,
    //         count: 14,
    //         probabilityFunc: blackCardProbability,
    //       },
    //     ],
    //   },
  ],
};

function purpleCardProbability(playerCount: number): number {
  return nChooseK(9, playerCount + 2) / nChooseK(10, playerCount + 2);
}

function blackCardProbability(playerCount: number): number {
  return nChooseK(13, playerCount) / nChooseK(14, playerCount);
}
