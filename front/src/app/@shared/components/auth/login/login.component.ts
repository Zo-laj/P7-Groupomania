import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../../../../@core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  public loginForm: FormGroup;

  public constructor(
    private formBuilder: FormBuilder, 
    private readonly authService: AuthService,
    private router: Router) 
    { 
      this.loginForm = this.formBuilder.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, Validators.required]
      });
    }

  public onLogin() {
    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;
    this.authService.loginUser(email, password).pipe(
      tap(() => this.router.navigateByUrl('/posts'))
      ).subscribe();
  }

}
