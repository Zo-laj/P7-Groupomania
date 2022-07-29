import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RouterModule } from '@angular/router';
import { LikeBtnComponent } from './components/like-btn/like-btn.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    LandingPageComponent,
    LikeBtnComponent,
  ],
  exports: [
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    LandingPageComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    LikeBtnComponent
  ]
})

export class SharedModule { }
