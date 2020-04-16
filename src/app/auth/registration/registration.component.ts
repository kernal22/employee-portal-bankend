import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpMethodsService} from '../../services/http-method.service';

@Component({
    selector: "app-register",
    templateUrl: "registration.component.html"
})
export class RegisterComponent implements OnInit {
    public registerForm: FormGroup;
    
    constructor(private _fb: FormBuilder, private _http: HttpMethodsService) {

    }
    ngOnInit() {
        this.createForm();
    }

    private createForm() {
        this.registerForm = this._fb.group({
            emp_id: [null, [Validators.required]],
            emp_password: [null, [Validators.required]],
            emp_cpassword: [null, [Validators.required]],
            emp_email: [null, [Validators.required, Validators.email]],
            emp_name: [null, [Validators.required]]
        });
    }

    onRegister() {
        this._http._postCall('/register', this.registerForm.value).subscribe(data => {
            if(data.status) {
                let msg = data.msg;
            }
        }, err => {
            console.log(err);
        });
    }
}
