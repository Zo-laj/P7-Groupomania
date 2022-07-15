import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page.component';
import { SignupComponent } from './components/signup.component';
import { LoginComponent } from './components/login.component';
import { PostComponent } from './components/post.component';
import { PostListComponent } from './components/post-list.component';
import { SinglePostComponent } from './components/single-post.component';
import { PostFormComponent } from './components/post-form.component';
import { HeaderComponent } from './components/header.component';
import { AuthGardService } from './services/auth-gard.service';
import { AuthService } from './services/auth.service';
import { PostsService } from './services/posts.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignupComponent,
    LoginComponent,
    PostComponent,
    PostListComponent,
    SinglePostComponent,
    PostFormComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    PostsService,
    AuthGardService,
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
 }
