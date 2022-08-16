import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFormComponent } from './posts/components/post-form/post-form.component';
import { PostListComponent } from './posts/components/post-list/post-list.component';
import { SinglePostComponent } from './posts/components/single-post/single-post.component';
import { SignupComponent } from './@shared/components/auth/signup/signup.component';
import { LoginComponent } from './@shared/components/auth/login/login.component';
import { AuthGuard } from './@core/services/auth-guard.service';
import { AdminComponent } from './users/components/admin/admin.component';
import { Role } from './@core/models/role.model';

const routes: Routes = [
  
  { path: 'auth/signup', component: SignupComponent},
  { path: 'auth/login', component: LoginComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] }},
  { path: 'posts', component: PostListComponent, canActivate: [AuthGuard]},
  { path: 'posts/:id', component: SinglePostComponent, canActivate: [AuthGuard]},
  { path: 'new-post', component: PostFormComponent, canActivate: [AuthGuard]},
  { path: 'edit-post/:id', component: PostFormComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
