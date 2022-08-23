import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  public constructor(
    private http: HttpClient,
    private readonly authService: AuthService) {
  }

  public getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/api/posts').pipe(
      shareReplay(1));
  };

  public createPost(post: Post, image:File): Observable<Post> {
      const formData = new FormData;
      formData.append('post', JSON.stringify(post));
      formData.append('image', image);
      return this.http.post<Post>('http://localhost:3000/api/posts', formData)
  };

  public getPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(`http://localhost:3000/api/posts/${postId}`)
  };

  public likePost(postId: number, userId: string, likeStatus: 'like' | 'unlike'): Observable<Post> {
    const like = ((likeStatus === 'like' ? 1 : -1));
    return  this.http.post<Post>(`http://localhost:3000/api/posts/${postId}/like`,
            {postId, userId, like})
  };


  public modifyPost(postId: number, post: Post, image:File): Observable<Post> {
    const formData = new FormData;
    formData.append('post', JSON.stringify(post));
    formData.append('image', image);
    return this.http.put<Post>(`http://localhost:3000/api/posts/${postId}`, formData)
  };

  public deletePost(postId: number): Observable<Post> {
    return this.http.delete<Post>(`http://localhost:3000/api/posts/${postId}`)
  };

}


//ngx-toastr
// nebular css

// export function refreshOn<T>(...triggers$: Observable<any>[]): MonoTypeOperatorFunction<T> {
//   return (source$: Observable<T>) => {
//     return merge(
//       source$,
//       ...triggers$.map((trigger$: Observable<any>) => trigger$.pipe(
//         switchMap(() => source$.pipe(
//           take(1)
//         ))
//       ))
//     );
//   }
// };

