import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../../../@core/models/post.model';
import { PostsService } from '../../../@core/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent {

  public readonly posts$: Observable<Post[]>;

  public constructor(private readonly postService: PostsService) { 
    this.posts$ = this.postService.getAllPosts().pipe(
      map(post => post.sort( (a, b) => <any>new Date(b.createdAt) - <any>new Date(a.createdAt)))
    )
  }

}
