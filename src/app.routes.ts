import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Routes/home.routes').then(m => m.homeRoutes)
  },
  {
    path: 'auth',
    loadChildren: () => import('./Routes/auth.routes').then(m => m.authRoutes)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
