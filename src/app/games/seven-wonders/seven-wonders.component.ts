import { Component } from '@angular/core';
import { DeckComponent } from '../../shared/components/deck/deck.component';
import { game } from './seven-wonders.metadata';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

type Science = { name: string; code: string; count: number };

@Component({
  selector: 'app-seven-wonders',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    DeckComponent,
    SectionTitleComponent,
    DropdownModule,
    TableModule,
  ],
  templateUrl: './seven-wonders.component.html',
  styleUrl: './seven-wonders.component.scss',
})
export class SevenWondersComponent {
  game = game;

  // Science Cards
  science: Science[] = [
    { name: 'Tablet', code: 'T', count: 0 },
    { name: 'Compass', code: 'C', count: 0 },
    { name: 'Gear', code: 'G', count: 0 },
    { name: 'Tablet / Compass / Gear', code: 'TCG', count: 0 },
    { name: 'Tablet / Compass', code: 'TC', count: 0 },
    { name: 'Tablet / Gear', code: 'TG', count: 0 },
    { name: 'Compass / Gear', code: 'CG', count: 0 },
  ];

  adjustScience(science: Science, adjust: number) {
    science.count += adjust;
    science.count = Math.max(0, science.count);
  }

  setScience(science: Science, value: number) {
    science.count = value;
    science.count = Math.max(0, science.count);
  }
}
