import { Deck } from './deck.model';

export type Game = {
  name: string;
  minPlayers: number;
  maxPlayers: number;
  decks: Deck[];
  expansions: { id: number; name: string }[];
  // image, url, ...
};
