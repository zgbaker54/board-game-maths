import { Deck } from './deck.model';
import { DiceSet } from './dice.model';

export type Game = {
  minPlayers: number;
  maxPlayers: number;
  decks: Deck[];
  expansions: Expansion[];
  diceSets: DiceSet[];
  rules?: { [rule: string]: string };
  // image, url, ...
};

export type Expansion = {
  id: number;
  name: string;
};

export function CheckForErrors(game: Game) {
  // Check for undefined expansions
  const expansionIds = new Set<number>();
  game.decks.forEach((d) => {
    if (d.expansionId) {
      expansionIds.add(d.expansionId);
    } else {
      // continue
    }

    d.cards.forEach((c) => {
      if (c.expansionId) {
        expansionIds.add(c.expansionId);
      } else {
        // continue
      }
    });
  });
  game.diceSets.forEach((ds) => {
    if (ds.expansionId) {
      expansionIds.add(ds.expansionId);
    } else {
      // continue
    }

    ds.dice.forEach((d) => {
      if (d.expansionId) {
        expansionIds.add(d.expansionId);
      } else {
        // continue
      }
    });
  });

  [...expansionIds].forEach((eId) => {
    if (game.expansions.find((x) => x.id === eId) === undefined) {
      console.warn(`Expansion ${eId} is not defined in expansion list`);
    } else {
      // continue
    }
  });

  // Check for duplicate cards
  game.decks.forEach((d) => {});

  // Check for duplicate deck ids in same expansion
}
