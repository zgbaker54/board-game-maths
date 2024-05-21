import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { Card } from '../../../models/deck.model';
import { CommonModule } from '@angular/common';
import { SelectItemGroup } from 'primeng/api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, MultiSelectModule],
  templateUrl: './card-filter.component.html',
  styleUrl: './card-filter.component.scss',
})
export class CardFilterComponent implements OnChanges {
  @Input() allCards: Card[] = [];
  @Input() playerCount: number = 1;

  @Output() onChanges = new EventEmitter<Card[]>();

  tagGroups: SelectItemGroup[] = [];
  selectedTags: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['allCards']) {
      this.parseTags();
    }
    this.filterCards();
  }

  parseTags() {
    this.selectedTags = [];

    const tempTags = new Set<string>();
    const tempGroups = new Set<string>();

    this.allCards.forEach((card) => {
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
        .map((x) => ({ label: x.split(';')[0], value: x })),
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

  filterCards() {
    // Get an array of all valid cards that match the current player count and selected tags
    const validCards = this.allCards.filter((card) => {
      if (this.playerCount > 0 && (card.minPlayers ?? 1) > this.playerCount) {
        return false;
      }

      for (const tag of this.selectedTags) {
        if (card.tags.includes(tag) === false) {
          return false;
        } else {
          // continue
        }
      }
      return true;
    });

    this.onChanges.emit(validCards);
  }

  getTagsFormatted(tags: string[] | undefined): string {
    return (
      tags
        ?.map((x) => {
          const [tag, group] = x.split(';');
          return group ? `${group}: ${tag}` : tag;
        })
        ?.join('<small> AND </small>') ?? ''
    );
  }
}
