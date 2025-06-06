import { Routes } from '@angular/router';
import { CartComponent } from '~/pages/cart/cart.component';
import { HomeComponent } from '~/pages/home/home.component';

export const routes: Routes = [
    {
        // Home
        path: '', component: HomeComponent
    },
    {
        // Cart
        path: 'cart', component: CartComponent
    }
];
