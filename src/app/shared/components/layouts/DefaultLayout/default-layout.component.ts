import { Component } from '@angular/core';

import { HeaderComponent } from '@app/shared/components/layouts/components/HeaderComponent/header.component';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  imports: [
    HeaderComponent
  ]
})
export class DefaultLayout {}
