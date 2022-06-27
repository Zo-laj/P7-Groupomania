import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/Post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() post!: Post;

  constructor(private postService: PostsService,
    private router: Router) { }


  public btnTxt: string;

  ngOnInit() {
    this.post = new Post({
        title: 'hey',
        author: "moi",
        description: "contenu du post",
        like: 0,
        imageUrl: "https://www.i-cad.fr/uploads/Connaitre_chat.jpg",
        createdDate: new Date()
    });
    this.post = new Post({
        title: 'Coucou',
        author: "moi encore",
        description: "petite description",
        like: 0,
        imageUrl: "https://www.i-cad.fr/uploads/Connaitre_chat.jpg",
        createdDate: new Date()
    });
    this.btnTxt = "J'aime !";
  }

  onLike() {
    if (this.btnTxt === "J'aime !") {
    this.post.like++;
    this.btnTxt = "Je n'aime plus !";
  } else {
    this.post.like--;
    this.btnTxt = "J'aime !"
  }
  }
}
