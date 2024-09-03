import { Routes } from '@angular/router';
import { SevenWondersComponent } from './games/seven-wonders/seven-wonders.component';
import { EmptyComponent } from './games/empty/empty.component';
import { NemesisComponent } from './games/nemesis/nemesis.component';

export const routes: Routes = [
  { component: SevenWondersComponent, path: '7-wonders' },
  { component: NemesisComponent, path: 'nemesis' },

  { path: '', redirectTo: '/basic', pathMatch: 'full' },
  { path: '**', component: EmptyComponent },
];
