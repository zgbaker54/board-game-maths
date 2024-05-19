import { Component, Input } from '@angular/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [DividerModule],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss',
})
export class SectionTitleComponent {
  @Input() title = '';
}
