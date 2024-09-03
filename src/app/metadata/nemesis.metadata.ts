import { Game } from '../shared/models/game.model';

export const nemesisMetadata: Game = {
  minPlayers: 1,
  maxPlayers: 5,
  customFirst: true,
  decks: [
    {
      id: 1,
      name: 'Item - Military',
      pick: 2,
      cards: [
        { name: 'Comms Key', count: 1, properties: {  } },
        { name: 'Decoy', count: 2, properties: {  } },
        { name: 'Energy Charge', count: 11, properties: {  } },
        { name: 'Evacuation Key', count: 1, properties: {  } },
        { name: 'Extended Magazine', count: 1, properties: {  } },
        { name: 'Grenade', count: 4, properties: {  } },
        { name: 'Prototype: Pistol', count: 1, properties: {"weaponType": ['Energy'],  } },
        { name: 'Prototype: Shotgun', count: 1, properties: {"weaponType": ['Energy'],  } },
        { name: 'Recon Drone', count: 3, properties: {  } },
        { name: 'Self-Destruct Key', count: 1, properties: {  } },
        { name: 'Smoke Grenade', count: 3, properties: {  } },
        { name: 'Prototype: Rifle', count: 1, properties: {"weaponType": ['Energy'],  } },
      ],
    },
    {
        id: 2,
        name: 'Item - Medical',
        pick: 2,
        cards: [
          { name: 'Adrenaline Injection', count: 3, properties: {  } },
          { name: 'Alcohol', count: 3, properties: {  } },
          { name: 'Bandages', count: 7, properties: {  } },
          { name: 'Clothes', count: 3, properties: {  } },
          { name: 'Medkit', count: 7, properties: {  } },
          { name: 'Military Drugs', count: 2, properties: {  } },
          { name: 'Synthetic Food', count: 5, properties: {  } },
        ],
      },
      {
        id: 3,
        name: 'Contamination',
        pick: 1,
        cards: [
            { name: 'Clean', count: 20, properties: {}},
            { name: 'Infected', count: 7, properties: {}}
        ]
      }
  ],
  expansions: [],
  diceSets: [
    {
      name: 'Noise',
      dice: [
        {
          name: 'Noise',
          type: 'fancy',
          sides: [
            '1',
            '2',
            '3',
            '4',
            '1',
            '2',
            '3',
            '4',
            'Silence',
            'Danger',
          ],
        },
      ],
    },
    {
        name: 'Combat',
        dice: [
          {
            name: 'Combat',
            type: 'fancy',
            sides: [
              '1 Hit',
              '2 Hits',
              'Blank',
              'Adult',
              'Creeper',
              'Creeper',
            ],
          },
        ],
      },
  ],
};
