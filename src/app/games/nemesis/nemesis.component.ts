import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { TableModule } from 'primeng/table';
import { nemesisMetadata } from '../../metadata/nemesis.metadata';
import { CardsCount, nChooseK } from '../../shared/helper';
import { ButtonModule } from 'primeng/button';

type Infection = {
  contaminations: number;
  infected: string;
  survivalChance: string;
  survivalLarvaChance: string;
};

@Component({
  selector: 'app-nemesis',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    SectionTitleComponent,
    TableModule,
    // CardModule,
  ],
  templateUrl: './nemesis.component.html',
  styleUrl: './nemesis.component.scss',
})
export class NemesisComponent implements OnInit {
  game = nemesisMetadata;

  infections: Infection[] = [];
  infectedOffset = 0;
  cleanOffset = 0;

  ngOnInit(): void {
    this.calculateInfected();
  }

  adjustInfected(adjustment: number) {
    this.infectedOffset += adjustment;
    this.calculateInfected();
  }

  adjustClean(adjustment: number) {
    this.cleanOffset += adjustment;
    this.calculateInfected();
  }

  calculateInfected() {
    this.infections = [];
    const baseActionCards = 10;
    const endGamePick = 4;

    const cards = this.game.decks.find(x => x.id === 3)?.cards ?? [];
    const total = CardsCount(cards);
    const clean = CardsCount(cards.filter(x => x.name === 'Clean'));

    for (let i = 1; i < 9; i++) {
      let NI = 1; // Not infected
      for (let j = 0; j < i; j++) {
        NI *= (clean - this.cleanOffset - j) / (total - this.infectedOffset - j);
      }
      let I = 1-NI;

      let living = 1;
      for (let j = 0; j < endGamePick; j++) {
        living *= (baseActionCards-j)/(baseActionCards+i-j);
      }

      this.infections.push({
        contaminations: i,
        infected: (I*100).toFixed(2),
        survivalChance: ((NI + (living * I)) * 100).toFixed(2),
        survivalLarvaChance: (living*100).toFixed(2)
      });
    }
  }
}
