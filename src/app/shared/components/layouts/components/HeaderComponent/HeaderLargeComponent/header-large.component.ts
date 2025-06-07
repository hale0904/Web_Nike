import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LogoLargeComponent } from '../LogoLargeComponent/logo-large.component';
import { MenuLargeComponent } from '../MenuLargeComponent/menu-large.component';
import { IconNavComponent } from '../IconNavComponent/icon-nav.component';
import { SearchBoxComponent } from '../SearchBoxComponent/search-box.component';

@Component({
  selector: 'app-header-large',
  standalone: true,
  imports: [
    LogoLargeComponent,
    MenuLargeComponent,
    SearchBoxComponent,
    IconNavComponent,
    CommonModule,
    RouterModule,
    FormsModule 
  ],
  templateUrl: './header-large.component.html',
  styleUrls: ['./header-large.component.scss'],
})
export class HeaderLargeComponent {}
