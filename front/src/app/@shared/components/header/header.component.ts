import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, shareReplay } from 'rxjs';
import { AuthService } from '../../../@core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public isLoggedIn$ : Observable<boolean>;

  public constructor( 
    private authService : AuthService,
    private router: Router) 
    {
    this.isLoggedIn$ = this.authService.isAuth$.pipe(
      shareReplay(1));
  }

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['auth/login']);
  }
}
