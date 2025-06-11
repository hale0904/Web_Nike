import { Routes } from '@angular/router';
import { DefaultLayout } from '@shared/components/layouts/DefaultLayout/default-layout.component';
import { HomePage } from '~/pages/home/home.component';
import { CartPage } from '~/pages/cart/cart.component';
import { ProductPage } from '~/pages/product/product.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      { path: '', component: HomePage, title: 'Home' },
      { path: 'cart', component: CartPage, title: 'Cart' },
      { path: 'product', component: ProductPage, title: 'Product' }
    ]
  }
];
