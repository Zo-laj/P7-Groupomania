import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGard } from './services/auth-gard.service';

const routes: Routes = [
  
  { path: '', component: LandingPageComponent},
  { path: 'auth/signup', component: SignupComponent},
  { path: 'auth/login', component: LoginComponent},
  { path: 'posts', component: PostListComponent, canActivate: [AuthGard] },
  { path: 'posts/:id', component: SinglePostComponent, canActivate: [AuthGard]},
  { path: 'new-post', component: PostFormComponent, canActivate: [AuthGard]},
  { path: 'modify-post/:id', component: PostFormComponent, canActivate: [AuthGard]},
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGard]
})
export class AppRoutingModule { }
