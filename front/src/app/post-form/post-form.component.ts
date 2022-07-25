import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first, map, Observable, switchMap } from 'rxjs';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {

  public postForm: FormGroup;
  public postPreview$: Observable<Post>;
  public imagePreview: string;

  public constructor(private formBuilder: FormBuilder, 
                    private readonly postService: PostsService,
                    private router: Router) 
    { 
      this.postForm = this.formBuilder.group({
        title: [null, Validators.required],
        author: [null, Validators.required],
        description: [null, Validators.required],
        imageUrl: [null, Validators.required],
      });
  
      this.postPreview$ = this.postForm.valueChanges.pipe(
        map(formValue => ({
            ...formValue,
            createdDate: new Date(),
            imageUrl: this.imagePreview
        }))
      );
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
