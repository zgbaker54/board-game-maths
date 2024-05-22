import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { Expansion } from '../../models/game.model';
import { GameService } from '../../services/game.service';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-expansions',
  standalone: true,
  imports: [CommonModule, FormsModule, MultiSelectModule],
  templateUrl: './expansions.component.html',
  styleUrl: './expansions.component.scss',
})
export class ExpansionsComponent {
  @Input() expansions: Expansion[] | undefined;

  selectedExpansions: number[] = [];

  constructor(private gameService: GameService) {
    gameService.expansions$.pipe(distinctUntilChanged()).subscribe((x) => {
      this.selectedExpansions = x;
    });
  }

  handleChanges() {
    this.gameService.expansions = this.selectedExpansions;
  }

  onMultiselectFocus() {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }
}
