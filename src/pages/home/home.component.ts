import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BannerComponent } from '@shared/components/BannerComponent/banner.component';
import { FeaturedComponent } from '~/app/shared/components/FeaturedComponent/featured.component';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [BannerComponent, FeaturedComponent, CommonModule, RouterModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomePage {
    slides = [
        {
            title: 'New Styles On Sale: Up To 40% Off',
            linkText: 'Shop All Our New Markdowns',
            linkUrl: '/sale'
        }
        // {
        //   title: 'Summer Collection: Up To 50% Off',
        //   linkText: 'Discover the Collection',
        //   linkUrl: '/summer',
        // },
        // {
        //   title: 'Flash Sale: Today Only!',
        //   linkText: 'Shop Now',
        //   linkUrl: '/flash-sale',
        // },
    ];
}
