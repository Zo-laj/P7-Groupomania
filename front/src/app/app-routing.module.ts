import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'auth/signup', component: SignupComponent},
  { path: 'auth/login', component: LoginComponent},
  { path: 'posts', component: PostListComponent},
  { path: 'post/:id', component: SinglePostComponent},
  { path: 'new-post', component: PostFormComponent},
  { path: 'modify-post/:id', component: PostFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
