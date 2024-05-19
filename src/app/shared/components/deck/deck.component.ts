import { Component, Input, OnInit } from '@angular/core';
import { Card, Deck } from '../../models/deck.model';
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
import { SectionTitleComponent } from '../section-title/section-title.component';

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
    SectionTitleComponent,
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
  selectedDeckId!: number;
  selectedDecks: Deck[] = [];
  selectedTags: string[] = [];

  allCards: Card[] = [];

  drawCounts = [1, 2, 3, 4, 5, 6, 7, 8];
  selectedDrawCount = 1;

  totalValidCardsString = '';
  totalPossibleCards = 0;

  percentage = '100';

  ngOnInit(): void {
    for (let i = this.game.minPlayers; i <= this.game.maxPlayers; i++) {
      this.playerCounts.push(i);
    }
    this.playerCount = this.game.maxPlayers;

    // Get deck ids filtering out expansions
    const deckIds = [
      ...new Set<number>(
        this.game.decks
          .filter((x) => x.expansionId === undefined)
          .map((x) => x.id)
      ),
    ];

    // Get list of decks for the dropdown
    this.decks = deckIds.map((id) => {
      const d = this.game.decks.find(
        (x) => x.id === id && x.expansionId === undefined
      );
      return { value: d!.id, label: d!.name };
    });
    this.selectedDeckId = this.game.decks[0].id;

    this.selectDeck();
    this.handleChanges();
  }

  selectDeck() {
    const tempTags = new Set<string>();
    const tempGroups = new Set<string>();

    this.selectedDecks = this.game.decks.filter(
      (x) => x.id === this.selectedDeckId && x.expansionId === undefined
    );
    this.allCards = this.selectedDecks.map((x) => x.cards).flat();

    this.allCards.forEach((card) => {
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

    if (this.selectedDecks.some((x) => x.pick)) {
      const maxDraw = Math.max(...this.selectedDecks.map((x) => x.pick ?? 0));
      this.drawCounts = [];
      for (let i = 1; i <= maxDraw; i++) {
        this.drawCounts.push(i);
      }
      this.selectedDrawCount = maxDraw;
    } else {
      this.drawCounts = [1, 2, 3, 4, 5, 6, 7, 8];
      this.selectedDrawCount = 1;
    }
  }

  handleChanges(): void {
    const validCards = this.allCards.filter((card) => {
      if (this.playerCount > 0 && (card.minPlayers ?? 1) > this.playerCount) {
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

    this.totalPossibleCards = this.allCards
      .filter((card) => {
        if (this.playerCount > 0 && (card.minPlayers ?? 1) > this.playerCount) {
          return false;
        }
        return true;
      })
      .reduce((prev, value) => prev + (value.count ?? 1), 0);

    this.selectedDecks.forEach((deck) => {
      if (deck.totalCardsAdjust) {
        this.totalPossibleCards += deck.totalCardsAdjust(this.playerCount);
      }
    });

    if (this.selectedDecks.some((deck) => deck.totalValidCards)) {
      totalValidCards = 0;
      this.selectedDecks.forEach((deck) => {
        if (deck.totalValidCards) {
          totalValidCards += deck.totalValidCards(
            this.playerCount,
            validCards
          )[1];
        }
      });
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

    const minMaxCards = [0, 0];
    this.selectedDecks.forEach((deck) => {
      const validCardsFromDeck = validCards.filter((c) =>
        deck.cards.includes(c)
      );
      const tempMinMax =
        deck.totalValidCards?.(this.playerCount, validCardsFromDeck) ??
        this.getTotalCards(validCardsFromDeck);

      minMaxCards[0] += tempMinMax[0];
      minMaxCards[1] += tempMinMax[1];

      if (tempMinMax[0] !== tempMinMax[1]) {
        validCards.forEach((c) => {
          if (c.probabilityFunc) {
            percent -=
              c.probabilityFunc(this.playerCount) *
              (1 / this.totalPossibleCards);
          }
        });
      }
    });

    if (minMaxCards[0] !== minMaxCards[1]) {
      this.totalValidCardsString = `${minMaxCards[0]}-${minMaxCards[1]}`;
    } else {
      this.totalValidCardsString = `${minMaxCards[0]}`;
    }

    this.percentage = (percent * 100).toFixed(4);
  }

  getTotalCards(cards: Card[]): number[] {
    const total = cards.reduce((prev, value) => prev + (value.count ?? 1), 0);
    return [total, total];
  }
}
