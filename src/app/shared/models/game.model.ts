import { Deck } from './deck.model';

export type Game = {
  minPlayers: number;
  maxPlayers: number;
  decks: Deck[];
  expansions: Expansion[];
  diceSets: DiceSet[];
  // image, url, ...
};

export type Expansion = {
  id: number;
  name: string;
};

export type DiceSet = {
  dice: Dice[];
};

export type Dice = {
  type: DiceType;
  sides?: string[];
};

export type DiceType = 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20' | 'fancy';
