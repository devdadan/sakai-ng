import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from 'src/app/demo/service/auth.services'; 

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
      if (localStorage.getItem('authToken')) {
        return true;
      } else {
        this.router.navigate(['/auth/login']);
        return false;
      }
    }
  }