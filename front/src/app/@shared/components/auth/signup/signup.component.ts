import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, EMPTY, switchMap, tap } from 'rxjs';
import { AuthService } from '../../../../@core/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public signupForm: FormGroup;
  public errorMsg: string;

  constructor(
    private formBuilder: FormBuilder, 
    private readonly authService: AuthService,
    private router: Router) 
    { 
      this.signupForm = this.formBuilder.group({
        email: [null, [Validators.required, Validators.email]],
        userName: [null, [Validators.required, Validators.minLength(3)]],
        password: [null, [Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_:;%^&*~`bc!@#.,?]{5,}$')
       ]]
      });
    }


  public onSignup() {
    const email = this.signupForm.get('email')!.value;
    const userName = this.signupForm.get('userName')!.value;
    const password = this.signupForm.get('password')!.value;

    this.authService.createUser(email, userName, password).pipe(
      catchError (error => {
        if(error.error.error.errors[0].message === "email must be unique") {
          this.errorMsg = "Cette addresse mail a déjà été utilisée "
        } else if(error.error.error.errors[0].message ==="userName must be unique") {
          this.errorMsg = "Ce nom d'utilisateur est déjà pris "
        }
        return EMPTY;
      }),
      switchMap(() => this.authService.loginUser(email, password)),
      ).subscribe(() => this.router.navigateByUrl('/posts'));
  }
}
