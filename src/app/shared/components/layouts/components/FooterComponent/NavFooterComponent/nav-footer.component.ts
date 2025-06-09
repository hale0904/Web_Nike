import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.scss']
})
export class FooterNavComponent {
  @Input() title!: string; // Resources, Help, Company
  @Input() items: { label: string; link: string }[] = [];
}
