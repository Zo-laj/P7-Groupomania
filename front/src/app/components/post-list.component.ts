import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: '../post-list/post-list.component.html'
})
export class PostListComponent {

  public readonly posts$: Observable<Post[]>;

  public constructor(private readonly postService: PostsService) { 
    this.posts$ = this.postService.getAllPosts();
  }


  // onLike() {
  //   if (this.btnTxt === "J'aime !") {
  //   this.post.like++;
  //   this.btnTxt = "Je n'aime plus !";
  // } else {
  //   this.post.like--;
  //   this.btnTxt = "J'aime !"
  // }
  // }
}
