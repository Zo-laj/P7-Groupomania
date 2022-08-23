import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
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
      tap((posts: Post[]) => {
        posts.map((post: Post) => {
          post.numberOfLikes = post.Likes.length;
          if(post.Likes.find((likes : any) => likes.UserId === this.currentUserId )) {
            console.log('yes');
            post.isLiked = true;
          } else {
            console.log('no');
            post.isLiked = false;
          };   
        })
      }), 
    )
  }

  public onViewPost(postId: string) {
    this.router.navigate(['/posts', postId]);
}

}
