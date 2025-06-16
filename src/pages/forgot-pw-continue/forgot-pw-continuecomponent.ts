import { Component } from '@angular/core';
import { FormComponent } from '@shared/components/FormComponent/form.component';

@Component({
    selector: 'app-forgotPwCon-page',
    standalone: true,
    imports: [FormComponent],
    templateUrl: './forgot-pw-continue.component.html',
    styleUrl: './forgot-pw-continue.component.scss'
})
export class ForgotPasswordContinuePage {
    forms = [
    {
        home: 'Home',
        linkHome: '/',
        heading: 'FORGOT PASSWORD',
        description: '',
        fields: [
            { label: 'Password', name: 'passWord', value: '', placeholder: 'Enter Password' },
            { label: 'Re-enter Password', name: 'rePassWord', value: '', placeholder: 'Re-enter Password' }
        ],
        info: 'Please double check your information before submitting.',
        btn: 'Confirm',
        link: '/auth/login',
        linkText: 'Sign In'
    }
];

}
