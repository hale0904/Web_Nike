import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-small',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-small.component.html',
  styleUrls: ['./menu-small.component.scss']
})
export class MenuSmallComponent {
  navItems = [
    { label: 'Find a Store', link: '/store' },
    { label: 'Help', link: '/help' },
    { label: 'Join us', link: '/register' },
    { label: 'Sign In', link: '/login' }
  ];
}
