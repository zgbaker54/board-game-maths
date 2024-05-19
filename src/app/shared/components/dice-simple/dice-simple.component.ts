import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Dice, DiceSet } from '../../models/game.model';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dice-simple',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './dice-simple.component.html',
  styleUrl: './dice-simple.component.scss',
})
export class DiceSimpleComponent implements OnChanges {
  @Input() diceSet!: DiceSet;
  @Input() tableView!: 'count' | 'percent';

  diceRollCounts: {
    [key: number]: number;
  } = {};

  probCount: {
    [key: number]: { less: number; value: number; more: number };
  } = {};

  probPercent: {
    [key: number]: { less: number; value: number; more: number };
  } = {};

  tableData: {
    roll: number;
    less: number;
    more: number;
    value: number;
  }[] = [];
  tableNumberFormat = '1.2-2';
  tableNumberSuffix = '%';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['diceSet']) {
      this.diceRollCounts = {};
      this.probCount = {};
      this.calculateProbabilities();
    }

    this.tableData = [];
    this.convertToTable();
  }

  calculateProbabilities() {
    this.generateCombinations(this.diceSet.dice.length, this.diceSet.dice, []);

    const totalCombinations = this.diceSet.dice.reduce(
      (prev, die) => prev * this.getSides(die),
      1
    );

    // Calculate less and value properties
    const keys = Object.keys(this.diceRollCounts).map((x) => +x);
    for (let k = 0; k < keys.length; k++) {
      const key = keys[k];
      const rollCount = this.diceRollCounts[key];
      const prevPro = this.probCount?.[keys?.[k - 1]] ?? {
        less: 0,
        value: 0,
        more: 0,
      };

      this.probCount[key] = {
        less: prevPro.less + prevPro.value,
        value: rollCount,
        more: 0,
      };
    }

    // Calculate more properties
    for (let k = keys.length - 2; k >= 0; k--) {
      const key = keys[k];
      const nextProb = this.probCount?.[keys?.[k + 1]] ?? {
        less: 0,
        value: 0,
        more: 0,
      };

      this.probCount[key].more = nextProb.value + nextProb.more;
    }

    Object.keys(this.probCount).forEach((key) => {
      const count = this.probCount[+key];
      const p = { less: count.less, value: count.value, more: count.more };
      this.probPercent[+key] = p;
      p.less /= totalCombinations;
      p.less *= 100;
      p.value /= totalCombinations;
      p.value *= 100;
      p.more /= totalCombinations;
      p.more *= 100;
    });
  }

  generateCombinations(rolls: number, dice: Dice[], combination: number[]) {
    const die = dice[rolls - 1];

    if (rolls === 0) {
      // Convert the combination array to a string and store it in the dictionary
      let combinationValue = combination.reduce((a, b) => a + b, 0);
      if (this.diceRollCounts[combinationValue]) {
        this.diceRollCounts[combinationValue]++;
      } else {
        this.diceRollCounts[combinationValue] = 1;
      }
      return;
    }

    // Loop through all possible dice values (1 to 6)
    for (let i = 1; i <= this.getSides(die); i++) {
      this.generateCombinations(rolls - 1, dice, [...combination, i]);
    }
  }

  convertToTable() {
    if (this.tableView === 'count') {
      this.tableNumberFormat = '1.0-0';
      this.tableNumberSuffix = '';
      Object.keys(this.probCount).forEach((key) => {
        this.tableData.push({
          roll: +key,
          less: this.probCount[+key].less,
          more: this.probCount[+key].more,
          value: this.probCount[+key].value,
        });
      });
    } else {
      this.tableNumberFormat = '1.2-2';
      this.tableNumberSuffix = '%';
      Object.keys(this.probPercent).forEach((key) => {
        this.tableData.push({
          roll: +key,
          less: this.probPercent[+key].less,
          more: this.probPercent[+key].more,
          value: this.probPercent[+key].value,
        });
      });
    }
  }

  getSides(dice: Dice): number {
    switch (dice.type) {
      case 'd4':
        return 4;
      case 'd6':
        return 6;
      case 'd8':
        return 8;
      case 'd10':
        return 10;
      case 'd12':
        return 12;
      case 'd20':
        return 20;
      case 'fancy':
        return 0;
    }
  }
}
