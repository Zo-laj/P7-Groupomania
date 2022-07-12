import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: '../single-post/single-post.component.html',
  styleUrls: ['../single-post/single-post.component.scss']
})

export class SinglePostComponent implements OnInit {

  public post$!: Observable<Post[]>;
  public likeBtn: string;

  public constructor(private readonly postService: PostsService,
    private route: ActivatedRoute ) { }
  
  ngOnInit() {
    this.likeBtn = "j'aime";
    const postId = +this.route.snapshot.params['id'];
    this.post$ = this.postService.getPostById(postId);
  }

}
