import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean> | boolean | UrlTree {

    if (this.authService.isLoggedIn) {
      return true;
    } else {
      return this.router.parseUrl('/admin/login');
    }
  }
}
