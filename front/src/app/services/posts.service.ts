import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  public constructor(private http: HttpClient) {}

  public getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/api/posts')
  }

  public createPost(formValue: { 
     userId: number,
     title: string,
     author: string,
     description: string,
     imageUrl: string,
     like: number, 
     createdDate: Date}): Observable<Post[]> {
      
      return this.getAllPosts().pipe(
        map(previousPost => ({
            ...formValue,
            like: 0,
            createdDate: new Date(),
        })),
        switchMap(newPost => this.http.post<Post[]>(
            'http://localhost:3000/posts',
            newPost)
        )
    );
  }
}

