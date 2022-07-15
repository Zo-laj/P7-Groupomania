import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, switchMap, take } from 'rxjs';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: '../post/post.component.html',
  styleUrls: ['../post/post.component.scss']
})
export class PostComponent {

  @Input() 
  public post: Post;

  public readonly post$: Observable<Post>;
  
  public constructor( private readonly postService: PostsService,
     private router: Router ) {}

  public onViewPost() {
    this.router.navigateByUrl(`posts/${this.post.id}`);
  }

  public onDelete() {
    this.post$.pipe(
      take(1),
      switchMap(post => this.postService.deletePost(+post.id)))
  }
}