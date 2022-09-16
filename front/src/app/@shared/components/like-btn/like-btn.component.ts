import { Component, Input } from '@angular/core';
import { OnAttributeChange } from '@paddls/ngx-common';
import { BehaviorSubject, catchError, EMPTY, map, Observable} from 'rxjs';
import { Like } from 'src/app/@core/models/like.model';
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

  public Likes$: Observable<Like[]>
  public currentUserId: number;
  public numberOfLikes: number;
  public isLiked$: BehaviorSubject<boolean>;

  public constructor(
    private postService: PostsService,
    private authService: AuthService) { 
      this.currentUserId = +(JSON.parse(atob(this.authService.getcurrentUser().token!.split('.')[1]))).userId;
      this.post$.pipe(
        map((post: Post) => {
          this.numberOfLikes = this.post.Likes.length;
          this.isLiked$ = new BehaviorSubject(!!post?.Likes.find((like: any) => like.UserId === this.currentUserId));
        })
      ).subscribe();
  };
    
  public onLike(postId: number) {
  if (this.isLiked$.getValue() === true) {
    this.postService.likePost(postId, this.currentUserId, 'unlike').pipe(
      catchError( error => {
        console.log(error);
        return EMPTY
      }),
      ).subscribe( () => {
        this.numberOfLikes--;
        this.isLiked$.next(false)
      });
  } else if (this.isLiked$.getValue() === false) {
    this.postService.likePost(postId, this.currentUserId, 'like').pipe(
      catchError( error => {
        console.log(error);
        return EMPTY
      }),
      ).subscribe( () => {
        this.numberOfLikes++;
        this.isLiked$.next(true)
      });
    }         
  }
}