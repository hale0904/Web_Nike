import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() items: { 
    label: string, 
    link: string, 
    children?: {
      label: string,
      link: string
    } [];
  }[] = [];
  @Input() type: 'large' | 'small' = 'large';
}
