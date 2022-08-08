import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, Observable, take, tap } from 'rxjs';
import { Post } from '../../../@core/models/post.model';
import { AuthService } from '../../../@core/services/auth.service';
import { PostsService } from '../../../@core/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})

export class SinglePostComponent implements OnInit {

  public post$: Observable<Post>;
  public likeBtn: string;
  public isAuth$: Observable<boolean>;

  public constructor(private postService: PostsService,
    private authService: AuthService,
    private route: ActivatedRoute, 
    private router: Router ) { }
  
  public ngOnInit() {
    this.isAuth$ = this.authService.isAuth$
    this.likeBtn = "J'aime";
    const postId = +this.route.snapshot.params['id'];
    this.post$ = this.postService.getPostById(postId);
  }

  // public onLike(postId: number) {
  //   if (this.likeBtn === "J'aime") {
  //     this.post$ = this.postService.likePost(postId, 'like').pipe(
  //       tap((post) => {
  //         this.post$ = this.postService.getPostById(postId);
  //         this.likeBtn = "Je n'aime plus"
  //       })
  //     );
  //   } else {
  //     this.post$ = this.postService.likePost(postId, 'unlike').pipe(
  //       tap(() => {
  //         this.post$ = this.postService.getPostById(postId);
  //         this.likeBtn = "J'aime"
  //       })
  //     );
  //   }
  // }

  public onModify() {
      this.post$.pipe(
        take(1),
        tap(post => this.router.navigate(['/edit-post', this.route.snapshot.params['id']]))
      ).subscribe();
  }

  public onDelete() {
    const postId = +this.route.snapshot.params['id'];
    this.postService.deletePost(postId).pipe(
      first()
    ).subscribe(() => this.router.navigateByUrl('/posts'));
  }

}
