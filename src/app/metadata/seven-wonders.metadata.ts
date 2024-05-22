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
      ],
    },
    {
      id: 2,
      name: 'Age II',
      pickMin: 1,
      pickMax: 7,
      pick: 7,
      cards: [
        { name: 'Sawmill', minPlayers: 3, properties: {"color": ['Brown'], "resource": ['Wood'], "cost": ['Gold'],  } },
        { name: 'Sawmill', minPlayers: 4, properties: {"color": ['Brown'], "resource": ['Wood'], "cost": ['Gold'],  } },
        { name: 'Quarry', minPlayers: 3, properties: {"color": ['Brown'], "resource": ['Stone'], "cost": ['Gold'],  } },
        { name: 'Quarry', minPlayers: 4, properties: {"color": ['Brown'], "resource": ['Stone'], "cost": ['Gold'],  } },
        { name: 'Brickyard', minPlayers: 3, properties: {"color": ['Brown'], "resource": ['Clay'], "cost": ['Gold'],  } },
        { name: 'Brickyard', minPlayers: 4, properties: {"color": ['Brown'], "resource": ['Clay'], "cost": ['Gold'],  } },
        { name: 'Foundry', minPlayers: 3, properties: {"color": ['Brown'], "resource": ['Ore'], "cost": ['Gold'],  } },
        { name: 'Foundry', minPlayers: 4, properties: {"color": ['Brown'], "resource": ['Ore'], "cost": ['Gold'],  } },
        { name: 'Loom', minPlayers: 3, properties: {"color": ['Gray'], "resource": ['Loom'],  } },
        { name: 'Loom', minPlayers: 5, properties: {"color": ['Gray'], "resource": ['Loom'],  } },
        { name: 'Glassworks', minPlayers: 3, properties: {"color": ['Gray'], "resource": ['Glassworks'],  } },
        { name: 'Glassworks', minPlayers: 5, properties: {"color": ['Gray'], "resource": ['Glassworks'],  } },
        { name: 'Press', minPlayers: 3, properties: {"color": ['Gray'], "resource": ['Press'],  } },
        { name: 'Press', minPlayers: 5, properties: {"color": ['Gray'], "resource": ['Press'],  } },
        { name: 'Aqueduct', minPlayers: 3, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Stone'],  } },
        { name: 'Aqueduct', minPlayers: 7, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Stone'],  } },
        { name: 'Temple', minPlayers: 3, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Wood','Clay','Glassworks'],  } },
        { name: 'Temple', minPlayers: 6, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Wood','Clay','Glassworks'],  } },
        { name: 'Statue', minPlayers: 3, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Wood','Ore'],  } },
        { name: 'Statue', minPlayers: 7, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Wood','Ore'],  } },
        { name: 'Courthouse', minPlayers: 3, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Clay','Loom'],  } },
        { name: 'Courthouse', minPlayers: 5, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Clay','Loom'],  } },
        { name: 'Forum', minPlayers: 3, properties: {"color": ['Yellow'], "resource": ['Loom','Glassworks','Press'], "cost": ['Clay'],  } },
        { name: 'Forum', minPlayers: 6, properties: {"color": ['Yellow'], "resource": ['Loom','Glassworks','Press'], "cost": ['Clay'],  } },
        { name: 'Forum', minPlayers: 7, properties: {"color": ['Yellow'], "resource": ['Loom','Glassworks','Press'], "cost": ['Clay'],  } },
        { name: 'Caravansery', minPlayers: 3, properties: {"color": ['Yellow'], "resource": ['Clay','Stone','Wood','Ore'], "cost": ['Wood'],  } },
        { name: 'Caravansery', minPlayers: 5, properties: {"color": ['Yellow'], "resource": ['Clay','Stone','Wood','Ore'], "cost": ['Wood'],  } },
        { name: 'Caravansery', minPlayers: 6, properties: {"color": ['Yellow'], "resource": ['Clay','Stone','Wood','Ore'], "cost": ['Wood'],  } },
        { name: 'Vineyard', minPlayers: 3, properties: {"color": ['Yellow'], "resource": ['Gold'], "depends on": ['Brown Cards','Neighbors','Self'],  } },
        { name: 'Vineyard', minPlayers: 6, properties: {"color": ['Yellow"'], "resource": ['Gold'], "depends on": ['Brown Cards','Neighbors','Self'],  } },
        { name: 'Bazar', minPlayers: 4, properties: {"color": ['Yellow'], "resource": ['Gold'], "depends on": ['Gray Cards','Neighbors','Self'],  } },
        { name: 'Bazar', minPlayers: 7, properties: {"color": ['Yellow'], "resource": ['Gold'], "depends on": ['Gray Cards','Neighbors','Self'],  } },
        { name: 'Walls', minPlayers: 3, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Stone'],  } },
        { name: 'Walls', minPlayers: 7, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Stone'],  } },
        { name: 'Training Ground', minPlayers: 4, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Ore','Wood'],  } },
        { name: 'Training Ground', minPlayers: 6, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Ore','Wood'],  } },
        { name: 'Training Ground', minPlayers: 7, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Ore','Wood'],  } },
        { name: 'Stables', minPlayers: 3, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Ore','Clay','Wood'],  } },
        { name: 'Stables', minPlayers: 5, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Ore','Clay','Wood'],  } },
        { name: 'Archery Range', minPlayers: 3, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Ore','Wood'],  } },
        { name: 'Archery Range', minPlayers: 6, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Ore','Wood'],  } },
        { name: 'Dispensary', minPlayers: 3, properties: {"color": ['Green'], "resource": ['Compass'], "cost": ['Ore','Glassworks'],  } },
        { name: 'Dispensary', minPlayers: 4, properties: {"color": ['Green'], "resource": ['Compass'], "cost": ['Ore','Glassworks'],  } },
        { name: 'Laboratory', minPlayers: 3, properties: {"color": ['Green'], "resource": ['Gear'], "cost": ['Clay','Press'],  } },
        { name: 'Laboratory', minPlayers: 5, properties: {"color": ['Green'], "resource": ['Gear'], "cost": ['Clay','Press'],  } },
        { name: 'Library', minPlayers: 3, properties: {"color": ['Green'], "resource": ['Tablet'], "cost": ['Stone','Loom'],  } },
        { name: 'Library', minPlayers: 6, properties: {"color": ['Green'], "resource": ['Tablet'], "cost": ['Stone','Loom'],  } },
        { name: 'School', minPlayers: 3, properties: {"color": ['Green'], "resource": ['Tablet'], "cost": ['Wood','Press'],  } },
        { name: 'School', minPlayers: 7, properties: {"color": ['Green'], "resource": ['Tablet'], "cost": ['Wood','Press'],  } },
      ],
    },
    {
      id: 3,
      name: 'Age III',
      pickMin: 1,
      pickMax: 7,
      pick: 7,
      totalCardsAdjust: (playerCount: number) => {
        return playerCount + 2 - 10;
      },
      totalValidCards: (playerCount: number, validCards: Card[]) => {
        const totalCount = CardsCount(validCards);
        const purpleCount = CardsCount(
          validCards.filter((x) => x.properties['color'].includes('Purple'))
        );
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
      cardProbabilityFunc: (playerCount: number, card: Card) => {
        if(card.properties['color'].includes('Purple')) {
          return nChooseK(9, playerCount + 2) / nChooseK(10, playerCount + 2);
        } else {
          return 0;
        }
      },
      cards: [
        { name: 'Pantheon', minPlayers: 3, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Clay','Ore','Press','Loom','Glassworks'],  } },
        { name: 'Pantheon', minPlayers: 6, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Clay','Ore','Press','Loom','Glassworks'],  } },
        { name: 'Gardens', minPlayers: 3, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Clay','Wood'],  } },
        { name: 'Gardens', minPlayers: 4, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Clay','Wood'],  } },
        { name: 'Town Hall', minPlayers: 3, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Stone','Ore','Glassworks'],  } },
        { name: 'Town Hall', minPlayers: 5, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Stone','Ore','Glassworks'],  } },
        { name: 'Town Hall', minPlayers: 6, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Stone','Ore','Glassworks'],  } },
        { name: 'Palace', minPlayers: 3, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Clay','Wood','Ore','Stone','Glassworks','Press','Loom'],  } },
        { name: 'Palace', minPlayers: 7, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Clay','Wood','Ore','Stone','Glassworks','Press','Loom'],  } },
        { name: 'Senate', minPlayers: 3, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Wood','Ore','Stone'],  } },
        { name: 'Senate', minPlayers: 5, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Wood','Ore','Stone'],  } },
        { name: 'Haven', minPlayers: 3, properties: {"color": ['Yellow'], "resource": ['Gold','Victory Points'], "cost": ['Ore','Wood','Loom'], "depends on": ['Brown Cards','Self'],  } },
        { name: 'Haven', minPlayers: 4, properties: {"color": ['Yellow'], "resource": ['Gold','Victory Points'], "cost": ['Ore','Wood','Loom'], "depends on": ['Brown Cards','Self'],  } },
        { name: 'Lighthouse', minPlayers: 3, properties: {"color": ['Yellow'], "resource": ['Gold','Victory Points'], "cost": ['Stone','Glassworks'],  } },
        { name: 'Lighthouse', minPlayers: 6, properties: {"color": ['Yellow'], "resource": ['Gold','Victory Points'], "cost": ['Stone','Glassworks'],  } },
        { name: 'Chamber of Commerce', minPlayers: 4, properties: {"color": ['Yellow'], "resource": ['Gold','Victory Points'], "cost": ['Clay','Press'], "depends on": ['Gray Cards','Self'],  } },
        { name: 'Chamber of Commerce', minPlayers: 6, properties: {"color": ['Yellow'], "resource": ['Gold','Victory Points'], "cost": ['Clay','Press'], "depends on": ['Gray Cards','Self'],  } },
        { name: 'Arena', minPlayers: 3, properties: {"color": ['Yellow'], "resource": ['Gold','Victory Points'], "cost": ['Stone','Ore'], "depends on": ['Wonder','Self'],  } },
        { name: 'Arena', minPlayers: 5, properties: {"color": ['Yellow'], "resource": ['Gold','Victory Points'], "cost": ['Stone','Ore'], "depends on": ['Wonder','Self'],  } },
        { name: 'Arena', minPlayers: 7, properties: {"color": ['Yellow'], "resource": ['Gold','Victory Points'], "cost": ['Stone','Ore'], "depends on": ['Wonder','Self'],  } },
        { name: 'Fortifications', minPlayers: 3, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Stone','Ore'],  } },
        { name: 'Fortifications', minPlayers: 7, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Stone','Ore'],  } },
        { name: 'Circus', minPlayers: 4, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Stone','Ore'],  } },
        { name: 'Circus', minPlayers: 5, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Stone','Ore'],  } },
        { name: 'Circus', minPlayers: 6, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Stone','Ore'],  } },
        { name: 'Arsenal', minPlayers: 3, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Ore','Wood','Loom'],  } },
        { name: 'Arsenal', minPlayers: 4, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Ore','Wood','Loom'],  } },
        { name: 'Arsenal', minPlayers: 7, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Ore','Wood','Loom'],  } },
        { name: 'Siege Workshop', minPlayers: 3, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Wood','Clay'],  } },
        { name: 'Siege Workshop', minPlayers: 5, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Wood','Clay'],  } },
        { name: 'Lodge', minPlayers: 3, properties: {"color": ['Green'], "resource": ['Compass'], "cost": ['Clay','Loom','Press'],  } },
        { name: 'Lodge', minPlayers: 6, properties: {"color": ['Green'], "resource": ['Compass'], "cost": ['Clay','Loom','Press'],  } },
        { name: 'Observatory', minPlayers: 3, properties: {"color": ['Green'], "resource": ['Gear'], "cost": ['Ore','Glassworks','Loom'],  } },
        { name: 'Observatory', minPlayers: 7, properties: {"color": ['Green'], "resource": ['Gear'], "cost": ['Ore','Glassworks','Loom'],  } },
        { name: 'University', minPlayers: 3, properties: {"color": ['Green'], "resource": ['Tablet'], "cost": ['Wood','Press','Glassworks'],  } },
        { name: 'University', minPlayers: 4, properties: {"color": ['Green'], "resource": ['Tablet'], "cost": ['Wood','Press','Glassworks'],  } },
        { name: 'Academy', minPlayers: 3, properties: {"color": ['Green'], "resource": ['Compass'], "cost": ['Stone','Glassworks'],  } },
        { name: 'Academy', minPlayers: 7, properties: {"color": ['Green'], "resource": ['Compass'], "cost": ['Stone','Glassworks'],  } },
        { name: 'Study', minPlayers: 3, properties: {"color": ['Green'], "resource": ['Gear'], "cost": ['Wood','Press','Loom'],  } },
        { name: 'Study', minPlayers: 5, properties: {"color": ['Green'], "resource": ['Gear'], "cost": ['Wood','Press','Loom'],  } },
        { name: 'Workers Guild', properties: {"color": ['Purple'], "resource": ['Victory Points'], "cost": ['Ore','Clay','Stone','Wood'], "depends on": ['Brown Cards','Neighbors'],  } },
        { name: 'Craftmens Guild', properties: {"color": ['Purple'], "resource": ['Victory Points'], "cost": ['Ore','Stone'], "depends on": ['Gray Cards','Neighbors'],  } },
        { name: 'Traders Guild', properties: {"color": ['Purple'], "resource": ['Victory Points'], "cost": ['Loom','Glassworks','Press'], "depends on": ['Yellow Cards','Neighbors'],  } },
        { name: 'Philosophers Guild', properties: {"color": ['Purple'], "resource": ['Victory Points'], "cost": ['Clay','Loom','Press'], "depends on": ['Green Cards','Neighbors'],  } },
        { name: 'Spy Guild', properties: {"color": ['Purple'], "resource": ['Victory Points'], "cost": ['Clay','Glassworks'], "depends on": ['Red Cards','Neighbors'],  } },
        { name: 'Strategy Guild', properties: {"color": ['Purple'], "resource": ['Victory Points'], "cost": ['Ore','Stone','Loom'], "depends on": ['Military Loss','Neighbors'],  } },
        { name: 'Shipowners Guild', properties: {"color": ['Purple'], "resource": ['Victory Points'], "cost": ['Wood','Press','Glassworks'], "depends on": ['Brown Cards','Gray Cards','Purple Cards','Self'],  } },
        { name: 'Scientists Guild', properties: {"color": ['Purple'], "resource": ['Compass','Gear','Tablet'], "cost": ['Wood','Ore','Press'],  } },
        { name: 'Magistrates Guild', properties: {"color": ['Purple'], "resource": ['Victory Points'], "cost": ['Wood','Stone','Loom'], "depends on": ['Blue Cards','Neighbors'],  } },
        { name: 'Builders Guild', properties: {"color": ['Purple'], "resource": ['Victory Points'], "cost": ['Stone','Clay','Glassworks'], "depends on": ['Wonder','Neighbors','Self'],  } },
      ],
    },
    {
      id: 1,
      name: 'Cities Age I',
      expansionId: 1,
      pickMin: 1,
      pickMax: 8,
      pick: 8,
      totalCardsAdjust: (playerCount: number) => {
        return playerCount - 14;
      },
      totalValidCards: (playerCount: number, validCards: Card[]) => {
        const totalCount = CardsCount(validCards);
        const blackCount = CardsCount(
          validCards.filter((x) => x.properties['color'].includes('Black'))
        );
        if (blackCount === 0) {
          return [totalCount, totalCount];
        } else if (blackCount > playerCount) {
          return [totalCount + playerCount - 14, totalCount + playerCount - 14];
        } else {
          return [Math.max(0, totalCount + playerCount - 14), totalCount];
        }
      },
      cardProbabilityFunc: (playerCount: number, card: Card) => {
        if(card.properties['color'].includes('Black')) {
          return nChooseK(13, playerCount) / nChooseK(14, playerCount);
        } else {
          return 0;
        }
      },
      cards: [
        { name: 'Black Card', count: 14, properties: {"color": ['Black'],  } },
      ],
    },
    {
      id: 2,
      name: 'Cities Age II',
      expansionId: 1,
      pickMin: 1,
      pickMax: 8,
      pick: 8,
      totalCardsAdjust: (playerCount: number) => {
        return playerCount - 14;
      },
      totalValidCards: (playerCount: number, validCards: Card[]) => {
        const totalCount = CardsCount(validCards);
        const blackCount = CardsCount(
          validCards.filter((x) => x.properties['color'].includes('Black'))
        );
        if (blackCount === 0) {
          return [totalCount, totalCount];
        } else if (blackCount > playerCount) {
          return [totalCount + playerCount - 14, totalCount + playerCount - 14];
        } else {
          return [Math.max(0, totalCount + playerCount - 14), totalCount];
        }
      },
      cardProbabilityFunc: (playerCount: number, card: Card) => {
        if(card.properties['color'].includes('Black')) {
          return nChooseK(13, playerCount) / nChooseK(14, playerCount);
        } else {
          return 0;
        }
      },
      cards: [
        { name: 'Black Card', count: 14, properties: {"color": ['Black'],  } },
      ],
    },
    {
      id: 3,
      name: 'Cities Age III',
      expansionId: 1,
      pickMin: 1,
      pickMax: 8,
      pick: 8,
      totalCardsAdjust: (playerCount: number) => {
        return playerCount - 14;
      },
      totalValidCards: (playerCount: number, validCards: Card[]) => {
        const totalCount = CardsCount(validCards);
        const blackCount = CardsCount(
          validCards.filter((x) => x.properties['color'].includes('Black'))
        );
        if (blackCount === 0) {
          return [totalCount, totalCount];
        } else if (blackCount > playerCount) {
          return [totalCount + playerCount - 14, totalCount + playerCount - 14];
        } else {
          return [Math.max(0, totalCount + playerCount - 14), totalCount];
        }
      },
      cardProbabilityFunc: (playerCount: number, card: Card) => {
        if(card.properties['color'].includes('Black')) {
          return nChooseK(13, playerCount) / nChooseK(14, playerCount);
        } else {
          return 0;
        }
      },
      cards: [
        { name: 'Black Card', count: 14, properties: {"color": ['Black'],  } },
      ],
    },
  ],
};
