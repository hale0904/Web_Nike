import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-form',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule, // thêm FormsModule để dùng [(ngModel)]
        RouterModule // nếu bạn có điều hướng sau khi submit
    ],
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {
    // // Dữ liệu form giả lập
    // forms = [
    //     {
    //         heading: 'Register',
    //         description: 'Please enter your information',
    //         info: 'All fields are required.',
    //         linkText: 'Submit',
    //         linkUrl: '/success', // Sau khi submit có thể điều hướng
    //         fields: [
    //             { label: 'Email', name: 'email', placeholder: 'Enter email', value: '' },
    //             { label: 'Name', name: 'name', placeholder: 'Enter name', value: '' }
    //         ]
    //     },
    //     {
    //         heading: 'Login',
    //         description: 'Login to your account',
    //         info: 'Please provide credentials.',
    //         linkText: 'Login',
    //         linkUrl: '/dashboard',
    //         fields: [
    //             { label: 'Username', name: 'username', placeholder: 'Enter username', value: '' },
    //             { label: 'Password', name: 'password', placeholder: 'Enter password', value: '' }
    //         ]
    //     }
    // ];

    // constructor(private router: Router) {}

    // onSubmit(form: any) {
    //     console.log('Form submitted:', form);
    //     // Điều hướng sau khi submit
    //     this.router.navigateByUrl(form.linkUrl);
    // }
}
