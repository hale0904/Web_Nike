import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-section',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './featured.component.html',
    styleUrl: './featured.component.scss'
})
export class FeaturedComponent {
    @Input() title!: string;
    @Input() items: { label: string; link: string; imgURL: string; imgALT: string }[] = [];
}
