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
        name: 'Item - Technical',
        pick: 2,
        cards: [
          { name: 'Chemicals', count: 7, properties: {  } },
          { name: 'Duct Tape', count: 4, properties: {  } },
          { name: 'Energy Charge', count: 3, properties: {  } },
          { name: 'Fire Extinguisher', count: 4, properties: {  } },
          { name: 'Nemesis Plans', count: 1, properties: {  } },
          { name: 'Space Suit', count: 1, properties: {  } },
          { name: 'Technical Corridors Plans', count: 1, properties: {  } },
          { name: 'Tools', count: 6, properties: {  } },
        ],
      },
      {
        id: 4,
        name: 'Contamination',
        pick: 1,
        cards: [
            { name: 'Clean', count: 20, properties: {}},
            { name: 'Infected', count: 7, properties: {}}
        ]
      },
      {
        id: 5,
        name: 'Intruder Attack',
        pick: 1,
        cards: [
          { name: 'Bite', count: 1, properties: {"Health": ['Flee'],  } },
          { name: 'Bite', count: 2, properties: {"Health": ['4'],  } },
          { name: 'Bit', count: 1, properties: {"Health": ['6'],  } },
          { name: 'Claw Attack ', count: 1, properties: {"Health": ['Flee'],  } },
          { name: 'Claw Attack', count: 1, properties: {"Health": ['3'],  } },
          { name: 'Claw Attack', count: 1, properties: {"Health": ['4'],  } },
          { name: 'Claw Attack', count: 1, properties: {"Health": ['5'],  } },
          { name: 'Frenzy', count: 1, properties: {"Health": ['3'],  } },
          { name: 'Frenzy', count: 1, properties: {"Health": ['4'],  } },
          { name: 'Scratch', count: 1, properties: {"Health": ['2'],  } },
          { name: 'Scratch', count: 1, properties: {"Health": ['3'],  } },
          { name: 'Scratch', count: 1, properties: {"Health": ['5'],  } },
          { name: 'Scratch', count: 1, properties: {"Health": ['6'],  } },
          { name: 'Slime', count: 1, properties: {"Health": ['5'],  } },
          { name: 'Summoning', count: 1, properties: {"Health": ['3'],  } },
          { name: 'Tail Attack', count: 1, properties: {"Health": ['2'],  } },
          { name: 'Tail Attack', count: 1, properties: {"Health": ['5'],  } },
          { name: 'Transformation', count: 1, properties: {"Health": ['4'],  } },
          { name: 'Transformation', count: 1, properties: {"Health": ['5'],  } },
        ]
      },
      {
        id: 6,
        name: 'Serious Wound',
        pick: 1,
        cards: [
            { name: 'Arm', count: 3, properties: {}},
            { name: 'Bleeding', count: 3, properties: {}},
            { name: 'Body', count: 4, properties: {}},
            { name: 'Hand', count: 3, properties: {}},
            { name: 'Leg', count: 3, properties: {}}
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
