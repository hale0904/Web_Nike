import { Component } from '@angular/core';
import { FooterNavComponent } from './NavFooterComponent/nav-footer.component';
import { InfoFooterComponent } from './InfoComponent/info.component';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [FooterNavComponent, InfoFooterComponent],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}
