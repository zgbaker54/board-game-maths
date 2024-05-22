import { Card } from './models/deck.model';
import { combinations } from 'mathjs';

export function CardsCount(card: Card[]): number {
  return card.reduce((prev, card) => prev + (card.count ?? 1), 0);
}

export function Unique<T>(array: T[]): T[] {
  return [...new Set<T>(array)];
}

/**
 * n choose k
 * @param n
 * @param k
 */
export function nChooseK(n: number, k: number): number {
  return nCk(n, k);
}
export function nCk(n: number, k: number): number {
  return combinations(n, k);
}
