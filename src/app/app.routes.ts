import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/pages/main/main').then((m) => m.Main),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./core/pages/login/login').then((m) => m.Login),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
