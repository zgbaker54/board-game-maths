import { Routes } from '@angular/router';
import { MonopolyDealComponent } from './games/monopoly-deal/monopoly-deal.component';
import { SevenWondersComponent } from './games/seven-wonders/seven-wonders.component';

export const routes: Routes = [
  { component: MonopolyDealComponent, path: 'monopoly-deal' },
  { component: SevenWondersComponent, path: '7-wonders' },

  { path: '**', component: SevenWondersComponent }
];
