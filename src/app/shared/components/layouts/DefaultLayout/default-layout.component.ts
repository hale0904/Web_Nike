import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@shared/components/layouts/components/HeaderComponent/header.component';
import { FooterComponent } from '@shared/components/layouts/components/FooterComponent/footer.component';

@Component({
    selector: 'app-default-layout',
    standalone: true,
    templateUrl: './default-layout.component.html',
    styleUrls: ['./default-layout.component.scss'],
    imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent]
})
export class DefaultLayout {
    isHeaderHidden = false;
    private lastScrollY = 0;
    private threshold = 5;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const currentScrollY = Math.floor(window.scrollY);

        if (currentScrollY === 0) {
            this.isHeaderHidden = false;
        } else if (
            currentScrollY > this.lastScrollY &&
            currentScrollY - this.lastScrollY > this.threshold
        ) {
            this.isHeaderHidden = true;
        } else if (
            currentScrollY < this.lastScrollY &&
            this.lastScrollY - currentScrollY > this.threshold
        ) {
            this.isHeaderHidden = false;
        }

        this.lastScrollY = currentScrollY;
    }
}
