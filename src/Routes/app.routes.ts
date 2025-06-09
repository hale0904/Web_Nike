import { Routes } from '@angular/router';
import { DefaultLayout } from '@shared/components/layouts/DefaultLayout/default-layout.component';
import { HomeComponent } from '~/pages/home/home.component';
import { CartComponent } from '~/pages/cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      { path: '', component: HomeComponent },
      { path: 'cart', component: CartComponent }
    ]
  }
];
