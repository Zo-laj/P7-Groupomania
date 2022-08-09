import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFormComponent } from './posts/components/post-form/post-form.component';
import { PostListComponent } from './posts/components/post-list/post-list.component';
import { SinglePostComponent } from './posts/components/single-post/single-post.component';
import { SignupComponent } from './@shared/components/auth/signup/signup.component';
import { LoginComponent } from './@shared/components/auth/login/login.component';
import { AuthGard } from './@core/services/auth-gard.service';

const routes: Routes = [
  
  { path: 'auth/signup', component: SignupComponent},
  { path: 'auth/login', component: LoginComponent},
  { path: 'posts', component: PostListComponent, canActivate: [AuthGard]},
  { path: 'posts/:id', component: SinglePostComponent, canActivate: [AuthGard]},
  { path: 'new-post', component: PostFormComponent, canActivate: [AuthGard]},
  { path: 'edit-post/:id', component: PostFormComponent, canActivate: [AuthGard] },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGard]
})
export class AppRoutingModule { }
