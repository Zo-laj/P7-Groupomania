import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LandingPageComponent } from './components/landing-page.component';
import { PostFormComponent } from './components/post-form.component';
import { PostListComponent } from './components/post-list.component';
import { SinglePostComponent } from './components/single-post.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'auth/signup', component: SignupComponent},
  { path: 'auth/login', component: LoginComponent},
  { path: 'posts', component: PostListComponent},
  { path: 'posts/:id', component: SinglePostComponent},
  { path: 'new-post', component: PostFormComponent},
  { path: 'modify-post/:id', component: PostFormComponent},
  { path: '', pathMatch: 'full', redirectTo: 'posts'},
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
