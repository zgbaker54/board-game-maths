import { Component, Input, OnInit } from '@angular/core';
import { DiceSet } from '../../models/game.model';
import { CommonModule } from '@angular/common';
import { DiceSimpleComponent } from '../dice-simple/dice-simple.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { Unique } from '../../helper';

@Component({
  selector: 'app-dice',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SelectButtonModule,
    DiceSimpleComponent,
    SectionTitleComponent,
  ],
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.scss',
})
export class DiceComponent implements OnInit {
  @Input() diceSet!: DiceSet;

  rollCount = '';

  tableViewOptions: any[] = [
    { label: 'Percent %', value: 'percent' },
    { label: 'Count #', value: 'count' },
  ];
  tableView: 'percent' | 'count' = 'percent';

  useSimpleDice = false;

  ngOnInit(): void {
    const allSimple = this.diceSet.dice.every((x) => x.type !== 'fancy');

    if (allSimple) {
      this.useSimpleDice = true;
    }

    const types = Unique(this.diceSet.dice.map((x) => x.type));
    this.rollCount = ` - ${this.diceSet.dice.length}${
      allSimple ? ' ' + types.join(' + ') : ''
    } roll${this.diceSet.dice.length > 1 ? 's' : ''}`;
  }
}
