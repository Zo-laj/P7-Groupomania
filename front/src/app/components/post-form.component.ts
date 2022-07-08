import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: '../post-form/post-form.component.html',
  styleUrls: ['../post-form/post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  public postForm: FormGroup;
  public postPreview$: Observable<Post>;

  public constructor(private formBuilder: FormBuilder, 
    private readonly postService: PostsService,
    private router: Router) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: [null, Validators.required],
      author: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null],
    }, {
      updateOn: 'blur'
    });

    this.postPreview$ = this.postForm.valueChanges.pipe(
      map(formValue => ({
          ...formValue,
          createdDate: new Date(),
          like: 0,
          // _id: 0
      }))
    );
  };

  onSubmitForm() {
  this.postService.createPost(this.postForm.value).pipe(
    tap(() => this.router.navigateByUrl('/posts'))
    ).subscribe();
  }
}
