import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-large',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './menu-large.component.html',
  styleUrls: ['./menu-large.component.scss'],
})
export class MenuLargeComponent {
  menuItems = [
    { label: 'New & Featured', link: '/New & Featured' },
    { label: 'Men', link: '/men' },
    { label: 'Women', link: '/Women' },
    { label: 'Kids', link: '/kids' },
    { label: 'Sale', link: '/sale' }
  ];
}
