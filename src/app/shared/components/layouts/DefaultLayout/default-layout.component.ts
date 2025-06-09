import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@shared/components/layouts/components/HeaderComponent/header.component';
import { FooterComponent } from '@shared/components/layouts/components/FooterComponent/footer.component';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ]
})
export class DefaultLayout {}
