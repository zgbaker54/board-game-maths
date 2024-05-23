import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Dice, DiceSet } from '../../models/dice.model';
import { CommonModule } from '@angular/common';
import { DiceSimpleComponent } from '../dice-simple/dice-simple.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { Unique, nCk } from '../../helper';
import { TableModule } from 'primeng/table';
import { GameService } from '../../services/game.service';
import { Subscription } from 'rxjs';
import { MultiSelectModule } from 'primeng/multiselect';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-dice',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MultiSelectModule,
    SelectButtonModule,
    DiceSimpleComponent,
    SectionTitleComponent,
    TableModule,
  ],
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.scss',
})
export class DiceComponent implements OnInit, OnDestroy {
  @Input() diceSet!: DiceSet;

  subscriptions = new Subscription();
  filteredDice: Dice[] = [];
  chosenDice: Dice[] = [];

  rollCount = '';

  tableViewOptions: any[] = [
    { label: 'Percent %', value: 'percent' },
    { label: 'Count #', value: 'count' },
    { label: 'Expanded', value: 'expanded' },
  ];
  tableView: 'percent' | 'count' | 'expanded' = 'percent';

  useSimpleDice = false;

  // Fancy dice
  diceRolls: {
    count: number;
    face: string;
    pExact: number;
    pAtLeast: number;
  }[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.gameService.expansions$.subscribe(() => {
        this.resetDice();
      })
    );
    this.resetDice();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  resetDice() {
    this.filteredDice = this.gameService.expansionFilter(this.diceSet.dice);
    this.filteredDice.forEach((x) => (x.uuid = uuidv4()));
    this.chosenDice = [...this.filteredDice];
    this.rollDice();
  }

  rollDice(): void {
    this.diceRolls = [];
    this.useSimpleDice = false;

    const allSimple = this.chosenDice.every((x) => x.type !== 'fancy');

    if (allSimple) {
      this.useSimpleDice = true;

      // Convert the list of d4-20 into fancy dice objects
      const expandedDice: Dice[] = [];
      this.chosenDice.forEach((d) => {
        expandedDice.push({
          name: d.name,
          type: 'fancy',
          sides: Array.from(
            { length: +d.type.substring(1) },
            (v, i) => `${i + 1}`
          ),
        });
      });

      this.calculateDiceRolls(expandedDice);
    } else {
      this.calculateDiceRolls(this.chosenDice);
    }

    const types = Unique(this.chosenDice.map((x) => x.type));
    this.rollCount = ` - ${this.chosenDice.length}${
      allSimple ? ' ' + types.join(' + ') : ''
    } roll${this.chosenDice.length > 1 ? 's' : ''}`;
  }

  // Assuming that a face has the same probability for all dice where it shows up
  calculateDiceRolls(dice: Dice[]) {
    const tempData: {
      face: string;
      probability: number;
      totalDice: number;
    }[] = [];

    const faces: string[] = Unique(dice.map((x) => x.sides).flat(2)).filter(
      (x) => x !== undefined
    ) as string[];
    faces.forEach((face) => {
      const validDice = dice.filter((x) => x.sides?.flat().includes(face));
      const die = validDice[0];
      const totalDice = validDice.length;

      if (!die) {
        throw new Error('Dice does not have valid face!');
      }

      tempData.push({
        face,
        probability:
          (die.sides?.flat().filter((x) => x === face).length ?? 1) /
          (die.sides?.length ?? 1),
        totalDice,
      });
    });

    tempData.forEach((t) => {
      for (let i = t.totalDice; i > 0; i--) {
        const pExact = this.pXSameValues(i, t.totalDice, t.probability) * 100;
        this.diceRolls.push({
          count: i,
          face: t.face,
          pExact,
          pAtLeast:
            pExact +
            this.diceRolls
              .filter((x) => x.face === t.face)
              .reduce((prev, curr) => prev + curr.pExact, 0),
        });
      }
    });

    this.diceRolls.sort((a, b) => a.count - b.count);
  }

  /**
   *
   * @param k number of same values wanted
   * @param n number of dice
   * @param p probability of rolling value
   * @returns The probability of rolling exactly X same values out of the set
   */
  pXSameValues(k: number, n: number, p: number): number {
    //P(X=k) = nCk · p^k · (1-p)^n-k

    //nCk
    const nChooseK = nCk(n, k);

    //p^k
    const pK = p ** k;

    //(1-p)^n-k
    const pNK = (1 - p) ** (n - k);

    return nChooseK * pK * pNK;
  }

  onMultiselectFocus() {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  selectedDiceString(): string {
    const names = Object.fromEntries(this.chosenDice.map((d) => [d.name, 0]));
    this.chosenDice.forEach((d) => {
      names[d.name]++;
    });

    return Object.keys(names)
      .map((key) => `${key} x${names[key]}`)
      .join(', ');
  }
}
