import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-large',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule 
  ],
  templateUrl: './header-large.component.html',
  styleUrls: ['./header-large.component.scss'],
})
export class HeaderLargeComponent {
  searchQuery = '';

  menuItems = [
    { label: 'New & Featured', link: '/New & Featured' },
    { label: 'Men', link: '/men' },
    { label: 'Women', link: '/Women' },
    { label: 'Kids', link: '/kids' },
    { label: 'Sale', link: '/sale' }
  ];
}
