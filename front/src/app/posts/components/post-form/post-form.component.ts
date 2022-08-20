import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from 'src/app/@core/services/auth.service';
import { Post } from '../../../@core/models/post.model';
import { PostsService } from '../../../@core/services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {

  public postForm: FormGroup;
  public post: Post;
  public isAddMode: boolean;
  public imagePreview: string;
  public postId: string;

  public constructor(
    private formBuilder: FormBuilder, 
    private readonly postService: PostsService,
    private readonly authService: AuthService,
    private router: Router, 
    private route: ActivatedRoute,
    ) 
    { 
      this.postId = this.route.snapshot.params['id'];
      this.isAddMode = !this.postId;

      this.postForm = this.formBuilder.group({
              title: [null, Validators.required],
              userId: [this.authService.getcurrentUser().id],
              description: [null, Validators.required],
              imageUrl: [null, Validators.required],
      });

      if (!this.isAddMode) {
          this.postService.getPostById(+this.postId)
              .pipe(first())
              .subscribe(post => this.postForm.patchValue(post));
      }
  }

  onFileChange(event: Event) {
    const file : File = (event.target as HTMLInputElement).files![0];
    this.postForm.get('imageUrl')!.setValue(file);
    this.postForm.updateValueAndValidity();
    
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  public onSubmitForm() {
    if (this.isAddMode) {
      this.postService.createPost(this.postForm.value, this.postForm.get('imageUrl')!.value).pipe(
        first(),
        ).subscribe(() => this.router.navigateByUrl('/posts'));
    } 
    else if (!this.isAddMode) {
      this.postService.modifyPost(+this.postId, this.postForm.value, this.postForm.get('imageUrl')!.value).pipe(
        first(),
        ).subscribe(() => this.router.navigateByUrl('/posts'));
      }
  }
}
