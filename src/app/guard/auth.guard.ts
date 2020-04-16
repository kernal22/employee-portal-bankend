import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import {AuthCookieHandlerService} from '../services/auth-cookie-handler.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivateChild {

    private redirectUrl: string = '/login';
	constructor(private router: Router, private _auth: AuthCookieHandlerService){}

	canActivateChild(): boolean {

		if(! this._auth.getToken()){
			this.router.navigateByUrl(this.redirectUrl);
			return false;
		}
		return true;
	}
}