import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../../models/deck.model';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-filter-v2',
  standalone: true,
  imports: [CommonModule, FormsModule, CardModule, DropdownModule, MultiSelectModule],
  templateUrl: './card-filter-v2.component.html',
  styleUrl: './card-filter-v2.component.scss',
})
export class CardFilterV2Component {
  @Input() allCards: Card[] = [];
  @Input() playerCount: number = 1;

  @Output() onChanges = new EventEmitter<Card[]>();

  globalMatchOptions = [
    { name: 'Match any of the following', value: 'any' },
    { name: 'Match all of the following', value: 'all' },
  ];
  globalMatch = 'any';
}
