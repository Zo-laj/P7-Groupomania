import { Component, Input } from '@angular/core';
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
  
  public constructor(private readonly postService: PostsService ) { }

}