import { Component } from "@angular/core";
import { HeaderComponent } from "~/app/shared/components/layouts/Header/header.component";

@Component ({
    selector : 'app-home',
    standalone: true,
    imports: [HeaderComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {}