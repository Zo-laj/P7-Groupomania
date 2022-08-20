import { Component } from '@angular/core';
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

export class SinglePostComponent {

  public readonly post$: Observable<Post>;
  public postId: string;

  public constructor(private readonly postService: PostsService,
    private readonly authService: AuthService,
    private route: ActivatedRoute, 
    private router: Router ) 
    {
      this.postId = this.route.snapshot.params['id'];
      this.post$ = this.postService.getPostById(+this.postId);
    }
  
  public onModify() {
      this.post$.pipe(
        take(1),
        tap(post => this.router.navigate(['/edit-post', this.postId]))
      ).subscribe();
  }

  public onDelete() {
    this.postService.deletePost(+this.postId).pipe(
      first()
    ).subscribe(() => this.router.navigateByUrl('/posts'));
  }

  onBack() {
    this.router.navigate(['/posts']);
  }

}
