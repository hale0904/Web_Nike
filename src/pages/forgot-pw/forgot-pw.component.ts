import { Component } from '@angular/core';
import { FormComponent } from '@shared/components/FormComponent/form.component';

@Component({
    selector: 'app-forgotPw-page',
    standalone: true,
    imports: [FormComponent],
    templateUrl: './forgot-pw.component.html',
    styleUrl: './forgot-pw.component.scss'
})
export class ForgotPasswordPage {
    forms = [
    {
        home: 'Home',
        linkHome: '/',
        heading: 'FORGOT PASSWORD',
        description: '',
        fields: [
            { label: 'Email', name: 'email', value: '', placeholder: 'Enter email' },
        ],
        info: 'Please double check your information before submitting.',
        btn: 'Continue',
        link: '/auth/forgot-password-continue',
        linkText: 'Sign In'
    }
];

}
