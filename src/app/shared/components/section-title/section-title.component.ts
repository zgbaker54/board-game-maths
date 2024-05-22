import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule, DividerModule],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss',
})
export class SectionTitleComponent {
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() invertImage = false;
}
