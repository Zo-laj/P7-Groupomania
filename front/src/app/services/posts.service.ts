import { Injectable } from '@angular/core';
import { map, merge, MonoTypeOperatorFunction, Observable, shareReplay, Subject, switchMap, take, tap } from 'rxjs';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

export function refreshOn<T>(...triggers$: Observable<any>[]): MonoTypeOperatorFunction<T> {
  return (source$: Observable<T>) => {
    return merge(
      source$,
      ...triggers$.map((trigger$: Observable<any>) => trigger$.pipe(
        switchMap(() => source$.pipe(
          take(1)
        ))
      ))
    );
  }
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public readonly posts$: Observable<Post[]>;
  public readonly onPostUpdate$: Subject<void> = new Subject<void>();
  
  public constructor(private http: HttpClient,
                     private authService: AuthService) {
      this.posts$ = this.http.get<Post[]>('http://localhost:3000/api/posts').pipe(
        refreshOn(this.onPostUpdate$),
        shareReplay(1));
  }


  public createPost(post: Post, image:File): Observable<Post> {
      const formData = new FormData;
      formData.append('post', JSON.stringify(post));
      formData.append('image', image);
      return this.http.post<Post>('http://localhost:3000/api/posts', formData).pipe(
        tap(() => this.onPostUpdate$.next())
      );
    }

  public getPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(`http://localhost:3000/api/posts/${postId}`).pipe(
      tap(() => this.onPostUpdate$.next())
    );
  }

  public likePost(postId: number, likeStatus: 'like' | 'unlike'): Observable<Post> {
    const like = ((likeStatus === 'like' ? 1 : -1));
    return  this.http.post<Post>(`http://localhost:3000/api/posts/${postId}/like`,
            {userId: this.authService.getUserId(), like}).pipe(
              tap(() => this.onPostUpdate$.next())
            )
  };

  // public likePost(postId: number, likeStatus: 'like' | 'unlike'): Observable<Post> {
  //   return this.getPostById(postId).pipe(
  //       map(post => ({
  //           ...post,
  //           like: post.like + (likeStatus === 'like' ? 1 : -1)
  //       })),
  //       switchMap(updatedPost => this.http.post<Post>(
  //           `http://localhost:3000/facesnaps/${postId}`,
  //           {updatedPost, userId: this.authService.getUserId()})
  //       )
  //   );
  // }



  public deletePost(postId: number): Observable<Post> {
    return this.http.delete<Post>(`http://localhost:3000/api/posts/${postId}`).pipe(
      tap(() => this.onPostUpdate$.next())
    );
  }

  
}

