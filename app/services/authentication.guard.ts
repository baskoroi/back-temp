import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";

import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthenticationService) {

        this.authService.isLoggedInObservable().subscribe((val) => {
            if (!val) this.router.navigate(["/login"]);
        });
    }

    canActivate() {
        return this.authService.isLoggedInObservable();
    }
}