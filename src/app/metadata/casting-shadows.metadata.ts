import { Game } from '../shared/models/game.model';

export const castingShadowsMetadata: Game = {
  minPlayers: 2,
  maxPlayers: 4,
  decks: [
    {
      id: 2,
      name: 'Counterspell',
      cards: [
        { name: 'Run Away!', tags: ['Travel'], count: 3 },
        { name: 'Bees Everywhere', tags: ['Deal Damage'], count: 2 },
        { name: 'Safety Dome', tags: ['Negate Damage'] },
        { name: 'Pointed Shield', tags: ['Reduce Damage'], count: 4 },
      ],
    },
    {
      id: 1,
      name: 'Main',
      cards: [
        { name: 'Red Gem', tags: ['Red Gem', 'Item'], count: 3 },
        { name: 'Blue Gem', tags: ['Blue Gem', 'Item'], count: 3 },
        { name: 'Red Orb', tags: ['Red Orb', 'Item'], count: 1 },
        { name: 'Blue Orb', tags: ['Blue Orb', 'Item'], count: 1 },
        {
          name: 'Sudden Doom',
          tags: ['Attack;Spell', '3;Level', 'Hex;Attack', '1;Range'],
        },
        {
          name: 'Infernal Assault',
          tags: ['Attack;Spell', '3;Level', 'Enemy;Attack', '2;Range'],
        },
      ],
    },
  ],
  expansions: [],
  diceSets: [],
};
