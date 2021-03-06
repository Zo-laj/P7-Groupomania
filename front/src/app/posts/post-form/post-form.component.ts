import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, first, switchMap, tap } from 'rxjs';
import { Post } from '../../@core/models/post.model';
import { PostsService } from '../../@core/services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {

  public postForm: FormGroup;
  public post: Post;
  // public postPreview$: Observable<Post>;
  public imagePreview: string;
  public mode: string;

  public constructor(private formBuilder: FormBuilder, 
                    private readonly postService: PostsService,
                    private router: Router, 
                    private route: ActivatedRoute) 
    { 
      this.route.params.pipe(
        switchMap(params => {
          if (!params['id']) {
            this.mode = 'new-post';
            this.postForm = this.formBuilder.group({
              title: [null, Validators.required],
              author: [null, Validators.required],
              description: [null, Validators.required],
              imageUrl: [null, Validators.required],
            });
            return EMPTY;
          } else {
            this.mode = 'edit-post';
            return this.postService.getPostById(params['id'])
          }
        }),
        tap(post => {
          if (post) {
            this.postForm = this.formBuilder.group({
              title: [post.title, Validators.required],
              author: [post.author, Validators.required],
              description: [post.description, Validators.required],
              imageUrl: [post.imageUrl, Validators.required],
            });
          }
        }) 
        ).subscribe();
  }



  onFileChange(event: Event) {
    const file : File = (event.target as HTMLInputElement).files![0];
    console.log(file)
    this.postForm.get('imageUrl')!.setValue(file);
    this.postForm.updateValueAndValidity();
    
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  public onSubmitForm() {
  this.postService.createPost(this.postForm.value, this.postForm.get('imageUrl')!.value).pipe(
    first(),
    ).subscribe(() => this.router.navigateByUrl('/posts'));
  }
}


// this.postPreview$ = this.postForm.valueChanges.pipe(
//   map(formValue => ({
//       ...formValue,
//       createdDate: new Date(),
//       imageUrl: this.imagePreview
//   }))
// );