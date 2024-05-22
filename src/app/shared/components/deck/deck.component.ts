import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Card, Deck } from '../../models/deck.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { SelectItem } from 'primeng/api';
import { Game } from '../../models/game.model';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { CardsCount, Unique, nChooseK } from '../../helper';
import { GameService } from '../../services/game.service';
import { Subscription } from 'rxjs';
import { CardFilterComponent } from './card-filter/card-filter.component';
import { CardFilterV2Component } from './card-filter-v2/card-filter-v2.component';

@Component({
  selector: 'app-deck',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    DropdownModule,
    SectionTitleComponent,
    CardFilterComponent,
    CardFilterV2Component,
  ],
  templateUrl: './deck.component.html',
  styleUrl: './deck.component.scss',
})
export class DeckComponent implements OnChanges, OnDestroy {
  @Input() game!: Game;

  subscriptions = new Subscription();

  expansions: number[] = [];

  variesByPlayerCount = false;
  playerCounts: number[] = [];
  playerCount = 0;

  decks: SelectItem[] = [];
  selectedDeckId!: number;
  selectedDecks: Deck[] = [];

  allCards: Card[] = [];
  validCards: Card[] = [];

  drawCounts: number[] = [];
  selectedDrawCount = 1;

  totalValidCardsString = '';
  totalPossibleCards = 0;

  percentage = '100';

  constructor(gameService: GameService) {
    this.subscriptions.add(
      gameService.expansions$.subscribe((x) => {
        this.expansions = x;
        this.ngOnChanges();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnChanges(): void {
    if (this.game === undefined) {
      return;
    }

    this.playerCounts = [];
    for (let i = this.game.minPlayers; i <= this.game.maxPlayers; i++) {
      this.playerCounts.push(i);
    }
    this.playerCount = this.game.maxPlayers;

    // Get deck ids filtering out expansions
    const deckIds = Unique(
      this.game.decks
        .filter(
          (x) =>
            x.expansionId === undefined ||
            this.expansions.includes(x.expansionId)
        )
        .map((x) => x.id)
    );

    // Get list of decks for the dropdown
    this.decks = deckIds.map((id) => {
      const d = this.game.decks.find(
        (x) =>
          x.id === id &&
          (x.expansionId === undefined ||
            this.expansions.includes(x.expansionId))
      );
      return { value: d!.id, label: d!.name };
    });
    this.game.decks.sort((a, b) => a.id - b.id);
    this.selectedDeckId = this.game.decks[0].id;

    this.selectDeck();
    this.fillDrawCounts();
    this.handleChanges();
  }

  selectDeck() {
    this.selectedDecks = this.game.decks.filter(
      (x) =>
        x.id === this.selectedDeckId &&
        (x.expansionId === undefined || this.expansions.includes(x.expansionId))
    );
    this.allCards = this.selectedDecks.map((x) => x.cards).flat();

    this.allCards.forEach((card) => {
      this.variesByPlayerCount = card.minPlayers
        ? true
        : this.variesByPlayerCount;
    });
  }

  fillDrawCounts() {
    this.selectedDrawCount =
      this.selectedDecks.find((x) => x.expansionId === undefined)?.pick ?? 1;

    let maxPick = Math.max(
      1,
      this.selectedDrawCount,
      ...(this.selectedDecks
        .map((x) => x.pickMax)
        .filter((x) => x !== undefined) as number[])
    );
    let minPick = Math.min(
      1,
      this.selectedDrawCount,
      ...(this.selectedDecks
        .map((x) => x.pickMin)
        .filter((x) => x !== undefined) as number[])
    );
    minPick = Math.max(1, minPick);

    this.drawCounts = [];
    for (let i = minPick; i <= maxPick; i++) {
      this.drawCounts.push(i);
    }

    const expansionDecks = this.selectedDecks.filter(
      (x) => x.expansionId !== undefined
    );
    if (expansionDecks.length > 0) {
      this.selectedDrawCount = Math.max(
        this.selectedDrawCount,
        ...(expansionDecks
          .filter((x) => x.pick !== undefined)
          .map((x) => x.pick) as number[])
      );
    }
  }

  onValidCardsChange(validCards: Card[]) {
    this.validCards = validCards;
    this.handleChanges();
  }

  handleChanges(): void {
    // Get card count from valid card array
    let totalValidCards = CardsCount(this.validCards);

    // Get card count from entire deck(s)
    this.totalPossibleCards = CardsCount(
      this.allCards.filter((card) => {
        if (this.playerCount > 0 && (card.minPlayers ?? 1) > this.playerCount) {
          return false;
        }
        return true;
      })
    );

    // Apply total card count adjustment for decks where some cards are optional
    this.selectedDecks.forEach((deck) => {
      if (deck.totalCardsAdjust) {
        this.totalPossibleCards += deck.totalCardsAdjust(this.playerCount);
      }
    });

    // Apply valid card count adjustment for decks where some cards are optional
    if (this.selectedDecks.some((deck) => deck.totalValidCards)) {
      totalValidCards = 0;
      this.selectedDecks.forEach((deck) => {
        if (deck.totalValidCards) {
          totalValidCards += deck.totalValidCards(
            this.playerCount,
            this.validCards
          )[1];
        }
      });
    }

    // Get number of invalid cards
    const notValid = this.totalPossibleCards - totalValidCards;

    // Calculate P(invalid for all draws)
    const drawX = nChooseK(this.totalPossibleCards, this.selectedDrawCount);
    let invalidX: number;
    if (notValid <= 0) {
      invalidX = 0;
    } else {
      invalidX = nChooseK(notValid, this.selectedDrawCount);
    }

    // P(valid) = 1 - P(invalid for all draws)
    let percent = 1 - invalidX / drawX;

    // Calculate the min and max number of valid cards that can be included in deck
    const minMaxCards = [0, 0];
    this.selectedDecks.forEach((deck) => {
      const validCardsFromDeck = this.validCards.filter((c) =>
        deck.cards.includes(c)
      );
      const tempMinMax =
        deck.totalValidCards?.(this.playerCount, validCardsFromDeck) ??
        this.getTotalCards(validCardsFromDeck);

      minMaxCards[0] += tempMinMax[0];
      minMaxCards[1] += tempMinMax[1];

      if (tempMinMax[0] !== tempMinMax[1]) {
        this.validCards.forEach((c) => {
          if (deck.cardProbabilityFunc) {
            percent -=
              deck.cardProbabilityFunc(this.playerCount, c) *
              (1 / this.totalPossibleCards);
          }
        });
      }
    });

    // Get string for valid card count, range is shown when some cards are optional
    if (minMaxCards[0] !== minMaxCards[1]) {
      this.totalValidCardsString = `${minMaxCards[0]}-${minMaxCards[1]}`;
    } else {
      this.totalValidCardsString = `${minMaxCards[0]}`;
    }

    // Format probability percent
    this.percentage = (percent * 100).toFixed(4);
  }

  getTotalCards(cards: Card[]): number[] {
    const total = CardsCount(cards);
    return [total, total];
  }
}
