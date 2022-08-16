import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../../@core/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {

  @Input() 
  public post: Post;

  public readonly post$: Observable<Post>;
  public showPost: boolean;
  public currentPost: Post;
  
  public constructor(
    private router: Router) 
    {
      this.showPost = true;
      this.currentPost = this.post;
    }
    
  public onViewPost() {
      this.router.navigate(['/posts', this.post.id]);
  }

}