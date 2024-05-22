import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Card } from '../../../models/deck.model';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Unique } from '../../../helper';
import { ButtonModule } from 'primeng/button';
import { NameValue } from '../../../models/name-value.model';

type GlobalMatchType = 'any' | 'all';
type MatchType = 'all' | 'any' | 'none';

type Rule = { category?: string; matchType: MatchType; values?: string[] };

@Component({
  selector: 'app-card-filter-v2',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    DropdownModule,
    MultiSelectModule,
    ButtonModule,
  ],
  templateUrl: './card-filter-v2.component.html',
  styleUrl: './card-filter-v2.component.scss',
})
export class CardFilterV2Component implements OnChanges {
  @Input() allCards: Card[] = [];
  @Input() playerCount: number = 1;

  @Output() onChanges = new EventEmitter<{
    cards: Card[];
    categories: NameValue[];
    ruleText: string;
  }>();

  categories: NameValue[] = [];
  categoryValues: { [category: string]: string[] } = {};

  globalMatchOptions: NameValue<GlobalMatchType>[] = [
    { name: 'Match any of the following', value: 'any' },
    { name: 'Match all of the following', value: 'all' },
  ];
  globalMatch: GlobalMatchType = 'all';

  matchOptions: NameValue<MatchType>[] = [
    { name: 'All', value: 'all' },
    { name: 'Any', value: 'any' },
    { name: 'None', value: 'none' },
  ];

  rules: Rule[] = [{ matchType: 'all' }];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['allCards']) {
      this.parseCards();
      this.resetRules();
    }
    this.filter();
  }

  parseCards() {
    this.categoryValues = { name: [] };
    this.categories = [];

    this.allCards.forEach((card) => {
      Object.keys(card.properties).forEach((prop) => {
        if (this.categoryValues[prop]) {
          this.categoryValues[prop].push(...card.properties[prop]);
        } else {
          this.categoryValues[prop] = [...card.properties[prop]];
        }
      });
      this.categoryValues['name'].push(card.name ?? '(BLANK)');
    });

    Object.keys(this.categoryValues).forEach((key) => {
      this.categoryValues[key] = Unique(this.categoryValues[key]);
      this.categoryValues[key].sort((a, b) => a.localeCompare(b));
    });

    this.categories = Object.keys(this.categoryValues).map((x) => ({
      name: this.formatText(x),
      value: x,
    }));

    this.categories.sort((a, b) => a.name.localeCompare(b.name));
  }

  resetRules() {
    for (let i = this.rules.length - 1; i >= 0; i--) {
      let toDelete = false;
      const rule = this.rules[i];
      if (
        rule.category &&
        this.categories.find((x) => x.value === rule.category) === undefined
      ) {
        toDelete = true;
      }

      if(rule.category && rule.values) {
        rule.values = rule.values.filter(v => {
          return this.categoryValues[rule.category!].includes(v);
        })
      }

      if (toDelete) {
        this.rules.splice(i, 1);
      }
    }

    if (this.rules.length === 0) {
      this.rules = [{ matchType: 'all' }];
    }
  }

  filter() {
    const validRules = this.rules.filter(
      (r) => r.category && (r.values?.length ?? 0) > 0
    );

    if (validRules.length === 0) {
      this.onChanges.emit({
        cards: this.allCards,
        categories: this.categories.filter((x) => x.value !== 'name'),
        ruleText: 'any card',
      });
      return;
    } else {
      // Continue
    }

    const validCards = this.allCards.filter((card) => {
      const ruleResults = validRules.map((rule) => {
        let property = card.properties?.[rule.category!];

        if (rule.category === 'name') {
          property = [card.name ?? '(BLANK)'];
        } else {
          // continue
        }

        switch (rule.matchType) {
          case 'all':
            return rule.values?.every((v) => property?.includes(v) ?? false);
          case 'any':
            return rule.values?.some((v) => property?.includes(v) ?? false);
          case 'none':
            return (
              rule.values?.some((v) => property?.includes(v) ?? false) === false
            );
        }
      });

      if (this.globalMatch === 'all') {
        return ruleResults.every((x) => x === true);
      } else if (this.globalMatch === 'any') {
        return ruleResults.some((x) => x === true);
      } else {
        return false;
      }
    });

    this.onChanges.emit({
      cards: validCards,
      categories: this.categories.filter((x) => x.value !== 'name'),
      ruleText: this.getRuleText(),
    });
  }

  addRule() {
    this.rules.push({ matchType: 'all' });
  }

  deleteRule(index: number) {
    this.rules.splice(index, 1);

    if (this.rules.length === 0) {
      this.rules.push({ matchType: 'all' });
    } else {
      // continue
    }

    this.filter();
  }

  formatText(text: string): string {
    const words = text.split(' ');

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(' ');
  }

  formatValueList(values: string[] | undefined): string {
    return values?.join(', ') ?? '';
  }

  onMultiselectFocus() {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  getCategoryName(categoryValue: string): string {
    return this.categories.find((x) => x.value === categoryValue)?.name ?? '';
  }

  getRuleText(): string {
    let rules: string[] = [];

    this.rules.forEach((rule) => {
      if (rule.category && rule.values) {
        let ruleText = `<small>WHERE</small> ${this.getCategoryName(
          rule.category
        )} <small>IS</small> `;
        if (rule.matchType === 'all') {
          ruleText += rule.values.join(' <small>AND</small> ');
        } else if (rule.matchType === 'any') {
          ruleText += rule.values.join(' <small>OR</small> ');
        } else {
          ruleText +=
            '<small>NOT</small> ' + rule.values.join(' <small>OR</small> ');
        }
        rules.push(ruleText);
      } else {
        // Skip rule
      }
    });

    let ruleText = '';
    if (this.globalMatch === 'all') {
      ruleText = rules.join(' <small>AND</small> ');
    } else {
      ruleText = rules.join(' <small>OR</small> ');
    }

    return `a card ${ruleText}`;
  }
}
