import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LogoLargeComponent } from '../LogoLargeComponent/logo-large.component';
import { MenuComponent } from '../MenuComponent/menu.component';
import { IconNavComponent } from '../IconNavComponent/icon-nav.component';
import { SearchBoxComponent } from '../SearchBoxComponent/search-box.component';

@Component({
  selector: 'app-header-large',
  standalone: true,
  imports: [
    LogoLargeComponent,
    MenuComponent,
    SearchBoxComponent,
    IconNavComponent,
    CommonModule,
    RouterModule,
    FormsModule 
  ],
  templateUrl: './header-large.component.html',
  styleUrls: ['./header-large.component.scss'],
})
export class HeaderLargeComponent {
  menuItems = [
    { label: 'New & Featured', link: '/New & Featured' },
    { label: 'Men', link: '/men' },
    { label: 'Women', link: '/Women' },
    { label: 'Kids', link: '/kids' },
    { label: 'Sale', link: '/sale' }
  ];
}
