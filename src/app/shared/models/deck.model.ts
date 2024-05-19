export type Deck = {
  id: number;
  name?: string;
  expansionId?: number;
  pick?: number; // How many cards can be drawn at once
  cards: Card[];

  /**
   * Get the number of total cards in the deck
   * ex. 7 Wonders only uses some of the purple cards so number of valid cards is reduced
   * @param playerCount Number of players in the game
   * @returns value to offset to get total number of valid cards
   */
  totalCardsAdjust?: (playerCount: number) => number;

  /**
   * Get the number of valid cards in the valid card list
   * ex. 7 Wonders only uses some of the purple cards so number of valid cards is reduced
   * @param playerCount Number of players in the game
   * @param validCards List of valid cards
   * @returns [min possible valid cards, max possible valid cards]
   */
  totalValidCards?: (playerCount: number, validCards: Card[]) => number[];
};

export type Card = {
  name?: string;
  tags: string[];
  count?: number;
  minPlayers?: number;

  // Probability that this card is in the deck
  probabilityFunc?: (playerCount: number) => number;
};
