import { Game } from '../shared/models/game.model';

export const wingspanMetadata: Game = {
  minPlayers: 2,
  maxPlayers: 5,
  decks: [],
  expansions: [],
  diceSets: [
    {
      dice: [
        { type: 'fancy', sides: ['Invertebrate (Worm)', 'Fruit', 'Fish', 'Seed', 'Rodent', ['Invertebrate (Worm)', 'Seed']], },
        { type: 'fancy', sides: ['Invertebrate (Worm)', 'Fruit', 'Fish', 'Seed', 'Rodent', ['Invertebrate (Worm)', 'Seed']], },
        { type: 'fancy', sides: ['Invertebrate (Worm)', 'Fruit', 'Fish', 'Seed', 'Rodent', ['Invertebrate (Worm)', 'Seed']], },
        { type: 'fancy', sides: ['Invertebrate (Worm)', 'Fruit', 'Fish', 'Seed', 'Rodent', ['Invertebrate (Worm)', 'Seed']], },
        { type: 'fancy', sides: ['Invertebrate (Worm)', 'Fruit', 'Fish', 'Seed', 'Rodent', ['Invertebrate (Worm)', 'Seed']], },
      ],
    },
  ],
};
