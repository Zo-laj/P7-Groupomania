import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, Observable, tap } from 'rxjs';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})

export class SinglePostComponent implements OnInit {

  public post$: Observable<Post>;
  public likeBtn: string;

  public constructor(private readonly postService: PostsService,
    private route: ActivatedRoute, 
    private router: Router ) { }
  
  public ngOnInit() {
    this.likeBtn = "j'aime";
    const postId = +this.route.snapshot.params['id'];
    this.post$ = this.postService.getPostById(postId);
  }

  public onModify() {
    
  }

  public onDelete() {
    const postId = +this.route.snapshot.params['id'];
    this.postService.deletePost(postId).pipe(
      first()
    ).subscribe(() => this.router.navigateByUrl('/posts'));
  }

}
