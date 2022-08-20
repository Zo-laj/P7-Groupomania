import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { SharedModule } from '../@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SinglePostComponent,
    PostListComponent,
    PostComponent,
    PostFormComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  exports: [
    SinglePostComponent,
    PostListComponent,
    PostComponent, 
    PostFormComponent,
  ],
})
export class PostsModule { }

