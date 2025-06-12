import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LogoLargeComponent } from '../LogoLargeComponent/logo-large.component';
import { MenuComponent } from '../MenuComponent/menu.component';
import { IconNavComponent } from '../IconNavComponent/icon-nav.component';
import { SearchBoxComponent } from '../SearchBoxComponent/search-box.component';

@Component({
    selector: 'app-header-large',
    standalone: true,
    imports: [
        LogoLargeComponent,
        MenuComponent,
        SearchBoxComponent,
        IconNavComponent,
        CommonModule,
        RouterModule,
        FormsModule
    ],
    templateUrl: './header-large.component.html',
    styleUrls: ['./header-large.component.scss']
})
export class HeaderLargeComponent {
    menuItems = [
        {
            label: 'New & Featured',
            link: '/New & Featured',
            children: [
                { label: 'Featured', link: '/products/Featured' },
                { label: 'New & Upcoming Drops', link: '/products/New&UpcomingDrops' },
                { label: 'New Arrivals', link: '/products/NewArrivals' },
                { label: 'Bestsellers', link: '/products/Bestsellers' },
                { label: 'Member Exclusive', link: '/products/MemberExclusive' },
                { label: 'Customise with Nike By You', link: '/products/CustomiseWithNikeByYou' }
            ]
        },
        {
            label: 'Men',
            link: '/men',
            children: [
                { label: 'All Clothing', link: '/products/AllClothing' },
                { label: 'Tops and T-Shirts', link: '/products/Tops&T-Shirts' },
                { label: 'Shorts', link: '/products/Shorts' },
                { label: 'Pants and Leggings', link: '/products/Pants&Leggings' },
                { label: 'Hoodies and Sweatshirts', link: '/products/Hoodies&Sweatshirts' },
                { label: 'Jackets and Gilets', link: '/products/Jackets&Gilets' },
                { label: 'Jerseys and Kits', link: '/products/Jerseys&Kits' },
                { label: 'Jordan', link: '/products/Jordan' }
            ]
        },
        {
            label: 'Women',
            link: '/Women',
            children: [
                { label: 'All Clothing', link: '/products/AllClothing' },
                { label: 'Performance Essentials', link: '/products/PerformanceEssentials' },
                { label: 'Tops and T-Shirts', link: '/products/Tops&T-Shirts' },
                { label: 'Sports Bras', link: '/products/SportsBras' },
                { label: 'Pants and Leggings', link: '/products/Pants&Leggings' },
                { label: 'Shorts', link: '/products/Shorts' },
                { label: 'Hoodies and Sweatshirts', link: '/products/Hoodies&Sweatshirts' },
                { label: 'Jackets and Gilets', link: '/products/Jackets&Gilets' },
                { label: 'Skirts and Dresses', link: '/products/Skirts&Dresses' },
                { label: 'Modest Wear', link: '/products/ModestWear' }
            ]
        },
        {
            label: 'Kids',
            link: '/kids',
            children: [
                { label: 'All Clothing', link: '/products/AllClothing' },
                { label: 'Tops and T-Shirts', link: '/products/Tops&T-Shirts' },
                { label: 'Shorts', link: '/products/Shorts' },
                { label: 'Pants and Leggings', link: '/products/Pants&Leggings' },
                { label: 'Hoodies and Sweatshirts', link: '/products/Hoodies&Sweatshirts' },
                { label: 'Jackets and Gilets', link: '/products/Jackets&Gilets' },
                { label: 'Jerseys and Kits', link: '/products/Jerseys&Kits' },
                { label: 'Jordan', link: '/products/Jordan' }
            ]
        },
        {
            label: 'Sale',
            link: '/sale',
            children: [
                { label: 'Sale & Offers', link: '/products/Sale&Offers' },
                { label: 'Shop All Sale', link: '/products/ShopAllSale' },
                { label: 'Bestsellers', link: '/products/Bestsellers' },
                { label: 'Last Chance', link: '/products/LastChance' }
            ]
        }
    ];
}
