import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from '~/pages/cart/cart.component';
import { HomeComponent } from '~/pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
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
