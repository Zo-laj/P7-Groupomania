import { Component, Injectable, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, Observable, take, tap } from 'rxjs';
import { PostsService } from 'src/app/@core/services/posts.service';
import { Post } from '../../../@core/models/post.model';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() 
  public post: Post;
  public showPost: boolean;
  public post$: Observable<Post>;
  
  public constructor( 
    private postService: PostsService,
    private route: ActivatedRoute,
    private router: Router) 
    {
      this.showPost = true;
    }
    
  public onViewPost() {
      this.router.navigate(['/posts', this.post.id]);
  }

  public onModify() {
    this.router.navigate(['/edit-post', this.post.id])
  }

  public onDelete() {
    this.postService.deletePost(+this.post.id).pipe(
      first(),
    ).subscribe();
    this.showPost = false;
  }

}