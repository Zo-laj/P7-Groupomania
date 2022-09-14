import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, Observable, shareReplay, take, tap } from 'rxjs';
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
  public currentUserId: number;

  public constructor(private readonly postService: PostsService,
    private readonly authService: AuthService,
    private route: ActivatedRoute, 
    private router: Router ) 
    {
      this.currentUserId = +(JSON.parse(atob(this.authService.getcurrentUser().token!.split('.')[1]))).userId; 
      this.post$ = this.postService.getPostById(+this.route.snapshot.params['id']).pipe(
        shareReplay()
      );
    }
  
  public onModify() {
      this.post$.pipe(
        take(1),
      ).subscribe(post => this.router.navigate(['/edit-post', post.id]));
  }

  public onDelete() {
    this.postService.deletePost(+this.route.snapshot.params['id']).pipe(
      first()
    ).subscribe(() => this.router.navigateByUrl('/posts'));
  }

  public onBack() {
    this.router.navigate(['/posts']);
  }
}
