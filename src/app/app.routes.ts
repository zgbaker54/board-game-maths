import { Routes } from '@angular/router';
import { MonopolyDealComponent } from './games/monopoly-deal/monopoly-deal.component';
import { SevenWondersComponent } from './games/seven-wonders/seven-wonders.component';
import { HereToSlayComponent } from './games/here-to-slay/here-to-slay.component';

export const routes: Routes = [
  { component: MonopolyDealComponent, path: 'monopoly-deal' },
  { component: SevenWondersComponent, path: '7-wonders' },
  { component: HereToSlayComponent, path: 'here-to-slay' },

  { path: '**', component: SevenWondersComponent }
];
