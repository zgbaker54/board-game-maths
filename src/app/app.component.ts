import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonopolyDealComponent } from './games/monopoly-deal/monopoly-deal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, MonopolyDealComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'board-game-maths';
}
