import {Injectable} from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class AuthCookieHandlerService {
    constructor() {}

    getToken(): string {
        return window.sessionStorage['X-UserToken'];
      }
    
      saveToken(token: string) {
        window.sessionStorage['X-UserToken'] = token;
      }
    
      destroyToken() {
        window.sessionStorage.removeItem('X-UserToken');
      }
}