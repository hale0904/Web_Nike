import { Routes } from '@angular/router';
import { LoginPage } from '~/pages/login/login.component';
import { RegisterPage } from '~/pages/register/register.component';

export const authRoutes: Routes = [
    { path: 'login', component: LoginPage, title: 'Sign In' },
    { path: 'register', component: RegisterPage, title: 'Sign Up'}
];
