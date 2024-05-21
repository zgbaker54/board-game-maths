import { Card } from './models/deck.model';

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
export function nCk(n: number, k: number): number {
  if (k < 0) {
    throw new Error('k must be greater than 0');
  }
  if (k > n) {
    throw new Error('k must be less than or equal to n');
  }

  return factorial(n) / (factorial(k) * factorial(n - k));
}

export function factorial(n: number): number {
  let ans = 1;

  if (n === 0) return 1;
  for (let i = 2; i <= n; i++) ans = ans * i;
  return ans;
}
