import { Component, Input } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component ({
    selector: 'app-banner',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss'
})

export class BannerComponent {
    @Input() banners: {
        imageUrl: string,
        altText: string, 
        heading: string, 
        subHeading: string,
        description: string,
        linkUrl: string,
        linkText: string
    }[] = [];
};