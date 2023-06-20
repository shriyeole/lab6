import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tab4',
    loadComponent: () => import('./tab4/tab4.page').then( m => m.Tab4Page)
  },
  {
    path: 'placements',
    loadComponent: () => import('./placements/placements.page').then( m => m.PlacementsPage)
  },
  {
    path: 'calender',
    loadComponent: () => import('./calender/calender.page').then( m => m.CalenderPage)
  },
];
