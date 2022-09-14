import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { AuthService } from '../../../../@core/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private readonly authService: AuthService,
    private router: Router) 
    { 
      this.signupForm = this.formBuilder.group({
        email: [null, [Validators.required, Validators.email]],
        userName: [null, Validators.required],
        password: [null, Validators.required]
      });
    }

  public onSignup() {
    const email = this.signupForm.get('email')!.value;
    const userName = this.signupForm.get('userName')!.value;
    const password = this.signupForm.get('password')!.value;
    this.authService.createUser(email, userName, password).pipe(
      switchMap(() => this.authService.loginUser(email, password)),
      ).subscribe(() => this.router.navigateByUrl('/posts'));
  }
}
