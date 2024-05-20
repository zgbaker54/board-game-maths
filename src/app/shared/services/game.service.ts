import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  _expansions: number[] = [];
  expansions$ = new BehaviorSubject<number[]>([]);

  set expansions(val: number[]) {
    this._expansions = val;
    this.expansions$.next(val);
  }

  constructor() {}
}
