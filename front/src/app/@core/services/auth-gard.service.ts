import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.authService.isAuth$.pipe(
        take(1),
        tap(auth => {
          if (!auth) {
            this.router.navigate(['auth/login']);
            }
        })
      );
  }
}
