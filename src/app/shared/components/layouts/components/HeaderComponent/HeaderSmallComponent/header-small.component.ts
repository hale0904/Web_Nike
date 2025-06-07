import { Component } from '@angular/core';

import { LogoSmallComponent } from '../LogoSmallComponent/logo-small.component';
import { MenuSmallComponent } from '../MenuSmallComponent/menu-small.component';

@Component({
  selector: 'app-header-small',
  standalone: true,
  templateUrl: './header-small.component.html',
  styleUrls: ['./header-small.component.scss'],
  imports: [
    LogoSmallComponent,
    MenuSmallComponent
  ]
})
export class HeaderSmallComponent {}
