import { Component } from '@angular/core';

import { LogoSmallComponent } from '../LogoSmallComponent/logo-small.component';
import { MenuComponent } from '../MenuComponent/menu.component';

@Component({
  selector: 'app-header-small',
  standalone: true,
  templateUrl: './header-small.component.html',
  styleUrls: ['./header-small.component.scss'],
  imports: [
    LogoSmallComponent,
    MenuComponent
  ]
})
export class HeaderSmallComponent {
  navItems = [
    { label: 'Find a Store', link: '/store' },
    { label: 'Help', link: '/help' },
    { label: 'Join us', link: '/register' },
    { label: 'Sign In', link: '/login' }
  ];
}
