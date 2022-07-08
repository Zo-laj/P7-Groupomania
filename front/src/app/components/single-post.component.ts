import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: '../single-post/single-post.component.html',
  styleUrls: ['../single-post/single-post.component.scss']
})
export class SinglePostComponent {

  @Input() 
  public post: Post;
  
  public constructor(private readonly postService: PostsService ) { }

}
