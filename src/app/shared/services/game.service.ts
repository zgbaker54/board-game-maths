import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private _expansions: number[] = [];
  expansions$ = new BehaviorSubject<number[]>([]);

  set expansions(val: number[]) {
    this._expansions = val;
    this.expansions$.next(val);
  }

  get expansions() {
    return [...this._expansions];
  }

  constructor() {}

  expansionFilter<T>(array: (T & Partial<{ expansionId: number }>)[]): T[] {
    return array.filter(
      (item) =>
        item.expansionId === undefined ||
        this._expansions.includes(item.expansionId)
    );
  }
}
