import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem('id_token')) {
            return true;
        }

        this.router.navigate(['']);
        return false;
    }
}