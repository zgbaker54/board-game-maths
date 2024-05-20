import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
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
import { CardsCount, Unique } from '../../helper';
import { GameService } from '../../services/game.service';
import { Subscription } from 'rxjs';

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
export class DeckComponent implements OnChanges, OnDestroy {
  @Input() game!: Game;

  subscriptions = new Subscription();

  expansions: number[] = [];

  variesByPlayerCount = false;
  playerCounts: number[] = [];
  playerCount = 0;

  tagGroups: SelectItemGroup[] = [];

  decks: SelectItem[] = [];
  selectedDeckId!: number;
  selectedDecks: Deck[] = [];
  selectedTags: string[] = [];

  allCards: Card[] = [];

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
    this.selectedDeckId = this.game.decks[0].id;

    this.selectDeck();
    this.fillDrawCounts();
    this.handleChanges();
  }

  selectDeck() {
    this.selectedTags = [];

    const tempTags = new Set<string>();
    const tempGroups = new Set<string>();

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

  handleChanges(): void {
    // Get an array of all valid cards that match the current player count and selected tags
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

    // Get card count from valid card array
    let totalValidCards = CardsCount(validCards);

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
            validCards
          )[1];
        }
      });
    }

    // Get number of invalid cards
    const notValid = this.totalPossibleCards - totalValidCards;

    // Calculate P(invalid for all draws)
    const drawX = combinations(this.totalPossibleCards, this.selectedDrawCount);
    let invalidX: number;
    if (notValid <= 0) {
      invalidX = 0;
    } else {
      invalidX = combinations(notValid, this.selectedDrawCount);
    }

    // P(valid) = 1 - P(invalid for all draws)
    let percent = 1 - invalidX / drawX;

    // Calculate the min and max number of valid cards that can be included in deck
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
