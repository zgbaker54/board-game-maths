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
        { name: 'Red Gem', tags: ['Red Gem', 'Gem', 'Item;Type'], count: 3 },
        { name: 'Blue Gem', tags: ['Blue Gem', 'Gem', 'Item;Type'], count: 3 },
        { name: 'Red Orb', tags: ['Red Orb', 'Orb', 'Item;Type'], count: 1 },
        { name: 'Blue Orb', tags: ['Blue Orb', 'Orb', 'Item;Type'], count: 1 },

        // Level 3
        {
          name: 'Sudden Doom',
          tags: [
            'Attack Spell;Type',
            '3;Level',
            'Hex;Attack',
            '1;Range',
            'Current Tile;Range',
          ],
        },
        {
          name: 'Infernal Assault',
          tags: [
            'Attack Spell;Type',
            '3;Level',
            'Enemy;Attack',
            '2;Range',
            'Current Tile;Range',
          ],
        },

        // Level 2
        {
          name: 'Gem Duplication',
          tags: ['Conversion Spell;Type', '2;Level', 'Gem'],
        },
        {
          name: 'Orb Duplication',
          tags: ['Conversion Spell;Type', '2;Level', 'Orb'],
        },
        {
          name: 'Kinetic Wave',
          tags: ['Attack Spell;Type', '2;Level', 'Hex;Attack', '2;Range'],
        },
        {
          name: 'Phoenix Flash',
          tags: [
            'Attack Spell;Type',
            '2;Level',
            'Enemy;Attack',
            '1;Range',
            'Current Tile;Range',
          ],
        },
        {
          name: 'Psychic Spikes',
          tags: ['Attack Spell;Type', '2;Level', 'Hex;Attack', '1;Range'],
        },
        {
          name: 'Personal Space',
          tags: [
            'Attack Spell;Type',
            '2;Level',
            'Hex;Attack',
            'Current Tile;Range',
          ],
        },
        {
          name: 'Deadly Shroud',
          tags: ['Attack Spell;Type', '2;Level', 'Hex;Attack', '1;Range'],
        },
        {
          name: 'Unicorn Rush',
          tags: [
            'Attack Spell;Type',
            '2;Level',
            'Enemy;Attack',
            '1;Range',
            'Current Tile;Range',
          ],
        },
        {
          name: 'Magma Hand',
          tags: [
            'Attack Spell;Type',
            '2;Level',
            'Enemy;Attack',
            '2;Range',
            'Current Tile;Range',
          ],
        },

        // Level 1
        {
          name: 'Fatal Fronds',
          tags: [
            'Attack Spell;Type',
            '1;Level',
            'Hex;Attack',
            'Current Tile;Range',
          ],
          count: 4,
        },
        {
          name: 'Feeding Frenzy',
          tags: [
            'Attack Spell;Type',
            '1;Level',
            'Enemy;Attack',
            '1;Range',
            'Current Tile;Range',
          ],
          count: 3,
        },
        {
          name: 'Bubble Trouble',
          tags: ['Attack Spell;Type', '1;Level', 'Enemy;Attack', '1;Range'],
          count: 3,
        },
        {
          name: 'Heat Wave',
          tags: ['Attack Spell;Type', '1;Level', 'Enemy;Attack', '1;Range'],
          count: 3,
        },
        {
          name: 'Spectral Slap',
          tags: ['Attack Spell;Type', '1;Level', 'Hex;Attack', '1;Range'],
          count: 3,
        },
        {
          name: 'Heavy Hand',
          tags: [
            'Attack Spell;Type',
            '1;Level',
            'Enemy;Attack',
            '1;Range',
            'Current Tile;Range',
          ],
          count: 3,
        },
        {
          name: 'Lightning Bug',
          tags: ['Attack Spell;Type', '1;Level', 'Enemy;Attack', '1;Range'],
          count: 3,
        },
        {
          name: 'Sinister Screech',
          tags: ['Attack Spell;Type', '1;Level', 'Enemy;Attack', '1;Range'],
          count: 3,
        },
        {
          name: 'Luminous Glow',
          tags: ['Conversion Spell;Type', '1;Level', 'Orb', 'Gem'],
        },
        {
          name: 'Ruby Synthesis',
          tags: [
            'Conversion Spell;Type',
            '1;Level',
            'Red Orb',
            'Orb',
            'Red Gem',
            'Gem',
          ],
        },
        {
          name: 'Sapphire Synthesis',
          tags: [
            'Conversion Spell;Type',
            '1;Level',
            'Blue Orb',
            'Orb',
            'Blue Gem',
            'Gem',
          ],
        },
        {
          name: 'Energy Bloom',
          tags: [
            'Conversion Spell;Type',
            '1;Level',
            'Red Gem',
            'Blue Gem',
            'Gem',
          ],
        },
        {
          name: 'Crystallization',
          tags: [
            'Conversion Spell;Type',
            '1;Level',
            'Orb',
            'Red Gem',
            'Blue Gem',
            'Red Orb',
            'Blue Orb',
            'Gem',
          ],
        },
        {
          name: 'Metamorphosis',
          tags: [
            'Conversion Spell;Type',
            '1;Level',
            'Orb',
            'Red Orb',
            'Blue Orb',
          ],
        },
        {
          name: 'Curse Void',
          tags: [
            'Conversion Spell;Type',
            '1;Level',
            'Gem',
            'Red Gem',
            'Blue Gem',
            'Cursed Crystal',
          ],
          count: 2,
        },
      ],
    },
  ],
  expansions: [],
  diceSets: [
    {
      dice: [
        {
          type: 'fancy',
          sides: [
            'Blue Gem',
            'Blue Gem',
            'Blue Orb',
            'Blue Orb',
            'Cursed Crystal',
            'Shadow Fragment',
          ],
        },
        {
          type: 'fancy',
          sides: [
            'Blue Gem',
            'Blue Gem',
            'Blue Orb',
            'Blue Orb',
            'Cursed Crystal',
            'Shadow Fragment',
          ],
        },
        {
          type: 'fancy',
          sides: [
            'Red Gem',
            'Red Gem',
            'Red Orb',
            'Red Orb',
            'Cursed Crystal',
            'Shadow Fragment',
          ],
        },
        {
          type: 'fancy',
          sides: [
            'Red Gem',
            'Red Gem',
            'Red Orb',
            'Red Orb',
            'Cursed Crystal',
            'Shadow Fragment',
          ],
        },
        {
          type: 'fancy',
          sides: [
            'Purple Gem',
            'Purple Gem',
            'Purple Orb',
            'Purple Orb',
            'Cursed Crystal',
            'Shadow Fragment',
          ],
        },
      ],
    },
  ],
};
