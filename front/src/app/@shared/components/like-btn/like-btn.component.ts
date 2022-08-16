import { Component, Input } from '@angular/core';
import { tap } from 'rxjs';
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

  public likeBtn: string;
  public userId: string;

  public constructor(
    private postService: PostsService,
    private authService: AuthService) { 

      this.userId = this.authService.getcurrentUser().id;
      this.likeBtn = "J'aime";
    }

  public onLike(postId: number) {
    if (this.likeBtn === "J'aime") {
      this.postService.likePost(postId, 'like').pipe(
        tap(() => {
          this.likeBtn = "Je n'aime plus";
          this.post.like++;
        })
        ).subscribe();
        
    } else {
      this.postService.likePost(postId, 'unlike').pipe(
        tap(() => {
          this.likeBtn = "J'aime";
          this.post.like--;
        })
      ).subscribe();
    }
  }
}