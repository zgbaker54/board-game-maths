import { Deck } from './deck.model';

export type Game = {
  name: string;
  minPlayers: number;
  maxPlayers: number;
  decks: Deck[];
  expansions: { id: number; name: string }[];
  diceSets: DiceSet[];
  // image, url, ...
};

export type DiceSet = {
  dice: Dice[];
};

export type Dice = {
  type: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20' | 'fancy';
  sides?: string[];
};
