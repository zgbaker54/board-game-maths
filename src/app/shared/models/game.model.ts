import { Deck } from './deck.model';
import { DiceSet } from './dice.model';

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


