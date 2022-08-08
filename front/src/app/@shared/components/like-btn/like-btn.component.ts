import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, Observable, tap } from 'rxjs';
import { Post } from 'src/app/@core/models/post.model';
import { AuthService } from 'src/app/@core/services/auth.service';
import { PostsService } from 'src/app/@core/services/posts.service';
import { PostComponent } from 'src/app/posts/components/post/post.component';

@Component({
  selector: 'app-like-btn',
  templateUrl: './like-btn.component.html',
  styleUrls: ['./like-btn.component.scss']
})
export class LikeBtnComponent implements OnInit {

  public post$: Observable<Post>;
  public likeBtn: string;
  public userId: string;
  public postId: number;

  public constructor(
    private postService: PostsService,
    private authService: AuthService,
    private postComponent: PostComponent ) { }

  public ngOnInit() {
    this.userId = this.authService.getUserId();
    this.likeBtn = "J'aime";
    this.postId = +this.postComponent.post.id;
  }  

  public onLike(postId: number) {
    if (this.likeBtn === "J'aime") {

      this.postService.likePost(postId, 'like').pipe(
        first()
        ).subscribe();
      this.likeBtn = "Je n'aime plus";
      ++this.postComponent.post.like;
        
    } else {
      this.likeBtn = "J'aime";
      --this.postComponent.post.like;

      this.postService.likePost(postId, 'unlike').pipe(
        first()
      ).subscribe();
    }
  }
}