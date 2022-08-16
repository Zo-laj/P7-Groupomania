import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = this.authService.getcurrentUser();
      if (currentUser) {
          // check if route is restricted by role
          const decodedToken = JSON.parse(atob(currentUser.token!.split('.')[1]))
          if (route.data['roles'] && route.data['roles'].indexOf(decodedToken.userRole) === -1) {
              // role not authorised so redirect to home page
              this.router.navigate(['/']);
              return false;
          }
          return true;
      }
      this.router.navigate(['auth/login'], { queryParams: { returnUrl: state.url } });
      return false;
  }
}
