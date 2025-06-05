import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-header-small',
  standalone: true,
  templateUrl: './header-small.component.html',
  styleUrls: ['./header-small.component.scss'],
  imports: [
    CommonModule,
    RouterModule 
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
