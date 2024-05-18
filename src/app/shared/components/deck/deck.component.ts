import { Component, Input, OnInit } from '@angular/core';
import { Deck } from '../../models/deck.model';
import { MultiSelectModule } from 'primeng/multiselect';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { SelectItemGroup } from 'primeng/api';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-deck',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MultiSelectModule,
    CardModule,
    DropdownModule,
    SliderModule,
    InputTextModule,
    ChipModule,
  ],
  templateUrl: './deck.component.html',
  styleUrl: './deck.component.scss',
})
export class DeckComponent implements OnInit {
  @Input() decks: Deck[] = [];

  tagGroups: SelectItemGroup[] = [];

  selectedDeck!: Deck;
  selectedTags: string[] = [];

  drawCounts = [1, 2];
  selectedDrawCount = 1;

  totalCardsInSelectedDeck = 0;
  totalValidCards = 0;

  percentage = '100';

  ngOnInit(): void {
    this.selectedDeck = this.decks[0];
    this.selectDeck();
    this.handleChanges();
  }

  selectDeck() {
    this.totalCardsInSelectedDeck = 0;
    const tempTags = new Set<string>();
    const tempGroups = new Set<string>();
    this.selectedDeck.cards.forEach((card) => {
      card.tags.forEach((t) => {
        const [_, group] = t.split(';');
        tempTags.add(t);
        if (group) {
          tempGroups.add(group);
        }
      });
      this.totalCardsInSelectedDeck += card.count ?? 1;
    });
    const tags = Array.from(tempTags.values());

    this.tagGroups = Array.from(tempGroups.values()).map((x) => ({
      label: x,
      value: x,
      items: tags
        .filter((t) => t.endsWith(`;${x}`))
        .map((x) => x.split(';')[0])
        .map((x) => ({ label: x, value: x })),
    }));
    this.tagGroups.push({
      label: 'Other',
      value: 'Other',
      items: tags
        .filter((t) => t.includes(';') === false)
        .map((x) => ({ label: x, value: x })),
    });

    console.log(tempGroups);
  }

  handleChanges(): void {
    const validCards = this.selectedDeck.cards.filter((card) => {
      for (const tag of this.selectedTags) {
        const tagsSimple = card.tags.map((x) => x.split(';')[0]);
        if (tagsSimple.includes(tag) === false) {
          return false;
        } else {
          // continue
        }
      }
      return true;
    });

    this.totalValidCards = validCards.reduce(
      (prev, value) => prev + (value.count ?? 1),
      0
    );

    const notValid = this.totalCardsInSelectedDeck - this.totalValidCards;

    let drawX = 1;
    for (let i = 0; i < this.selectedDrawCount; i++) {
      drawX *= this.totalCardsInSelectedDeck - i;
    }
    drawX /= this.selectedDrawCount;

    let invalidX = 1;
    for (let i = 0; i < this.selectedDrawCount; i++) {
      invalidX *= notValid - i;
    }
    invalidX /= this.selectedDrawCount;

    this.percentage = ((1 - invalidX / drawX) * 100).toFixed(4);
  }
}
