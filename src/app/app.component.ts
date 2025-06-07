import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CartComponent } from '~/pages/cart/cart.component';
import { HomeComponent } from '~/pages/home/home.component';

import { DefaultLayout } from '@shared/components/layouts/DefaultLayout/default-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DefaultLayout,
    HomeComponent,
    CartComponent,
    RouterOutlet, 
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class App {
  protected title = 'my-app';
}
