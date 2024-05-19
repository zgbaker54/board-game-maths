import { Component, Input, OnInit } from '@angular/core';
import { Deck } from '../../models/deck.model';
import { MultiSelectModule } from 'primeng/multiselect';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { SelectItem, SelectItemGroup } from 'primeng/api';
import { ChipModule } from 'primeng/chip';
import { Game } from '../../models/game.model';
import { combinations } from 'mathjs';

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
  @Input() game!: Game;

  variesByPlayerCount = false;
  playerCounts: number[] = [];
  playerCount = 0;

  tagGroups: SelectItemGroup[] = [];

  decks: SelectItem[] = [];
  selectedDeck!: Deck;
  selectedTags: string[] = [];

  drawCounts = [1, 2, 7];
  selectedDrawCount = 1;

  totalValidCardsString = '';
  totalPossibleCards = 0;

  percentage = '100';

  ngOnInit(): void {
    for (let i = this.game.minPlayers; i <= this.game.maxPlayers; i++) {
      this.playerCounts.push(i);
    }
    this.playerCount = this.game.maxPlayers;

    this.decks = this.game.decks.map((d) => ({ value: d, label: d.name }));
    this.selectedDeck = this.game.decks[0];
    this.selectDeck();
    this.handleChanges();
  }

  selectDeck() {
    const tempTags = new Set<string>();
    const tempGroups = new Set<string>();
    this.selectedDeck.cards.forEach((card) => {
      this.variesByPlayerCount = card.minPlayers
        ? true
        : this.variesByPlayerCount;
      card.tags.forEach((t) => {
        const [_, group] = t.split(';');
        tempTags.add(t);
        if (group) {
          tempGroups.add(group);
        }
      });
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

    this.tagGroups.sort((a, b) => a.label.localeCompare(b.label));
    this.tagGroups.forEach((x) =>
      x.items.sort((a, b) => a.value.localeCompare(b.value))
    );
  }

  handleChanges(): void {
    const validCards = this.selectedDeck.cards.filter((card) => {
      if ((card.minPlayers ?? 1) > this.playerCount) {
        return false;
      }

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

    let totalValidCards = validCards.reduce((prev, value) => {
      return prev + (value.count ?? 1);
    }, 0);

    this.totalPossibleCards = this.selectedDeck.cards
      .filter((card) => {
        if ((card.minPlayers ?? 1) > this.playerCount) {
          return false;
        }
        return true;
      })
      .reduce((prev, value) => prev + (value.count ?? 1), 0);

    if (this.selectedDeck.totalCardsAdjust) {
      this.totalPossibleCards += this.selectedDeck.totalCardsAdjust(
        this.playerCount
      );
    }
    if (this.selectedDeck.totalValidCards) {
      totalValidCards = this.selectedDeck.totalValidCards(
        this.playerCount,
        validCards
      )[1];
    }

    const notValid = this.totalPossibleCards - totalValidCards;

    const drawX = combinations(this.totalPossibleCards, this.selectedDrawCount);

    let invalidX: number;
    if (notValid <= 0) {
      invalidX = 0;
    } else {
      invalidX = combinations(notValid, this.selectedDrawCount);
    }

    let percent = 1 - invalidX / drawX;

    const minMaxCards = this.selectedDeck.totalValidCards?.(
      this.playerCount,
      validCards
    ) ?? [totalValidCards, totalValidCards];
    if (minMaxCards[0] !== minMaxCards[1]) {
      validCards.forEach((c) => {
        if (c.probabilityFunc) {
          percent -=
            c.probabilityFunc(this.playerCount) * (1 / this.totalPossibleCards);
        }
      });
      this.totalValidCardsString = `${minMaxCards[0]} - ${minMaxCards[1]}`;
    } else {
      this.totalValidCardsString = `${minMaxCards[0]}`;
    }

    this.percentage = (percent * 100).toFixed(4);
  }
}
