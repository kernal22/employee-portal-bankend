import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpMethodsService} from '../../services/http-method.service';
import {AuthCookieHandlerService} from '../../services/auth-cookie-handler.service';

@Component({
    selector: "app-login",
    templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;

    constructor(private _fb: FormBuilder, private _http: HttpMethodsService, private _token: AuthCookieHandlerService, private _router: Router) {

    }
    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.loginForm = this._fb.group({
            empid: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required]]
        });
    }

    onLogin() {
        this._http._postCall('login', this.loginForm.value).subscribe(data => {
            if(data.status) {
                this._token.saveToken(data.token);
                this._router.navigate(['/user/dashboard']);
            }
        }, err => {
            console.log(err);
        })
    }
}