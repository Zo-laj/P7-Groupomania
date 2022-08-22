import { NgModule } from '@angular/core';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { SharedModule } from '../@shared/shared.module';

const COMPONENTS : any[] = [
  SinglePostComponent,
  PostListComponent,
  PostFormComponent
]
@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class PostsModule { }

