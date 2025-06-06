import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule 
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  slides = [
    {
      title: 'New Styles On Sale: Up To 40% Off',
      linkText: 'Shop All Our New Markdowns',
      linkUrl: '/sale',
    },
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

  banner = {
  imageUrl: 'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_1946,c_limit/f5654862-ef4d-4f10-85f7-7c11f1fe1f8f/nike-just-do-it.png',
  altText: 'Nike. Just Do It',
  heading: 'FEAR NOTHING.',
  subHeading: 'BUILT ON JOY. BACKED BY FORCE.',
  description: 'The Brazil 2025 National Team Kit has arrived.',
  linkUrl: '/shop',
  linkText: 'Shop',
  };

}
