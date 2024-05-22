import { Game } from '../shared/models/game.model';

export const simpleMetadata: Game = {
  minPlayers: 1,
  maxPlayers: 1,
  decks: [
    {
      id: 1,
      name: 'Standard Deck',
      pick: 1,
      pickMax: 10,
      cards: [
        { name: 'Ace Spades', properties: { suit: ['Spades'], value: ['Ace'] } },
        { name: '2 Spades', properties: { suit: ['Spades'], value: ['2'] } },
        { name: '3 Spades', properties: { suit: ['Spades'], value: ['3'] } },
        { name: '4 Spades', properties: { suit: ['Spades'], value: ['4'] } },
        { name: '5 Spades', properties: { suit: ['Spades'], value: ['5'] } },
        { name: '6 Spades', properties: { suit: ['Spades'], value: ['6'] } },
        { name: '7 Spades', properties: { suit: ['Spades'], value: ['7'] } },
        { name: '8 Spades', properties: { suit: ['Spades'], value: ['8'] } },
        { name: '9 Spades', properties: { suit: ['Spades'], value: ['9'] } },
        { name: '10 Spades', properties: { suit: ['Spades'], value: ['10'] } },
        { name: 'Jack Spades', properties: { suit: ['Spades'], value: ['Jack'] } },
        { name: 'Queen Spades', properties: { suit: ['Spades'], value: ['Queen'] } },
        { name: 'King Spades', properties: { suit: ['Spades'], value: ['King'] } },
        { name: 'Ace Hearts', properties: { suit: ['Hearts'], value: ['Ace'] } },
        { name: '2 Hearts', properties: { suit: ['Hearts'], value: ['2'] } },
        { name: '3 Hearts', properties: { suit: ['Hearts'], value: ['3'] } },
        { name: '4 Hearts', properties: { suit: ['Hearts'], value: ['4'] } },
        { name: '5 Hearts', properties: { suit: ['Hearts'], value: ['5'] } },
        { name: '6 Hearts', properties: { suit: ['Hearts'], value: ['6'] } },
        { name: '7 Hearts', properties: { suit: ['Hearts'], value: ['7'] } },
        { name: '8 Hearts', properties: { suit: ['Hearts'], value: ['8'] } },
        { name: '9 Hearts', properties: { suit: ['Hearts'], value: ['9'] } },
        { name: '10 Hearts', properties: { suit: ['Hearts'], value: ['10'] } },
        { name: 'Jack Hearts', properties: { suit: ['Hearts'], value: ['Jack'] } },
        { name: 'Queen Hearts', properties: { suit: ['Hearts'], value: ['Queen'] } },
        { name: 'King Hearts', properties: { suit: ['Hearts'], value: ['King'] } },
        { name: 'Ace Clubs', properties: { suit: ['Clubs'], value: ['Ace'] } },
        { name: '2 Clubs', properties: { suit: ['Clubs'], value: ['2'] } },
        { name: '3 Clubs', properties: { suit: ['Clubs'], value: ['3'] } },
        { name: '4 Clubs', properties: { suit: ['Clubs'], value: ['4'] } },
        { name: '5 Clubs', properties: { suit: ['Clubs'], value: ['5'] } },
        { name: '6 Clubs', properties: { suit: ['Clubs'], value: ['6'] } },
        { name: '7 Clubs', properties: { suit: ['Clubs'], value: ['7'] } },
        { name: '8 Clubs', properties: { suit: ['Clubs'], value: ['8'] } },
        { name: '9 Clubs', properties: { suit: ['Clubs'], value: ['9'] } },
        { name: '10 Clubs', properties: { suit: ['Clubs'], value: ['10'] } },
        { name: 'Jack Clubs', properties: { suit: ['Clubs'], value: ['Jack'] } },
        { name: 'Queen Clubs', properties: { suit: ['Clubs'], value: ['Queen'] } },
        { name: 'King Clubs', properties: { suit: ['Clubs'], value: ['King'] } },
        { name: 'Ace Diamonds', properties: { suit: ['Diamonds'], value: ['Ace'] } },
        { name: '2 Diamonds', properties: { suit: ['Diamonds'], value: ['2'] } },
        { name: '3 Diamonds', properties: { suit: ['Diamonds'], value: ['3'] } },
        { name: '4 Diamonds', properties: { suit: ['Diamonds'], value: ['4'] } },
        { name: '5 Diamonds', properties: { suit: ['Diamonds'], value: ['5'] } },
        { name: '6 Diamonds', properties: { suit: ['Diamonds'], value: ['6'] } },
        { name: '7 Diamonds', properties: { suit: ['Diamonds'], value: ['7'] } },
        { name: '8 Diamonds', properties: { suit: ['Diamonds'], value: ['8'] } },
        { name: '9 Diamonds', properties: { suit: ['Diamonds'], value: ['9'] } },
        { name: '10 Diamonds', properties: { suit: ['Diamonds'], value: ['10'] } },
        { name: 'Jack Diamonds', properties: { suit: ['Diamonds'], value: ['Jack'] } },
        { name: 'Queen Diamonds', properties: { suit: ['Diamonds'], value: ['Queen'] } },
        { name: 'King Diamonds', properties: { suit: ['Diamonds'], value: ['King'] } },
      ],
    },
  ],
  expansions: [],
  diceSets: [
    {
      dice: [
        {
          type: 'd4',
        },
      ],
    },
    {
      dice: [
        {
          type: 'd6',
        },
      ],
    },
    {
      dice: [
        {
          type: 'd8',
        },
      ],
    },
    {
      dice: [
        {
          type: 'd10',
        },
      ],
    },
    {
      dice: [
        {
          type: 'd12',
        },
      ],
    },
    {
      dice: [
        {
          type: 'd20',
        },
      ],
    },
  ],
};
