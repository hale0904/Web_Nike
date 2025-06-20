import { Component } from '@angular/core';
import { FormComponent } from '@shared/components/FormComponent/form.component';

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [FormComponent],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
})
export class RegisterPage {
    forms = [
    {
        home: 'Home',
        linkHome: '/',
        heading: 'SIGN UP',
        description: 'Please fill your information',
        fields: [
            { label: 'Email', name: 'email', value: '', placeholder: 'Enter email' },
            { label: 'Password', name: 'passWord', value: '', placeholder: 'Enter Password' },
            { label: 'Re-enter Password', name: 'rePassWord', value: '', placeholder: 'Re-enter Password' }
        ],
        info: 'Please double check your information before submitting.',
        btn: 'Sign In',
        link: '/auth/login',
        linkText: 'Sign Up'
    }
];

}
