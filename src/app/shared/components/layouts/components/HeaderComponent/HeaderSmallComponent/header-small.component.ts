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
    { label: 'Help', link: '/help',
      children: [
      { label: 'Order Status', link: '/products/Order Status' },
      { label: 'Dispatch and Delivery', link: '/products/Dispatch&Delivery' },
      { label: 'Returns', link: '/products/Returns' },
      { label: 'Contact Us', link: '/products/ContactUs' }
      ] 
     },
    { label: 'Join us', link: '/register' },
    { label: 'Sign In', link: '/auth/login' }
  ];
}
