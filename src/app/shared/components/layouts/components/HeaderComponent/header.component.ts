import { Component } from "@angular/core";
import { HeaderLargeComponent } from "./HeaderLargeComponent/header-large.component";
import { HeaderSmallComponent } from "./HeaderSmallComponent/header-small.component";

@Component ({
    selector : 'app-header',
    standalone: true,
    imports:[
        HeaderSmallComponent,
        HeaderLargeComponent
    ],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {}