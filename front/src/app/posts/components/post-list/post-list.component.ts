import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { first, map, merge, MonoTypeOperatorFunction, Observable, shareReplay, Subject, switchMap, take, tap } from 'rxjs';
import { AuthService } from 'src/app/@core/services/auth.service';
import { Post } from '../../../@core/models/post.model';
import { PostsService } from '../../../@core/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  public readonly posts$: Observable<Post[]>;
  public currentUserId: string;

  public constructor(
    private readonly postService: PostsService,
    private router: Router,
    private authService: AuthService) 
  { 
    this.currentUserId = (JSON.parse(atob(this.authService.getcurrentUser().token!.split('.')[1]))).userId;
    this.posts$ = this.postService.getAllPosts().pipe(
      map((posts: Post[]) => 
        posts.sort( (a, b) => <any>new Date(b.createdAt) - <any>new Date(a.createdAt))
      ),
    )
  };

  public onViewPost(postId: number) {
    this.router.navigate([`/posts/${postId}`]);
  };

  public onAdminDeletePost(postId: number) {
    if(confirm("Etes vous sûr de vouloir supprimer ce post ?")) {
      this.postService.deletePost(postId).pipe(
        first(),
      ).subscribe(() => {
        window.location.reload();
    });
  };
  }
}
