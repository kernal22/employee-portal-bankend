import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './registration/registration.component';

import {routing} from './auth.routing';

@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        RegisterComponent
    ],
    exports: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        routing,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
    ]
})
export class AuthModule {

}