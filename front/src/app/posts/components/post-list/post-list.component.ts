import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Post } from '../../../@core/models/post.model';
import { PostsService } from '../../../@core/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  public readonly posts$: Observable<Post[]>;

  public constructor(
    private readonly postService: PostsService,
    private router: Router) 
  { 
    this.posts$ = this.postService.getAllPosts().pipe(
      map(post => post.sort( (a, b) => <any>new Date(b.createdAt) - <any>new Date(a.createdAt)))
    )
  }

  public onViewPost(postId: string) {
    this.router.navigate(['/posts', postId]);
}

}
