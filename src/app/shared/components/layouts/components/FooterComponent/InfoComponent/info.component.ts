import { Component } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component ({
    selector: 'app-info-footer',
    standalone: true,
    imports: [
        RouterModule, CommonModule
    ],
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss'],
})

export class InfoFooterComponent {
  links = [
    { label: 'Terms of Sale', path: '/terms-sale' },
    { label: 'Terms of Use', path: '/terms-use' },
    { label: 'Nike Privacy Policy', path: '/privacy-policy' }
  ];
}

