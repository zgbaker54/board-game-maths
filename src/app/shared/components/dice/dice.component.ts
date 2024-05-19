import { Component, Input, OnInit } from '@angular/core';
import { DiceSet } from '../../models/game.model';
import { CommonModule } from '@angular/common';
import { DiceSimpleComponent } from '../dice-simple/dice-simple.component';

@Component({
  selector: 'app-dice',
  standalone: true,
  imports: [CommonModule, DiceSimpleComponent],
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.scss',
})
export class DiceComponent implements OnInit {
  @Input() diceSet!: DiceSet;

  useSimpleDice = false;

  ngOnInit(): void {
    const allSimple = this.diceSet.dice.every((x) => x.type !== 'fancy');
    const someSimple = this.diceSet.dice.some((x) => x.type !== 'fancy');

    if (allSimple) {
      this.useSimpleDice = true;
    }
  }
}
