import { Component } from '@angular/core';
import { FormComponent } from '@shared/components/FormComponent/form.component';
import { FormConfig } from '@shared/models/form-config';

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [FormComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginPage {
    forms: FormConfig[] = [
        {
            home: 'Home',
            linkHome: '/',
            heading: 'SIGN IN',
            description: 'Enter your email and password to sign in.',
            fields: [
                { label: 'Email', name: 'email', value: '', placeholder: 'Enter email' },
                { label: 'Password', name: 'passWord', value: '', placeholder: 'Enter Password' },
            ],
            info: 'By continuing, I agree to Nike is Privacy Policy and Terms of Use.',
            btn: 'Sign In',
            link: '/auth/forgot-password',
            linkText: 'Forgor password?'
        }
    ];
}
