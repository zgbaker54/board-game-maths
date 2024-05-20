import { Card } from './models/deck.model';

export function CardsCount(card: Card[]): number {
  return card.reduce((prev, card) => prev + (card.count ?? 1), 0);
}

export function Unique<T>(array: T[]): T[] {
  return [...new Set<T>(array)];
}
