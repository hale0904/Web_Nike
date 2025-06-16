import { Routes } from '@angular/router';
import { LoginPage } from '~/pages/login/login.component';
import { RegisterPage } from '~/pages/register/register.component';
import { ForgotPasswordPage } from '~/pages/forgot-pw/forgot-pw.component';
import { ForgotPasswordContinuePage } from '~/pages/forgot-pw-continue/forgot-pw-continuecomponent';

export const authRoutes: Routes = [
    { path: 'login', component: LoginPage, title: 'Sign In' },
    { path: 'register', component: RegisterPage, title: 'Sign Up'},
    { path: 'forgot-password', component: ForgotPasswordPage, title: 'Forgot Password'},
    { path: 'forgot-password-continue', component: ForgotPasswordContinuePage, title: 'Forgot Password'},
];
