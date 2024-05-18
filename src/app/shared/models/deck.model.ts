export type Deck = {
  id: number;
  name?: string;
  expansionId?: number;
  pick?: string; // How many cards to use from this deck
  cards: { name?: string; tags: string[]; count?: number; minPlayers?: number }[];
};
