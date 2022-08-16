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

  public readonly isLoggedIn$: Observable<boolean>;
  public readonly isAdmin$: Observable<boolean>
  
  public constructor( 
    private readonly authService : AuthService,
    private router: Router) 
    {
    this.isLoggedIn$ = this.authService.isLoggedIn$.pipe(
    shareReplay(1));
    this.isAdmin$ = this.authService.isAdmin$.pipe(
    shareReplay(1));
  }

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['auth/login']);
  }
}
