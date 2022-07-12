import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  
  public constructor( private router: Router ) { 
  }

  onViewPost() {
    this.router.navigateByUrl(`posts/${this.post.id}`);
  }

}