import { Game } from '../shared/models/game.model';
import { Card } from '../shared/models/deck.model';
import { CardsCount, nChooseK } from '../shared/helper';

export const sevenWondersMetadata: Game = {
  minPlayers: 3,
  maxPlayers: 7,
  expansions: [{ id: 1, name: 'Cities' }, {id: 2, name: 'Leaders'}, {id: 3, name: 'Armada'}],
  diceSets: [],
  decks: [
    // ************************************************************************************************************************************************
    // Base Game 
    // ************************************************************************************************************************************************
    {
      id: 1,
      name: 'Age I',
      pickMin: 1,
      pickMax: 7,
      pick: 7,
      cards: [
        { name: 'Lumber Yard', rules: ['resource'], minPlayers: 3, properties: {color: ['Brown'], resource: ['Wood'],  } },
        { name: 'Lumber Yard', rules: ['resource'], minPlayers: 4, properties: {color: ['Brown'], resource: ['Wood'],  } },
        { name: 'Stone Pit', rules: ['resource'], minPlayers: 3, properties: {color: ['Brown'], resource: ['Stone'],  } },
        { name: 'Stone Pit', rules: ['resource'], minPlayers: 5, properties: {color: ['Brown'], resource: ['Stone'],  } },
        { name: 'Clay Pool', rules: ['resource'], minPlayers: 3, properties: {color: ['Brown'], resource: ['Clay'],  } },
        { name: 'Clay Pool', rules: ['resource'], minPlayers: 5, properties: {color: ['Brown'], resource: ['Clay'],  } },
        { name: 'Ore Vein', rules: ['resource'], minPlayers: 3, properties: {color: ['Brown'], resource: ['Ore'],  } },
        { name: 'Ore Vein', rules: ['resource'], minPlayers: 4, properties: {color: ['Brown'], resource: ['Ore'],  } },
        { name: 'Tree Farm', rules: ['resource-multi'], minPlayers: 6, properties: {color: ['Brown'], resource: ['Wood','Clay'], cost: ['Gold'],  } },
        { name: 'Excavation', rules: ['resource-multi'], minPlayers: 4, properties: {color: ['Brown'], resource: ['Stone','Clay'], cost: ['Gold'],  } },
        { name: 'Clay Pit', rules: ['resource-multi'], minPlayers: 3, properties: {color: ['Brown'], resource: ['Clay','Ore'], cost: ['Gold'],  } },
        { name: 'Timber Yard', rules: ['resource-multi'], minPlayers: 3, properties: {color: ['Brown'], resource: ['Stone','Wood'], cost: ['Gold'],  } },
        { name: 'Forest Cave', rules: ['resource-multi'], minPlayers: 5, properties: {color: ['Brown'], resource: ['Wood','Ore'], cost: ['Gold'],  } },
        { name: 'Mine', rules: ['resource-multi'], minPlayers: 6, properties: {color: ['Brown'], resource: ['Ore','Stone'], cost: ['Gold'],  } },
        { name: 'Loom', rules: ['resource'], minPlayers: 3, properties: {color: ['Gray'], resource: ['Loom'],  } },
        { name: 'Loom', rules: ['resource'], minPlayers: 6, properties: {color: ['Gray'], resource: ['Loom'],  } },
        { name: 'Glassworks', rules: ['resource'], minPlayers: 3, properties: {color: ['Gray'], resource: ['Glassworks'],  } },
        { name: 'Glassworks', rules: ['resource'], minPlayers: 6, properties: {color: ['Gray'], resource: ['Glassworks'],  } },
        { name: 'Press', rules: ['resource'], minPlayers: 3, properties: {color: ['Gray'], resource: ['Press'],  } },
        { name: 'Press', rules: ['resource'], minPlayers: 6, properties: {color: ['Gray'], resource: ['Press'],  } },
        { name: 'Pawnshop', rules: ['victory-point'], minPlayers: 4, properties: {color: ['Blue'], resource: ['Victory Points'],  } },
        { name: 'Pawnshop', rules: ['victory-point'], minPlayers: 7, properties: {color: ['Blue'], resource: ['Victory Points'],  } },
        { name: 'Baths', rules: ['victory-point'], minPlayers: 3, properties: {color: ['Blue'], resource: ['Victory Points'], cost: ['Stone'],  } },
        { name: 'Baths', rules: ['victory-point'], minPlayers: 7, properties: {color: ['Blue'], resource: ['Victory Points'], cost: ['Stone'],  } },
        { name: 'Altar', rules: ['victory-point'], minPlayers: 3, properties: {color: ['Blue'], resource: ['Victory Points'],  } },
        { name: 'Altar', rules: ['victory-point'], minPlayers: 5, properties: {color: ['Blue'], resource: ['Victory Points'],  } },
        { name: 'Theater', rules: ['victory-point'], minPlayers: 3, properties: {color: ['Blue'], resource: ['Victory Points'],  } },
        { name: 'Theater', rules: ['victory-point'], minPlayers: 6, properties: {color: ['Blue'], resource: ['Victory Points'],  } },
        { name: 'Tavern', rules: ['gold'], minPlayers: 4, properties: {color: ['Yellow'], resource: ['Gold'],  } },
        { name: 'Tavern', rules: ['gold'], minPlayers: 5, properties: {color: ['Yellow'], resource: ['Gold'],  } },
        { name: 'Tavern', rules: ['gold'], minPlayers: 7, properties: {color: ['Yellow'], resource: ['Gold'],  } },
        { name: 'East Trading Post', rules: ['trade-common'], minPlayers: 3, properties: {color: ['Yellow'], resource: ['Discount Clay/Stone/Wood/Ore'],  } },
        { name: 'East Trading Post', rules: ['trade-common'], minPlayers: 7, properties: {color: ['Yellow'], resource: ['Discount Clay/Stone/Wood/Ore'],  } },
        { name: 'West Trading Post', rules: ['trade-common'], minPlayers: 3, properties: {color: ['Yellow'], resource: ['Discount Clay/Stone/Wood/Ore'],  } },
        { name: 'West Trading Post', rules: ['trade-common'], minPlayers: 7, properties: {color: ['Yellow'], resource: ['Discount Clay/Stone/Wood/Ore'],  } },
        { name: 'Marketplace', rules: ['trade-rare'], minPlayers: 3, properties: {color: ['Yellow'], resource: ['Discount Loom/Glassworks/Press'],  } },
        { name: 'Marketplace', rules: ['trade-rare'], minPlayers: 6, properties: {color: ['Yellow'], resource: ['Discount Loom/Glassworks/Press'],  } },
        { name: 'Stockade', rules: ['military'], minPlayers: 3, properties: {color: ['Red'], resource: ['Military'], cost: ['Wood'],  } },
        { name: 'Stockade', rules: ['military'], minPlayers: 7, properties: {color: ['Red'], resource: ['Military'], cost: ['Wood'],  } },
        { name: 'Barracks', rules: ['military'], minPlayers: 3, properties: {color: ['Red'], resource: ['Military'], cost: ['Ore'],  } },
        { name: 'Barracks', rules: ['military'], minPlayers: 5, properties: {color: ['Red'], resource: ['Military'], cost: ['Ore'],  } },
        { name: 'Guard Tower', rules: ['military'], minPlayers: 3, properties: {color: ['Red'], resource: ['Military'], cost: ['Clay'],  } },
        { name: 'Guard Tower', rules: ['military'], minPlayers: 4, properties: {color: ['Red'], resource: ['Military'], cost: ['Clay'],  } },
        { name: 'Apothecary', rules: ['science'], minPlayers: 3, properties: {color: ['Green'], resource: ['Compass'], cost: ['Loom'],  } },
        { name: 'Apothecary', rules: ['science'], minPlayers: 5, properties: {color: ['Green'], resource: ['Compass'], cost: ['Loom'],  } },
        { name: 'Workshop', rules: ['science'], minPlayers: 3, properties: {color: ['Green'], resource: ['Gear'], cost: ['Glassworks'],  } },
        { name: 'Workshop', rules: ['science'], minPlayers: 7, properties: {color: ['Green'], resource: ['Gear'], cost: ['Glassworks'],  } },
        { name: 'Scriptorium', rules: ['science'], minPlayers: 3, properties: {color: ['Green'], resource: ['Tablet'], cost: ['Press'],  } },
        { name: 'Scriptorium', rules: ['science'], minPlayers: 4, properties: {color: ['Green'], resource: ['Tablet'], cost: ['Press'],  } },
      ],
    },
    {
      id: 2,
      name: 'Age II',
      pickMin: 1,
      pickMax: 7,
      pick: 7,
      cards: [
        { name: 'Sawmill', rules: ['resource'], minPlayers: 3, properties: {"color": ['Brown'], "resource": ['Wood'], "cost": ['Gold'],  } },
        { name: 'Sawmill', rules: ['resource'], minPlayers: 4, properties: {"color": ['Brown'], "resource": ['Wood'], "cost": ['Gold'],  } },
        { name: 'Quarry', rules: ['resource'], minPlayers: 3, properties: {"color": ['Brown'], "resource": ['Stone'], "cost": ['Gold'],  } },
        { name: 'Quarry', rules: ['resource'], minPlayers: 4, properties: {"color": ['Brown'], "resource": ['Stone'], "cost": ['Gold'],  } },
        { name: 'Brickyard', rules: ['resource'], minPlayers: 3, properties: {"color": ['Brown'], "resource": ['Clay'], "cost": ['Gold'],  } },
        { name: 'Brickyard', rules: ['resource'], minPlayers: 4, properties: {"color": ['Brown'], "resource": ['Clay'], "cost": ['Gold'],  } },
        { name: 'Foundry', rules: ['resource'], minPlayers: 3, properties: {"color": ['Brown'], "resource": ['Ore'], "cost": ['Gold'],  } },
        { name: 'Foundry', rules: ['resource'], minPlayers: 4, properties: {"color": ['Brown'], "resource": ['Ore'], "cost": ['Gold'],  } },
        { name: 'Loom', rules: ['resource'], minPlayers: 3, properties: {"color": ['Gray'], "resource": ['Loom'],  } },
        { name: 'Loom', rules: ['resource'], minPlayers: 5, properties: {"color": ['Gray'], "resource": ['Loom'],  } },
        { name: 'Glassworks', rules: ['resource'], minPlayers: 3, properties: {"color": ['Gray'], "resource": ['Glassworks'],  } },
        { name: 'Glassworks', rules: ['resource'], minPlayers: 5, properties: {"color": ['Gray'], "resource": ['Glassworks'],  } },
        { name: 'Press', rules: ['resource'], minPlayers: 3, properties: {"color": ['Gray'], "resource": ['Press'],  } },
        { name: 'Press', rules: ['resource'], minPlayers: 5, properties: {"color": ['Gray'], "resource": ['Press'],  } },
        { name: 'Aqueduct', rules: ['victory-point'], minPlayers: 3, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Stone'],  } },
        { name: 'Aqueduct', minPlayers: 7, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Stone'],  } },
        { name: 'Temple', rules: ['victory-point'], minPlayers: 3, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Wood','Clay','Glassworks'],  } },
        { name: 'Temple', rules: ['victory-point'], minPlayers: 6, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Wood','Clay','Glassworks'],  } },
        { name: 'Statue', rules: ['victory-point'], minPlayers: 3, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Wood','Ore'],  } },
        { name: 'Statue', rules: ['victory-point'], minPlayers: 7, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Wood','Ore'],  } },
        { name: 'Courthouse', rules: ['victory-point'], minPlayers: 3, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Clay','Loom'],  } },
        { name: 'Courthouse', rules: ['victory-point'], minPlayers: 5, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Clay','Loom'],  } },
        { name: 'Forum', rules: ['resource-multi'], minPlayers: 3, properties: {"color": ['Yellow'], "resource": ['Loom','Glassworks','Press'], "cost": ['Clay'],  } },
        { name: 'Forum', rules: ['resource-multi'], minPlayers: 6, properties: {"color": ['Yellow'], "resource": ['Loom','Glassworks','Press'], "cost": ['Clay'],  } },
        { name: 'Forum', rules: ['resource-multi'], minPlayers: 7, properties: {"color": ['Yellow'], "resource": ['Loom','Glassworks','Press'], "cost": ['Clay'],  } },
        { name: 'Caravansery', rules: ['resource-multi'], minPlayers: 3, properties: {"color": ['Yellow'], "resource": ['Clay','Stone','Wood','Ore'], "cost": ['Wood'],  } },
        { name: 'Caravansery', rules: ['resource-multi'], minPlayers: 5, properties: {"color": ['Yellow'], "resource": ['Clay','Stone','Wood','Ore'], "cost": ['Wood'],  } },
        { name: 'Caravansery', rules: ['resource-multi'], minPlayers: 6, properties: {"color": ['Yellow'], "resource": ['Clay','Stone','Wood','Ore'], "cost": ['Wood'],  } },
        { name: 'Vineyard', rules: ['color-gold'], minPlayers: 3, properties: {"color": ['Yellow'], "resource": ['Gold'], "depends on": ['Brown Cards','Neighbors','Self'],  } },
        { name: 'Vineyard', rules: ['color-gold'], minPlayers: 6, properties: {"color": ['Yellow"'], "resource": ['Gold'], "depends on": ['Brown Cards','Neighbors','Self'],  } },
        { name: 'Bazar', rules: ['color-gold'], minPlayers: 4, properties: {"color": ['Yellow'], "resource": ['Gold'], "depends on": ['Gray Cards','Neighbors','Self'],  } },
        { name: 'Bazar', rules: ['color-gold'], minPlayers: 7, properties: {"color": ['Yellow'], "resource": ['Gold'], "depends on": ['Gray Cards','Neighbors','Self'],  } },
        { name: 'Walls', rules: ['military'], minPlayers: 3, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Stone'],  } },
        { name: 'Walls', rules: ['military'], minPlayers: 7, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Stone'],  } },
        { name: 'Training Ground', rules: ['military'], minPlayers: 4, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Ore','Wood'],  } },
        { name: 'Training Ground', rules: ['military'], minPlayers: 6, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Ore','Wood'],  } },
        { name: 'Training Ground', rules: ['military'], minPlayers: 7, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Ore','Wood'],  } },
        { name: 'Stables', rules: ['military'], minPlayers: 3, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Ore','Clay','Wood'],  } },
        { name: 'Stables', rules: ['military'], minPlayers: 5, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Ore','Clay','Wood'],  } },
        { name: 'Archery Range', rules: ['military'], minPlayers: 3, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Ore','Wood'],  } },
        { name: 'Archery Range', rules: ['military'], minPlayers: 6, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Ore','Wood'],  } },
        { name: 'Dispensary', rules: ['science'], minPlayers: 3, properties: {"color": ['Green'], "resource": ['Compass'], "cost": ['Ore','Glassworks'],  } },
        { name: 'Dispensary', rules: ['science'], minPlayers: 4, properties: {"color": ['Green'], "resource": ['Compass'], "cost": ['Ore','Glassworks'],  } },
        { name: 'Laboratory', rules: ['science'], minPlayers: 3, properties: {"color": ['Green'], "resource": ['Gear'], "cost": ['Clay','Press'],  } },
        { name: 'Laboratory', rules: ['science'], minPlayers: 5, properties: {"color": ['Green'], "resource": ['Gear'], "cost": ['Clay','Press'],  } },
        { name: 'Library', rules: ['science'], minPlayers: 3, properties: {"color": ['Green'], "resource": ['Tablet'], "cost": ['Stone','Loom'],  } },
        { name: 'Library', rules: ['science'], minPlayers: 6, properties: {"color": ['Green'], "resource": ['Tablet'], "cost": ['Stone','Loom'],  } },
        { name: 'School', rules: ['science'], minPlayers: 3, properties: {"color": ['Green'], "resource": ['Tablet'], "cost": ['Wood','Press'],  } },
        { name: 'School', rules: ['science'], minPlayers: 7, properties: {"color": ['Green'], "resource": ['Tablet'], "cost": ['Wood','Press'],  } },
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
        { name: 'Pantheon', rules: ['victory-point'], minPlayers: 3, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Clay','Ore','Press','Loom','Glassworks'],  } },
        { name: 'Pantheon', rules: ['victory-point'], minPlayers: 6, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Clay','Ore','Press','Loom','Glassworks'],  } },
        { name: 'Gardens', rules: ['victory-point'], minPlayers: 3, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Clay','Wood'],  } },
        { name: 'Gardens', rules: ['victory-point'], minPlayers: 4, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Clay','Wood'],  } },
        { name: 'Town Hall', rules: ['victory-point'], minPlayers: 3, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Stone','Ore','Glassworks'],  } },
        { name: 'Town Hall', rules: ['victory-point'], minPlayers: 6, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Stone','Ore','Glassworks'],  } },
        { name: 'Palace', rules: ['victory-point'], minPlayers: 3, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Clay','Wood','Ore','Stone','Glassworks','Press','Loom'],  } },
        { name: 'Palace', rules: ['victory-point'], minPlayers: 7, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Clay','Wood','Ore','Stone','Glassworks','Press','Loom'],  } },
        { name: 'Senate', rules: ['victory-point'], minPlayers: 3, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Wood','Ore','Stone'],  } },
        { name: 'Senate', rules: ['victory-point'], minPlayers: 5, properties: {"color": ['Blue'], "resource": ['Victory Points'], "cost": ['Wood','Ore','Stone'],  } },
        { name: 'Haven', rules: ['color-gold-victory'], minPlayers: 3, properties: {"color": ['Yellow'], "resource": ['Gold','Victory Points'], "cost": ['Ore','Wood','Loom'], "depends on": ['Brown Cards','Self'],  } },
        { name: 'Haven', rules: ['color-gold-victory'], minPlayers: 4, properties: {"color": ['Yellow'], "resource": ['Gold','Victory Points'], "cost": ['Ore','Wood','Loom'], "depends on": ['Brown Cards','Self'],  } },
        { name: 'Lighthouse', rules: ['yellow-gold-victory'], minPlayers: 3, properties: {"color": ['Yellow'], "resource": ['Gold','Victory Points'], "cost": ['Stone','Glassworks'],  } },
        { name: 'Lighthouse', rules: ['yellow-gold-victory'], minPlayers: 6, properties: {"color": ['Yellow'], "resource": ['Gold','Victory Points'], "cost": ['Stone','Glassworks'],  } },
        { name: 'Chamber of Commerce', rules: ['color-gold-victory'], minPlayers: 4, properties: {"color": ['Yellow'], "resource": ['Gold','Victory Points'], "cost": ['Clay','Press'], "depends on": ['Gray Cards','Self'],  } },
        { name: 'Chamber of Commerce', rules: ['color-gold-victory'], minPlayers: 6, properties: {"color": ['Yellow'], "resource": ['Gold','Victory Points'], "cost": ['Clay','Press'], "depends on": ['Gray Cards','Self'],  } },
        { name: 'Ludus', rules: ['color-gold-victory'], minPlayers: 5, properties: {"color": ['Yellow'], "resource": ['Gold','Victory Points'], "cost": ['Stone','Ore'], "depends on": ['Wonder','Self'],  } },
        { name: 'Ludus', rules: ['color-gold-victory'], minPlayers: 7, properties: {"color": ['Yellow'], "resource": ['Gold','Victory Points'], "cost": ['Stone','Ore'], "depends on": ['Wonder','Self'],  } },
        { name: 'Arena', rules: ['wonder-gold-victory'], minPlayers: 3, properties: {"color": ['Yellow'], "resource": ['Gold','Victory Points'], "cost": ['Stone','Ore'], "depends on": ['Wonder','Self'],  } },
        { name: 'Arena', rules: ['wonder-gold-victory'], minPlayers: 5, properties: {"color": ['Yellow'], "resource": ['Gold','Victory Points'], "cost": ['Stone','Ore'], "depends on": ['Wonder','Self'],  } },
        { name: 'Fortifications', rules: ['military'], minPlayers: 3, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Stone','Ore'],  } },
        { name: 'Fortifications', rules: ['military'], minPlayers: 7, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Stone','Ore'],  } },
        { name: 'Circus', rules: ['military'], minPlayers: 4, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Stone','Ore'],  } },
        { name: 'Circus', rules: ['military'], minPlayers: 6, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Stone','Ore'],  } },
        { name: 'Arsenal', rules: ['military'], minPlayers: 3, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Ore','Wood','Loom'],  } },
        { name: 'Arsenal', rules: ['military'], minPlayers: 5, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Ore','Wood','Loom'],  } },
        { name: 'Siege Workshop', rules: ['military'], minPlayers: 3, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Wood','Clay'],  } },
        { name: 'Siege Workshop', rules: ['military'], minPlayers: 5, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Wood','Clay'],  } },
        { name: 'Castrum', rules: ['military'], minPlayers: 4, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Wood','Clay','Press'],  } },
        { name: 'Castrum', rules: ['military'], minPlayers: 7, properties: {"color": ['Red'], "resource": ['Military'], "cost": ['Wood','Clay','Press'],  } },
        { name: 'Lodge', rules: ['science'], minPlayers: 3, properties: {"color": ['Green'], "resource": ['Compass'], "cost": ['Clay','Loom','Press'],  } },
        { name: 'Lodge', rules: ['science'], minPlayers: 6, properties: {"color": ['Green'], "resource": ['Compass'], "cost": ['Clay','Loom','Press'],  } },
        { name: 'Observatory', rules: ['science'], minPlayers: 3, properties: {"color": ['Green'], "resource": ['Gear'], "cost": ['Ore','Glassworks','Loom'],  } },
        { name: 'Observatory', rules: ['science'], minPlayers: 7, properties: {"color": ['Green'], "resource": ['Gear'], "cost": ['Ore','Glassworks','Loom'],  } },
        { name: 'University', rules: ['science'], minPlayers: 3, properties: {"color": ['Green'], "resource": ['Tablet'], "cost": ['Wood','Press','Glassworks'],  } },
        { name: 'University', rules: ['science'], minPlayers: 4, properties: {"color": ['Green'], "resource": ['Tablet'], "cost": ['Wood','Press','Glassworks'],  } },
        { name: 'Academy', rules: ['science'], minPlayers: 3, properties: {"color": ['Green'], "resource": ['Compass'], "cost": ['Stone','Glassworks'],  } },
        { name: 'Academy', rules: ['science'], minPlayers: 7, properties: {"color": ['Green'], "resource": ['Compass'], "cost": ['Stone','Glassworks'],  } },
        { name: 'Study', rules: ['science'], minPlayers: 3, properties: {"color": ['Green'], "resource": ['Gear'], "cost": ['Wood','Press','Loom'],  } },
        { name: 'Study', rules: ['science'], minPlayers: 5, properties: {"color": ['Green'], "resource": ['Gear'], "cost": ['Wood','Press','Loom'],  } },
        { name: 'Workers Guild', rules: ['color-victory'], properties: {"color": ['Purple'], "resource": ['Victory Points'], "cost": ['Ore','Clay','Stone','Wood'], "depends on": ['Brown Cards','Neighbors'],  } },
        { name: 'Craftsmens Guild', rules: ['color-victory'], properties: {"color": ['Purple'], "resource": ['Victory Points'], "cost": ['Ore','Stone'], "depends on": ['Gray Cards','Neighbors'],  } },
        { name: 'Traders Guild', rules: ['color-victory'], properties: {"color": ['Purple'], "resource": ['Victory Points'], "cost": ['Loom','Glassworks','Press'], "depends on": ['Yellow Cards','Neighbors'],  } },
        { name: 'Philosophers Guild', rules: ['color-victory'], properties: {"color": ['Purple'], "resource": ['Victory Points'], "cost": ['Clay','Loom','Press'], "depends on": ['Green Cards','Neighbors'],  } },
        { name: 'Spies Guild', rules: ['color-victory'], properties: {"color": ['Purple'], "resource": ['Victory Points'], "cost": ['Clay','Glassworks'], "depends on": ['Red Cards','Neighbors'],  } },
        { name: 'Decorators Guild', rules: ['wonder-complete-victory'], properties: {"color": ['Purple'], "resource": ['Victory Points'], "cost": ['Ore','Stone','Loom'], "depends on": ['Wonder','Self'],  } },
        { name: 'Shipowners Guild', rules: ['color-victory-multi'], properties: {"color": ['Purple'], "resource": ['Victory Points'], "cost": ['Wood','Press','Glassworks'], "depends on": ['Brown Cards','Gray Cards','Purple Cards','Self'],  } },
        { name: 'Scientists Guild', rules: ['science-multi'], properties: {"color": ['Purple'], "resource": ['Compass','Gear','Tablet'], "cost": ['Wood','Ore','Press'],  } },
        { name: 'Magistrates Guild', rules: ['color-victory'], properties: {"color": ['Purple'], "resource": ['Victory Points'], "cost": ['Wood','Stone','Loom'], "depends on": ['Blue Cards','Neighbors'],  } },
        { name: 'Builders Guild', rules: ['wonder-victory'], properties: {"color": ['Purple'], "resource": ['Victory Points'], "cost": ['Stone','Clay','Glassworks'], "depends on": ['Wonder','Neighbors','Self'],  } },
      ],
    },
    // ************************************************************************************************************************************************
    // Cities 
    // ************************************************************************************************************************************************
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
        { name: 'Opium Stash', expansionId: 1, rules: ['gold', 'debt'], properties: {"color": ['Black'], "resource": ['Gold', "Debt"],  } },
        { name: 'Smuggler\'s Cache', expansionId: 1, rules: ['discount-starting'], properties: {"color": ['Black'], "resource": ['Discount Starting Resource'],  } },
        { name: 'West Clandestine Wharf', expansionId: 1, rules: ['discount'], properties: {"color": ['Black'], "resource": ['Discount'], "cost": ['Gold'],  } },
        { name: 'East Clandestine Wharf', expansionId: 1, rules: ['discount'], properties: {"color": ['Black'], "resource": ['Discount'], "cost": ['Gold'],  } },
        { name: 'Dive', expansionId: 1, rules: ['gold-neighbors'], properties: {"color": ['Black'], "resource": ['Gold'] } },
        { name: 'Cells', expansionId: 1, rules: ['military-victory'], properties: {"color": ['Black'], "resource": ['Victory Points'], "depends on": ['Military Victory'], } },
        { name: 'Customs', expansionId: 1, rules: ['gold-others', 'victory-point'], properties: {"color": ['Black'], "resource": ['Victory Points'] } },
        { name: 'Pigeonhole', expansionId: 1, rules: ['spy-science'], properties: {"color": ['Black'], "resource": ['Science'], "cost": ['Gold','Ore'], "depends on": ['Green Cards','Neighbors'],  } },
        { name: 'Raider Camp', expansionId: 1, rules: ['military-token'], properties: {"color": ['Black'], "resource": ['Military Victory'],  } },
        { name: 'Secret Warehouse', expansionId: 1, rules: ['resource-extra'], properties: {"color": ['Black'], "resource": ['Clay','Stone','Wood','Ore','Loom','Glassworks','Press'], "cost": ['Gold'],  } },
        { name: 'City Gates', expansionId: 1, rules: ['victory-point'], properties: {"color": ['Black'], "resource": ['Victory Points'], "cost": ['Gold','Wood'],  } },
        { name: 'Militia', expansionId: 1, rules: ['military'], properties: {"color": ['Black'], "resource": ['Military'], "cost": ['Gold'],  } },
        { name: 'Hideout', expansionId: 1, rules: ['debt', 'victory-point'], properties: {"color": ['Black'], "resource": ['Victory Points', 'Debt'],  } },
        { name: 'Residence', expansionId: 1, rules: ['victory-point', 'diplomacy'], properties: {"color": ['Black'], "resource": ['Victory Points', 'Diplomacy'], "cost": ['Clay',],  } },
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
        { name: 'Guardhouse', expansionId: 1, rules: ['military-victory'], properties: {"color": ['Black'], "resource": ['Victory Points'], "cost": ['Gold','Wood','Ore'], "depends on": ['Military Victory','Self'],  } },
        { name: 'Trade Center', expansionId: 1, rules: ['victory-point', 'gold-others'], properties: {"color": ['Black'], "resource": ['Victory Points'], "cost": ['Stone','Clay','Press']  } },
        { name: 'Tabularium', expansionId: 1, rules: ['victory-point'], properties: {"color": ['Black'], "resource": ['Victory Points'], "cost": ['Gold','Wood','Ore','Loom']  } },
        { name: 'Black Market', expansionId: 1, rules: ['resource-free'], properties: {"color": ['Black'], "resource": ['Clay','Stone','Wood','Ore','Loom','Glassworks','Press'], "cost": ['Ore','Loom']  } },
        { name: 'Band of Spies', expansionId: 1, rules: ['spy-science'], properties: {"color": ['Black'], "resource": ['Science'], "cost": ['Gold','Stone','Clay'], "depends on": ['Green Cards','Neighbors'],  } },
        { name: 'Lair', expansionId: 1, rules: ['debt','victory-point'], properties: {"color": ['Black'], "resource": ['Victory Points'], "cost": ['Wood','Glass'], } },
        { name: 'Raider Fort', expansionId: 1, rules: ['military-token'], properties: {"color": ['Black'], "resource": ['Military Victory'], "cost": ['Gold','Ore','Clay'], } },
        { name: 'Mercenaries', expansionId: 1, rules: ['military'], properties: {"color": ['Black'], "resource": ['Military'], "cost": ['Gold','Press'], } },
        { name: 'Architect Firm', expansionId: 1, rules: ['free-wonder', 'victory-point'], properties: {"color": ['Black'], "resource": ['Victory Points'], "cost": ['Gold','Press'], } },
        { name: 'Sepulcher', expansionId: 1, rules: ['military-debt', 'victory-point'], properties: {"color": ['Black'], "resource": ['Victory Points'], "cost": ['Stone','Loom','Glass'], } },
        { name: 'Forging Agency', expansionId: 1, rules: ['free-discard'], properties: {"color": ['Black'], "resource": ['Free Card'], "cost": ['Gold'], } },
        { name: 'Opium Den', expansionId: 1, rules: ['gold','debt'], properties: {"color": ['Black'], "resource": ['Gold'], "cost": ['Press'], } },
        { name: 'Consulate', expansionId: 1, rules: ['victory-point', 'diplomacy'], properties: {"color": ['Black'], "resource": ['Victory Points', 'Diplomacy'], "cost": ['Clay','Press'], } },
        { name: 'Gambling Den', expansionId: 1, rules: ['gold-neighbors'], properties: {"color": ['Black'], "resource": ['Gold'], "cost": ['Gold'], } },
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
        { name: 'Mint', expansionId: 1, rules: ['victory-point','gold-others'], properties: {"color": ['Black'], "resource": ['Victory Points'], "cost": ['Wood','Clay','Glassworks','Loom'],  } },
        { name: 'Slave Market', expansionId: 1, rules: ['military-gold-victory'], properties: {"color": ['Black'], "resource": ['Gold','Victory Points'], "cost": ['Wood','Ore'], "depends on": ['Military Victory','Self'],  } },
        { name: 'Raider Garrison', expansionId: 1, rules: ['military-token'], properties: {"color": ['Black'], "resource": ['Military Victory','Debt'], "cost": ['Gold','Stone','Loom'],  } },
        { name: 'Cenotaph', expansionId: 1, rules: ['victory-point','military-debt'], properties: {"color": ['Black'], "resource": ['Victory Points','Debt'], "cost": ['Clay','Stone','Glassworks','Loom'], "depends on": ['Military Victory','Others'],  } },
        { name: 'Capitol', expansionId: 1, rules: ['victory-point'], properties: {"color": ['Black'], "resource": ['Victory Points'], "cost": ['Gold','Stone','Clay','Glassworks','Press'],  } },
        { name: 'Memorial', expansionId: 1, rules: ['military-loss'], properties: {"color": ['Black'], "resource": ['Gold'], "cost": ['Stone','Wood','Loom'], "depends on": ['Military Loss'],  } },
        { name: 'Secret Network', expansionId: 1, rules: ['black-gold-victory'], properties: {"color": ['Black'], "resource": ['Gold','Victory Points'], "cost": ['Stone','Press'], "depends on": ['Black Cards','Self'],  } },
        { name: 'Prison', expansionId: 1, rules: ['military-victory'], properties: {"color": ['Black'], "resource": ['Victory Points'], "cost": ['Gold','Ore','Clay','Press'], "depends on": ['Military Victory','Self'],  } },
        { name: 'Opium Distillery', expansionId: 1, rules: ['gold','debt'], properties: {"color": ['Black'], "resource": ['Gold','Debt'], "cost": ['Wood','Glassworks'],  } },
        { name: 'Brotherhood', expansionId: 1, rules: ['debt','victory-point'], properties: {"color": ['Black'], "resource": ['Debt','Victory Points'], "cost": ['Wood','Ore','Loom'],  } },
        { name: 'Chamber of Builders', expansionId: 1, rules: ['victory-point','wonder-debt'], properties: {"color": ['Black'], "resource": ['Debt','Victory Points'], "cost": ['Wood','Clay','Glassworks','Press'], "depends on": ['Wonder','Self'],  } },
        { name: 'Torture Chamber', expansionId: 1, rules: ['spy-science'], properties: {"color": ['Black'], "resource": ['Science'], "cost": ['Gold','Ore','Glassworks'], "depends on": ['Green Cards','Neighbors'],  } },
        { name: 'Contingent', expansionId: 1, rules: ['military'], properties: {"color": ['Black'], "resource": ['Military'], "cost": ['Gold','Loom'],  } },
        { name: 'Embassy', expansionId: 1, rules: ['diplomacy','victory-point'], properties: {"color": ['Black'], "resource": ['Diplomacy','Victory Points'], "cost": ['Stone','Press','Loom'],  } },
      ],
    },
    // ************************************************************************************************************************************************
    // Leaders
    // ************************************************************************************************************************************************
    {
      id: 3,
      name: 'Leaders',
      expansionId: 2,
      pickMin: 1,
      pickMax: 4,
      pick: 4,
      cards: [
        { name: 'Aristotle', expansionId: 2, rules: ['science-sets'], properties: {"resource": ['Victory Points'], "gold": ['3'], "depends on": ['Science','Self'],  } },
        { name: 'Enheduanna', expansionId: 2, rules: ['science-most'], properties: {"resource": ['Science'], "gold": ['4'], "depends on": ['Science','Self'], "expert": ['Yes'],  } },
        { name: 'Nefertiti', expansionId: 2, rules: ['victory-point'], properties: {"resource": ['Victory Points'], "gold": ['3'],  } },
        { name: 'Cornelia', expansionId: 2, rules: ['more-cards'], properties: {"resource": ['Victory Points'], "gold": ['A'], "depends on": ['Yellow Cards','Neighbors'], "expert": ['Yes'],  } },
        { name: 'Hatshepsut', expansionId: 2, rules: ['cash-back'], properties: {"resource": ['Gold'], "gold": ['2'], "depends on": ['Neighbors'], "expert": ['Yes'],  } },   
        { name: 'Justinian', expansionId: 2, rules: ['color-sets'], properties: {"resource": ['Victory Points'], "gold": ['3'], "depends on": ['Blue Cards','Red Cards','Green Cards','Self'],  } },
        { name: 'Archimedes', expansionId: 2, rules: ['color-discount'], properties: {"resource": ['Discount'], "gold": ['4'], "depends on": ['Green Cards','Self'],  } },    
        { name: 'Zenobia', expansionId: 2, rules: ['victory-point'], properties: {"resource": ['Victory Points'], "gold": ['2'],  } },
        { name: 'Amytis', expansionId: 2, rules: ['amytis'], properties: {"resource": ['Victory Points'], "gold": ['4'], "depends on": ['Wonder','Self'],  } },
        { name: 'Nero', expansionId: 2, rules: ['nero'], properties: {"resource": ['Gold'], "gold": ['1'], "depends on": ['Military Victory','Self'],  } },
        { name: 'Hiram', expansionId: 2, rules: ['color-victory-self'], properties: {"resource": ['Victory Points'], "gold": ['3'], "depends on": ['Purple Cards','Self'],  } },
        { name: 'Pythagoras', expansionId: 2, rules: ['science'], properties: {"resource": ['Science'], "gold": ['5'],  } },
        { name: 'Darius', expansionId: 2, rules: ['black-victory'], properties: {"resource": ['Victory Points'], "gold": ['4'], "depends on": ['Black Cards','Self'], "cities": ['Yes'],  } },
        { name: 'Cleopatra', expansionId: 2, rules: ['victory-point'], properties: {"resource": ['Victory Points'], "gold": ['4'], "depends on": ['Green Cards','Neighbors'],  } },
        { name: 'Theano', expansionId: 2, rules: ['more-cards'], properties: {"resource": ['Victory Points'], "gold": ['A'], "expert": ['Yes'],  } },
        { name: 'Hypatia', expansionId: 2, rules: ['color-victory-self'], properties: {"resource": ['Victory Points'], "gold": ['4'], "depends on": ['Green Cards','Self'],  } },
        { name: 'Tomyris', expansionId: 2, rules: ['tomyris'], properties: {"resource": ['Military Loss'], "gold": ['4'], "depends on": ['Military Loss','Self'], "expert": ['Yes'],  } },
        { name: 'Bilkis', expansionId: 2, rules: ['bilkis'], properties: {"resource": ['Stone','Wood','Glassworks','Press','Loom','Clay','Ore'], "gold": ['4'],  } },
        { name: 'Praxiteles', expansionId: 2, rules: ['color-victory-self'], properties: {"resource": ['Victory Points'], "gold": ['3'], "depends on": ['Grey Cards','Self'],  } },
        { name: 'Solomon', expansionId: 2, rules: ['free-discard'], properties: {"resource": ['Free Card'], "gold": ['3'],  } },
        { name: 'Midas', expansionId: 2, rules: ['gold-victory'], properties: {"resource": ['Victory Points'], "gold": ['3'], "depends on": ['Gold','Self'],  } },
        { name: 'Vitruvius', expansionId: 2, rules: ['gold-chain'], properties: {"resource": ['Gold'], "gold": ['1'],  } },
        { name: 'Croesus', expansionId: 2, rules: ['gold'], properties: {"resource": ['Gold'], "gold": ['1'],  } },
        { name: 'Arsinoe', expansionId: 2, rules: ['gold','debt'], properties: {"resource": ['Gold','Debt'], "gold": ['A'], "cities": ['Yes'],  } },
        { name: 'Cynisca', expansionId: 2, rules: ['cynisca'], properties: {"resource": ['Victory Points'], "gold": ['A'], "depends on": ['Military Loss','Self'], "expert": ['Yes'],  } },
        { name: 'Caligula', expansionId: 2, rules: ['caligula'], properties: {"resource": ['Free Card'], "gold": ['3'], "cities": ['Yes'],  } },
        { name: 'Phidias', expansionId: 2, rules: ['color-victory-self'], properties: {"resource": ['Victory Points'], "gold": ['3'], "depends on": ['Brown Cards','Self'],  } },
        { name: 'Hammurabi', expansionId: 2, rules: ['color-discount'], properties: {"resource": ['Discount'], "gold": ['2'], "depends on": ['Blue Cards','Self'],  } },      
        { name: 'Ptolemy', expansionId: 2, rules: ['science'], properties: {"resource": ['Science'], "gold": ['5'],  } },
        { name: 'Imhotep', expansionId: 2, rules: ['wonder-discount'], properties: {"resource": ['Discount'], "gold": ['3'], "depends on": ['Wonder','Self'],  } },
        { name: 'Gorgo', expansionId: 2, rules: ['gorgo'], properties: {"resource": ['Victory Points'], "gold": ['5'], "depends on": ['Military Victory','Self'], "expert": ['Yes'],  } },
        { name: 'Alexander', expansionId: 2, rules: ['alexander'], properties: {"resource": ['Victory Points'], "gold": ['3'], "depends on": ['Military Victory','Self'],  } },
        { name: 'Nitocris', expansionId: 2, rules: ['nitocris'], properties: {"resource": ['Military Victory'], "gold": ['A'], "expert": ['Yes'],  } },
        { name: 'Phryne', expansionId: 2, rules: ['more-cards'], properties: {"resource": ['Victory Points'], "gold": ['A'], "depends on": ['Blue Cards','Neighbors'], "expert": ['Yes'],  } },
        { name: 'Pericles', expansionId: 2, rules: ['color-victory-self'], properties: {"resource": ['Victory Points'], "gold": ['6'], "depends on": ['Red Cards','Self'],  } },
        { name: 'Octavia', expansionId: 2, rules: ['octavia'], properties: {"resource": ['Gold','Debt'], "gold": ['1'], "depends on": ['Wonder','Self'], "cities": ['Yes'],  } },
        { name: 'Leonidas', expansionId: 2, rules: ['color-discount'], properties: {"resource": ['Discount'], "gold": ['2'], "depends on": ['Red Cards','Self'],  } },        
        { name: 'Diocletian', expansionId: 2, rules: ['diocletian'], properties: {"resource": ['Gold'], "gold": ['2'], "depends on": ['Black Cards','Self'], "cities": ['Yes'],  } },
        { name: 'Aspasia', expansionId: 2, rules: ['victory-point','diplomacy'], properties: {"resource": ['Diplomacy','Victory Points'], "gold": ['3'], "cities": ['Yes'],  } },
        { name: 'Makeda', expansionId: 2, rules: ['more-gold'], properties: {"resource": ['Victory Points'], "gold": ['A'], "depends on": ['Gold','Neighbors'], "expert": ['Yes'],  } },
        { name: 'Agrippina', expansionId: 2, rules: ['only-leader'], properties: {"resource": ['Victory Points'], "gold": ['1'], "depends on": ['Leaders','Self'], "expert": ['Yes'],  } },
        { name: 'Aganice', expansionId: 2, rules: ['aganice'], properties: {"resource": ['Science'], "gold": ['A'], "depends on": ['Science','Self'], "expert": ['Yes'],  } },
        { name: 'Berenice', expansionId: 2, rules: ['berenice'], properties: {"resource": ['Gold'], "gold": ['2'], "depends on": ['Gold','Self'], "expert": ['Yes'],  } },    
        { name: 'Telesilla', expansionId: 2, rules: ['telesilla'], properties: {"resource": ['Military Loss'], "gold": ['3'], "expert": ['Yes'],  } },
        { name: 'Xenophon', expansionId: 2, rules: ['xenophon'], properties: {"resource": ['Gold'], "gold": ['2'], "depends on": ['Yellow Cards','Self'],  } },
        { name: 'Plato', expansionId: 2, rules: ['color-sets'], properties: {"resource": ['Victory Points'], "gold": ['4'], "depends on": ['Brown Cards','Grey Cards','Blue Cards','Yellow Cards','Red Cards','Green Cards','Purple Cards','Self'],  } },
        { name: 'Ceasar', expansionId: 2, rules: ['military'], properties: {"resource": ['Military'], "gold": ['5'],  } },
        { name: 'Maecenas', expansionId: 2, rules: ['free-leader'], properties: {"resource": ['Free Card'], "gold": ['1'], "depends on": ['Leaders'],  } },
        { name: 'Varro', expansionId: 2, rules: ['color-victory-self'], properties: {"resource": ['Victory Points'], "gold": ['3'], "depends on": ['Yellow Cards','Self'],  } },
        { name: 'Hannibal', expansionId: 2, rules: ['military'], properties: {"resource": ['Military'], "gold": ['2'],  } },
        { name: 'Eurypyle', expansionId: 2, rules: ['more-cards'], properties: {"resource": ['Victory Points'], "gold": ['A'], "depends on": ['Red Cards','Neighbors'],  } }, 
        { name: 'Euclid', expansionId: 2, rules: ['science'], properties: {"resource": ['Science'], "gold": ['5'],  } },
        { name: 'Nebuchadnezzar', expansionId: 2, rules: ['color-victory-self'], properties: {"resource": ['Victory Points'], "gold": ['4'], "depends on": ['Blue Cards','Self'],  } },
        { name: 'Sappho', expansionId: 2, rules: ['victory-point'], properties: {"resource": ['Victory Points'], "gold": ['1'],  } },
        { name: 'Ramses', expansionId: 2, rules: ['free-purple'], properties: {"resource": ['Free Card'], "gold": ['5'], "depends on": ['Purple Cards'],  } },
      ],
    },

    // ************************************************************************************************************************************************
    // Armada
    // ************************************************************************************************************************************************
    {
      id: 1,
      name: 'Armada Age I',
      expansionId: 3,
      pickMin: 1,
      pickMax: 9,
      pick: 9,
      totalCardsAdjust: (playerCount: number) => {
        return playerCount - 8;
      },
      totalValidCards: (playerCount: number, validCards: Card[]) => {
        const totalCount = CardsCount(validCards);
        const armada = CardsCount(
          validCards.filter((x) => x.expansionId === 3)
        );
        if (armada === 0) {
          return [totalCount, totalCount];
        } else if (armada > playerCount) {
          return [totalCount + playerCount - 8, totalCount + playerCount - 8];
        } else {
          return [Math.max(0, totalCount + playerCount - 8), totalCount];
        }
      },
      cardProbabilityFunc: (playerCount: number, card: Card) => {
        if(card.expansionId === 3) {
          return nChooseK(7, playerCount) / nChooseK(8, playerCount);
        } else {
          return 0;
        }
      },
      cards: [
        { name: 'Eastern Emporium', expansionId: 3, rules: ['discount-once'], properties: {"color": ['Yellow'], "resource": ['Discount'], "cost": ['Loom'],  } },
        { name: 'Costal Defenses', expansionId: 3, rules: ['naval'], properties: {"color": ['Red'], "resource": ['Naval Power'], "cost": ['Glassworks'],  } },
        { name: 'Construction Zone', expansionId: 3, rules: ['fleet-move'], properties: {"color": ['Blue'], "resource": ['Fleet'],  } },
        { name: 'Pirate Hideout', expansionId: 3, rules: ['gold','commercial-debt'], properties: {"color": ['Yellow'], "resource": ['Gold','Tax'],  } },
        { name: 'Cabinet of Explorers', expansionId: 3, rules: ['science-most'], properties: {"color": ['Green'], "resource": ['Science'], "cost": ['Clay'],  } },
        { name: 'Helmsman\'s Rest', expansionId: 3, rules: ['island-card'], properties: {"color": ['Green'], "resource": ['Island Card'], "cost": ['Stone'],  } },
        { name: 'Dry Hold', expansionId: 3, rules: ['fleet-move'], properties: {"color": ['Blue'], "resource": ['Fleet'],  } },
        { name: 'Pontoon', expansionId: 3, rules: ['military','boarding'], properties: {"color": ['Red'], "resource": ['Military','Boarding'], "cost": ['Press'],  } },
      ],
    },
    {
      id: 2,
      name: 'Armada Age II',
      expansionId: 3,
      pickMin: 1,
      pickMax: 9,
      pick: 9,
      totalCardsAdjust: (playerCount: number) => {
        return playerCount - 8;
      },
      totalValidCards: (playerCount: number, validCards: Card[]) => {
        const totalCount = CardsCount(validCards);
        const armada = CardsCount(
          validCards.filter((x) => x.expansionId === 3)
        );
        if (armada === 0) {
          return [totalCount, totalCount];
        } else if (armada > playerCount) {
          return [totalCount + playerCount - 8, totalCount + playerCount - 8];
        } else {
          return [Math.max(0, totalCount + playerCount - 8), totalCount];
        }
      },
      cardProbabilityFunc: (playerCount: number, card: Card) => {
        if(card.expansionId === 3) {
          return nChooseK(7, playerCount) / nChooseK(8, playerCount);
        } else {
          return 0;
        }
      },
      cards: [
        { name: 'Pirate\'s Den', expansionId: 3, rules: ['gold','commercial-debt'], properties: {"color": ['Yellow'], "resource": ['Gold','Tax'],  } },
        { name: 'Wester Emporium', expansionId: 3, rules: ['discount-twice'], properties: {"color": ['Yellow'], "resource": ['Discount'], "cost": ['Ore','Press'],  } },
        { name: 'Ballista', expansionId: 3, rules: ['military','boarding'], properties: {"color": ['Red'], "resource": ['Military','Boading'], "cost": ['Clay','Glassworks','Loom'],  } },
        { name: 'Cartagraphers Office', expansionId: 3, rules: ['island-card'], properties: {"color": ['Green'], "resource": ['Island Card'], "cost": ['Wood','Clay'],  } },
        { name: 'Boathouse', expansionId: 3, rules: ['fleet-move','victory-point'], properties: {"color": ['Blue'], "resource": ['Fleet','Victory Points'], "cost": ['Wood','Loom'],  } },
        { name: 'Ship Repair', expansionId: 3, rules: ['fleet-move','victory-point'], properties: {"color": ['Blue'], "resource": ['Fleet','Victory Points'], "cost": ['Ore','Glassworks'],  } },
        { name: 'Navigation Firm', expansionId: 3, rules: ['science-most'], properties: {"color": ['Green'], "resource": ['Science'], "cost": ['Stone','Ore','Glassworks'],  } },
        { name: 'Fortified Port', expansionId: 3, rules: ['naval'], properties: {"color": ['Red'], "resource": ['Naval Power'], "cost": ['Clay','Press'],  } },
      ],
    },
    {
      id: 3,
      name: 'Armada Age III',
      expansionId: 3,
      pickMin: 1,
      pickMax: 9,
      pick: 9,
      totalCardsAdjust: (playerCount: number) => {
        return playerCount - 8;
      },
      totalValidCards: (playerCount: number, validCards: Card[]) => {
        const totalCount = CardsCount(validCards);
        const armada = CardsCount(
          validCards.filter((x) => x.expansionId === 3)
        );
        if (armada === 0) {
          return [totalCount, totalCount];
        } else if (armada > playerCount) {
          return [totalCount + playerCount - 8, totalCount + playerCount - 8];
        } else {
          return [Math.max(0, totalCount + playerCount - 8), totalCount];
        }
      },
      cardProbabilityFunc: (playerCount: number, card: Card) => {
        if(card.expansionId === 3) {
          return nChooseK(7, playerCount) / nChooseK(8, playerCount);
        } else {
          return 0;
        }
      },
      cards: [
        { name: 'Port Customs', expansionId: 3, rules: ['commercial-victory'], properties: {"color": ['Yellow'], "resource": ['Victory Points'], "cost": ['Ore','Stone','Clay'],  } },
        { name: 'Circle of Captains', expansionId: 3, rules: ['science-most'], properties: {"color": ['Green'], "resource": ['Science'], "cost": ['Clay','Stone','Ore','Loom'],  } },
        { name: 'Pirate Crew', expansionId: 3, rules: ['victory-point','commercial-debt'], properties: {"color": ['Yellow'], "resource": ['Victory Points'], "cost": ['Wood','Glassworks'],  } },
        { name: 'Nautical Archives', expansionId: 3, rules: ['island-card'], properties: {"color": ['Green'], "resource": ['Island Card'], "cost": ['Ore','Wood','Press'],  } },
        { name: 'Harbor Master\'s Office', expansionId: 3, rules: ['fleet-move','victory-point'], properties: {"color": ['Blue'], "resource": ['Fleet','Victory Points'], "cost": ['Wood','Stone','Ore','Loom'],  } },
        { name: 'Coastal Fortifications', expansionId: 3, rules: ['naval'], properties: {"color": ['Red'], "resource": ['Naval Power'], "cost": ['Stone','Clay','Glassworks'],  } },
        { name: 'Pier', expansionId: 3, rules: ['military','boarding'], properties: {"color": ['Red'], "resource": ['Military','Boarding'], "cost": ['Wood','Press','Loom'],  } },
        { name: 'Naval Headquarters', expansionId: 3, rules: ['fleet-move','victory-point'], properties: {"color": ['Blue'], "resource": ['Fleet','Victory Points'], "cost": ['Stone','Wood','Clay','Press'],  } },
      ],
    },
  ],
  rules: {
    "resource": "Once this symbol enters play, <b>once per turn</b>, produce the indicated resource for each resource symbol in your City.",
    "resource-multi": "Once this symbol enters play, <b>once per turn</b>, produce your choice of one of the indicated resource for each resources.",
    "victory-point": "At the end of the game, gain the number of indicated victory points.",
    "military": "Once this symbol enters play, increase your military strength by the number of indicated military symbols",
    "science": "At the end of the game, gain the indicated science symbol and add it to your collection of Green cards.",
    "science-multi": "At the end of the game, gain your choice of 1 science symbol and add it to your collection of Green cards.",
    "gold": "Once this symbol enters play, immediately take the number of Coins indicated (from the reserve) and add them to your Treasure",
    "trade-common": "Once this symbol enters play, you can buy common resources (Wood, Stone, Ore, and Clay) from your neighbor (on the left or right according to the arrow) for 1 Coin instead of 2",
    "trade-rare": "Once this symbol enters play, you can buy rare resources (Glass, Cloth, and Papyrus) from your neighbors for 1 Coin instead of 2",
    "color-gold": "Once this symbol enters play, immediately take the number of indicated Coins (from the reserve) for each card of this color in your <b><u>and</u></b> your neighbors’ Cities. Cards of this color that your neighbors constructed that same turn are counted too.",
    "color-victory": "At the end of the game, gain the number of indicated victory points for each card of this color in your neighbors’ Cities",
    "color-victory-multi": "At the end of the game, gain 1 victory point for each Brown, Grey, and Purple card (including this one) in your City.",
    "color-gold-victory": "<b>Once this symbol enters play</b>, immediately take the number of indicated Coins (from the reserve) for each card of this color in your City. Additionally, <b>at the end of the game</b>, gain the number of victory points indicated for each card of this color in your City.",
    "yellow-gold-victory": "<b>Once this symbol enters play</b>, immediately take 1 Coin (from the reserve) for each Yellow card in your City (including this one). Additionally, <b>at the end of the game</b>, gain 1 victory point for each Yellow card in your City",
    "wonder-gold-victory": "<b>Once this symbol enters play</b>, immediately take 3 Coins (from the reserve) for each Wonder stage you have constructed. Additionally, <b>at the end of the game</b>, gain 1 victory point for each stage of your Wonder you have constructed.",
    "wonder-victory": "At the end of the game, gain 1 victory point for each Wonder stage constructed in your <b><u>and</u></b> your neighbors’ Cities",
    "wonder-complete-victory": "At the end of the game, gain 7 victory points <b><u>only</u></b> if <b>all</b> stages of your Wonder are constructed.",
    "free-last-card": "Once this symbol enters play, you can play the <b>card that is normally discarded at the end of each Age</b>, following the normal rules. This card is considered a new turn and is played <b><u>after</u></b> all other players have played their last card",
    "free-discard": "At the end of the turn when this symbol enters play, take all the Age cards in the discard. Choose 1 and construct it for free. <b><u>Clarification:</u></b> If there are conflicts, resolve Halicarnassus, Solomon (Leader), then the Forging Agency.",
    "free-color": "Once this symbol enters play, you can <b>construct the <u>first</u> card in <u>each color</u> for free.</b>",
    "free-first-age": "Once this symbol enters play, you can <b>construct the <u>first</u> card</b> in each Age <b>for free.</b>",
    "free-last-age": "Once this symbol enters play, you can <b>construct the <u>last</u> card</b> in each Age <b>for free.</b>",


    "diplomacy": "When this symbol enters play, immediately take a Diplomacy token (from the reserve) and place it on your Wonder board.",
    "military-loss": "When this symbol enters play, immediately gain 2 Coins (from the reserve) for each Military Defeat token you have. Then discard <b>all</b> your Military Defeat tokens.",
    "gold-neighbors": "When this symbol enters play, immediately gain the number of Coins (from the reserve) shown in the center. <b>Your neighbors</b> each immediately gain the number of Coins shown to the left and right respectively.",
    "military-token": "When this symbol enters play, immediately gain the Military Victory token worth the shown amount. <b>Your neighbors</b> each immediately take a Debt worth -1.",
    "military-debt": "When this symbol enters play, all players <b>except you</b> lose 1 Coin for each Military Victory token they have (regardless of value). Coins are put back in the reserve.",
    "wonder-debt": "When this symbol enters play, all players <b>except you</b> lose 1 Coin for each Wonder stage they have constructed. Coins are put back in the reserve.",
    "debt": "When this symbol enters play, all players <b>except you</b> lose the number of Coins shown. Coins are put back in the reserve.",
    "gold-others": "When this symbol enters play, all players <b>except you</b> immediately gain the number of Coins shown (from the reserve).",
    "black-gold-victory": "<b>When this symbol enters play</b>, immediately gain 1 Coin (from the reserve) for each Black card you have in your City. <br/>Additionally, <b>at the end of the game</b>, gain 1 victory point for each Black card you have in your City.",
    "military-gold-victory": "<b>When this symbol enters play</b>, immediately gain 1 Coin (from the reserve) for each Military Victory token (regardless of value) that you have in your City. <br/>Additionally, <b>at the end of the game</b>, gain 1 victory point for each Military Victory token (regardless of value) that you have in your City.",
    "free-wonder": "Once this symbol enters play, you no longer pay resources to construct the stages of your Wonder. You must still pay any Coin costs shown.",
    "discount": "Once this symbol enters play, <b>once per turn</b>, pay 1 Coin less for a resource you buy from the neighbor on your right or left (according to the arrow).<br/><b><u>Clarification:</u></b> This discount stacks with the Marketplace and Trading Posts (East/West): the first resource you buy can therefore be free.",
    "discount-starting": "Once this symbol enters play, pay 1 Coin less each time you buy the <b>starting resource</b> (Brown or Grey) from your neighbors’ Wonder boards.",
    "resource-extra": "Once this symbol enters play, <b>once per turn</b>, produce one extra resource (of your choice) among those you <b><u>already produce</u></b> with your Brown cards, Grey cards, or starting resource on your Wonder.<br/><b><u>Clarification:</u></b> Resources produced by Yellow, Black, and Leaders cards do not apply.",
    "resource-free": "Once this symbol enters play, <b>once per turn</b>, produce one resource (of your choice) that you <b><u>do not produce</u></b> with your Brown cards, Grey cards, or starting resource on your Wonder.<br/><b><u>Clarification:</u></b> Resources produced by Yellow, Black, and Leader cards do not apply.",
    "military-victory": "At the end of the game, gain the number of victory points shown for each Military Victory token of this value.",
    "spy-science": "At the end of the game, gain 1 science symbol that is shown on a Green card in one of your neighbors’ Cities. <br/><b><u>Clarification:</u></b> You can accumulate and apply multiple of these symbols. However, you can only gain the science symbol from a single card once per neighbor.",

    "science-sets": "At the end of the game, gain 3 extra victory points for each complete set of 3 different science symbols you have in your City.",
    "science-most": "At the end of the game, gain 1 extra science symbol: whichever one you have the <b>most</b> of. <b>In case of tie</b> between multiple science symbols, choose one of the tied symbols.",
    "more-cards": "At the end of the game, gain 5 victory points <b>only</b> if you have more cards of this color in your City than each of your neighbors, counted separately.",
    "cash-back": "Once this symbol enters play, <b>once per turn and per neighbor</b>, gain 1 Coin (from the reserve) <b><u>after</u></b> buying a resource from them.",
    "free-purple": "Once this symbol enters play, you may construct all Purple cards for free.",
    "color-sets": "At the end of the game, gain the number of victory points indicated for each complete set of Age cards in these colors in your City.",
    "color-discount": "Once this symbol enters play, pay 1 fewer resource (your choice) to construct cards of this color.",
    "amytis": "At the end of the game, gain 2 victory points for each Wonder stage constructed in your City.",
    "nero": "Once this symbol enters play, each time you gain a Military Victory token, immediately gain 2 Coins (from the reserve).",
    "color-victory-self": "At the end of the game, gain the number of victory points indicated for each card of this color in your City.",
    "black-victory": "At the end of the game, gain 1 victory point for each Black card in your City.",
    "tomyris": "Once this symbol enters play, each time you take a Military Defeat token during the Resolution of Military Conflicts, give this token to your winning neighbor.",
    "bilkis": "Once this symbol enters play, <b>once per turn</b>, you can buy any resource <b>from the reserve</b> by paying 1 Coin.",
    "gold-victory": "At the end of the game, gain 1 extra victory point for each complete set of 3 Coins you have in your City.",
    "gold-chain": "Once this symbol enters play, each time you construct a card for free through chains, immediately gain 2 Coins (from the reserve).",
    "cynisca": "At the end of the game, gain 6 victory points if you have no Military Defeat tokens in your City.",
    "caligula": "Once this symbol enters play, <b>once per Age</b>, you can construct a Black card for free.",
    "wonder-discount": "Once this symbol enters play, pay 1 fewer resource (your choice) to construct the stages of your Wonder.",
    "gorgo": "At the end of the game, for each <b>pair of identical Military Victory tokens</b> you have, gain victory points equal to the value of these tokens (1, 3, or 5).",
    "alexander": "At the end of the game, gain 1 extra victory point for each Military Victory token you have in your City.",
    "nitocris": "As soon as this symbol enters play, immediately gain a Military Victory token for the current Age.",
    "octavia": "Once this symbol enters play, each time you construct a stage of your Wonder, immediately gain 2 Coins (from the reserve). <b>All other players</b> lose 1 Coin.",
    "diocletian": "Once this symbol enters play, each time you construct a Black card, immediately gain 2 Coins (from the reserve).",
    "more-gold": "At the end of the game, gain 5 victory points <b>only</b> if you have more Coins in your Treasure than each of your neighbors, counted separately.",
    "only-leader": "At the end of the game, gain 7 victory points if this Leader is the <b><u>only</u> Leader</b> face up in your City.",
    "aganice": "At the end of the game, you can replace 1 science symbol in your City or on your Leaders with the science symbol of your choice.",
    "berenice": "Once this symbol enters play, <b>once per turn</b>, when you gain Coins from the reserve, you take 1 extra Coin.",
    "telesilla": "As soon as this symbol enters play, immediately discard <b>all</b> your Military Defeat tokens. <b>All other players</b> discard 1 of their Military Victory tokens (their choice).",
    "xenophon": "Once this symbol enters play, each time you construct a Yellow card, immediately gain 2 Coins (from the reserve).",
    "free-leader": "Once this symbol enters play, recruit all your next <b>Leaders</b> for free.",

    "discount-once": "When this symbol enters play, <b>once per turn</b>, you can buy 1 resource from the designated player for 1 Coin.",
    "discount-twice": "When this symbol enters play, <b>twice per turn</b>, you can buy 1 resource from the designated player for 1 Coin.",
    "naval": "When this symbol enters play, increase your naval strength by the indicated value.",
    "fleet-move": "As soon as this symbol enters play, advance one of your Fleets (of your choice) by one space on your Shipyard, without paying the construction cost. <br/><b><u>Clarification:</u></b> When you construct a card with this symbol, you can undertake a Naval Construction following the normal rules, and then apply the effect to benefit from a free Naval Construction. Therefore, it is possible to undertake multiple Naval Constructions on the same turn.",
    "commercial-debt": "As soon as this symbol enters play, all players <b>except you</b> lose as many Coins as their respective commercial level.",
    "island-card": "As soon as this symbol enters play, draw the first Island card of the indicated level (1, 2, or 3) and place it face up under the right side of your Shipyard. You benefit from its effect from now on.",
    "boarding": "When this symbol enters play, immediately take a Boarding token (from the reserve) and give it to the designated player.",
    "commercial-victory": "At the end of the game, gain victory points equal to double your commercial level.",
  }
};
