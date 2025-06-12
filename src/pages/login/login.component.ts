import { Component } from '@angular/core';
import { FormComponent } from '@shared/components/FormComponent/form.component';

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [FormComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginPage {}
