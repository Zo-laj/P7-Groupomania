import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { PostListComponent } from './post-list/post-list.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { PostFormComponent } from './post-form/post-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthGardService } from './services/auth-gard.service';
import { AuthService } from './services/auth.service';
import { PostsService } from './services/posts.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    PostListComponent,
    SinglePostComponent,
    PostFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    PostsService,
    AuthGardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
