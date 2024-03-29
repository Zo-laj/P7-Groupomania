import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RouterModule } from '@angular/router';
import { LikeBtnComponent } from './components/like-btn/like-btn.component';
import { HttpClientModule } from '@angular/common/http';
import { IsAdminDirective } from './directives/is-admin.directive';
import { IsLoggedInDirective } from './directives/is-logged-in.directive';
import { IsLoggedOutDirective } from './directives/is-logged-out.directive';

const COMPONENTS : any[] = [
  SignupComponent,
  LoginComponent,
  HeaderComponent,
  LikeBtnComponent,
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    ...COMPONENTS,
    IsAdminDirective,
    IsLoggedInDirective,
    IsLoggedOutDirective,
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ...COMPONENTS,
    IsAdminDirective,
    IsLoggedInDirective,
    IsLoggedOutDirective
  ]
})

export class SharedModule { }
