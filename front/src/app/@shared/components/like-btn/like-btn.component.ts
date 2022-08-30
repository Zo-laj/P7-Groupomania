import { Component, Input } from '@angular/core';
import { OnAttributeChange } from '@paddls/ngx-common';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { Post } from 'src/app/@core/models/post.model';
import { AuthService } from 'src/app/@core/services/auth.service';
import { PostsService } from 'src/app/@core/services/posts.service';
@Component({
  selector: 'app-like-btn',
  templateUrl: './like-btn.component.html',
  styleUrls: ['./like-btn.component.scss']
})
export class LikeBtnComponent {

  @Input() 
  public post: Post;

  @OnAttributeChange()
  public readonly post$: Observable<Post>;

  public likeBtn: string;
  public currentUserId: string;
  public numberOfLikes: number;

  public constructor(
    private postService: PostsService,
    private authService: AuthService) { 
      this.currentUserId = (JSON.parse(atob(this.authService.getcurrentUser().token!.split('.')[1]))).userId;
    }

  public onLike(postId: number) {
    if (this.post.isLiked === false) {
      this.postService.likePost(postId, this.currentUserId, 'like').pipe(
        tap(() => {
          this.post.isLiked = true;
          this.post.numberOfLikes++;
        }),
        catchError( error => {
          this.post.isLiked = false;
          this.post.numberOfLikes--;
          console.log(error)
          return EMPTY
        }),
        ).subscribe();
        
    } else if (this.post.isLiked === true) {
      this.postService.likePost(postId, this.currentUserId, 'unlike').pipe(
        tap(() => {
          this.post.isLiked = false;
          this.post.numberOfLikes--;
        }),
        catchError( error => {
          this.post.isLiked = true;
          this.post.numberOfLikes++;
          console.log(error)
          return EMPTY
        }),
        
      ).subscribe();
    }
  }
}