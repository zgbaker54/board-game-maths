import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { gameList } from './metadata/metadata';
import { DefaultComponent } from './games/default/default.component';

type GameItem = {
  label: string;
  routerLink: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, DefaultComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  games: GameItem[] = gameList;
  selectedGame: GameItem = this.games[0];
  gameChanged = 0;

  nonGame = false;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.selectedGame =
      this.games.find((x) => x.routerLink === window.location.pathname) ??
      this.games[0];
    this.games.sort((a, b) => a.label.localeCompare(b.label));
    this.gameChanged++;
  }

  gameClicked(game: GameItem) {
    this.router.navigateByUrl(game.routerLink);
    this.gameChanged++;
    this.nonGame = false;
  }

  cameraClicked() {
    this.router.navigateByUrl('/camera');
    this.nonGame = true;
  }
}
