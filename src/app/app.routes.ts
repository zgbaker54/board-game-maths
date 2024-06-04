import { Routes } from '@angular/router';
import { SevenWondersComponent } from './games/seven-wonders/seven-wonders.component';
import { EmptyComponent } from './games/empty/empty.component';
import { CardCameraComponent } from './card-camera/card-camera.component';

export const routes: Routes = [
  { component: SevenWondersComponent, path: '7-wonders' },

  {component: CardCameraComponent, path: 'camera'},

  { path: '', redirectTo: '/basic', pathMatch: 'full' },
  { path: '**', component: EmptyComponent },
];
