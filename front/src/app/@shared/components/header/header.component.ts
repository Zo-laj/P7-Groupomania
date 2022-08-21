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
  
  public constructor( 
    private readonly authService : AuthService,
    private router: Router) {}

  public onLogout() : void {
    this.authService.logoutUser();
    this.router.navigate(['auth/login']);
  }
}
