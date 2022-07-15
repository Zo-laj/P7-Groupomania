import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: '../auth/signup/signup.component.html',
  styleUrls: ['../auth/signup/signup.component.scss']
})
export class SignupComponent {

  public signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private readonly authService: AuthService,
    private router: Router) { }

  public ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  public onSignup() {
    const email = this.signupForm.get('email')!.value;
    const password = this.signupForm.get('password')!.value;
    this.authService.createUser(email, password).pipe(
      tap(() => this.router.navigateByUrl('/posts'))
      ).subscribe();
  }
}
