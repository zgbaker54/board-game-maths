import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { Router, RouterOutlet } from '@angular/router';

type GameItem = {
  label: string;
  routerLink: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'board-game-maths';
  games: GameItem[] = [
    {
      label: 'Monopoly Deal',
      routerLink: '/monopoly-deal',
    },
    {
      label: '7 Wonders',
      routerLink: '/7-wonders',
    },
    {
      label: 'Here to Slay',
      routerLink: '/here-to-slay',
    },
  ];

  selectedGame: GameItem = this.games[0];

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.games.sort((a, b) => a.label.localeCompare(b.label));
    this.selectedGame =
      this.games.find((x) => x.routerLink === window.location.pathname) ??
      this.games[0];
  }

  gameClicked(game: GameItem) {
    this.router.navigateByUrl(game.routerLink);
  }
}
