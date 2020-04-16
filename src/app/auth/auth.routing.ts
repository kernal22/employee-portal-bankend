import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './registration/registration.component';

export const routes: Routes = [
        {
            path: '',
            component: AuthComponent,
            children: [
                {path: 'login', component: LoginComponent},
                {path: 'register', component: RegisterComponent},
                {path: '', redirectTo: 'login'},
            ]
        }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);