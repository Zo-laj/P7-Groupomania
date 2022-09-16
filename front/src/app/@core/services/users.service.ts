import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, shareReplay, } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

  public readonly users$: Observable<User[]>;
    
  public constructor(private http: HttpClient) {}

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/api/admin/users').pipe(
    shareReplay(1))
  }

  public getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/api/posts/${userId}`)
  }

  public deleteUser(userId: number): Observable<User> {
    return this.http.delete<User>(`http://localhost:3000/api/admin/users/${userId}`)
  }
}