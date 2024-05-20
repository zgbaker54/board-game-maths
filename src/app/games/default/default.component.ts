import { AfterViewInit, Component, Input, OnChanges } from '@angular/core';
import { gameList } from '../../metadata/metadata';
import { Game } from '../../shared/models/game.model';
import { RouterOutlet } from '@angular/router';
import { ExpansionsComponent } from '../../shared/components/expansions/expansions.component';
import { DeckComponent } from '../../shared/components/deck/deck.component';
import { DiceComponent } from '../../shared/components/dice/dice.component';
import { CommonModule } from '@angular/common';
import { GameService } from '../../shared/services/game.service';

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
export class DefaultComponent implements OnChanges {
  @Input() changeTrigger = 0;

  game!: Game;

  constructor(private gameService: GameService) {}

  ngOnChanges(): void {
    this.gameService.expansions = [];
    this.game =
      gameList.find((x) => x.routerLink === window.location.pathname)
        ?.metadata ?? gameList[0].metadata;
  }
}
