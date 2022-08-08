import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, Observable, switchMap } from 'rxjs';
import { PostsService } from 'src/app/@core/services/posts.service';
import { Post } from '../../../@core/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() 
  public post: Post;

  public post$: Observable<Post>
  public likeBtn: string;
  
  public constructor( 
    private postService: PostsService) {}

  public onDelete() {
    this.postService.deletePost(+this.post.id).pipe(
      first(),
      switchMap(() => this.postService.getAllPosts())
    ).subscribe();
  }

  public onViewPost() {
    // this.router.navigateByUrl(`posts/${this.post.id}`);
  }


}