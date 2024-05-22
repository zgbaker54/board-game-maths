import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { gameList } from '../../metadata/metadata';
import { Game } from '../../shared/models/game.model';
import { RouterOutlet } from '@angular/router';
import { ExpansionsComponent } from '../../shared/components/expansions/expansions.component';
import { DeckComponent } from '../../shared/components/deck/deck.component';
import { DiceComponent } from '../../shared/components/dice/dice.component';
import { CommonModule } from '@angular/common';
import { GameService } from '../../shared/services/game.service';
import { Subscription } from 'rxjs';
import { DiceSet } from '../../shared/models/dice.model';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ExpansionsComponent,
    DeckComponent,
    DiceComponent,
  ],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss',
})
export class DefaultComponent implements OnChanges, OnDestroy {
  @Input() changeTrigger = 0;

  subscriptions = new Subscription();

  game!: Game;
  diceSets: DiceSet[] = [];

  constructor(private gameService: GameService) {
    this.subscriptions.add(
      gameService.expansions$.subscribe(() => {
        if (this.game) {
          this.diceSets = this.gameService.expansionFilter(this.game.diceSets);
        } else {
          // Continue
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnChanges(): void {
    this.game =
      gameList.find((x) => x.routerLink === window.location.pathname)
        ?.metadata ?? gameList[0].metadata;
    this.gameService.expansions = [];
    this.diceSets = this.gameService.expansionFilter(this.game.diceSets);
  }
}
