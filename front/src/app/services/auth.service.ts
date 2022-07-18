import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth$ = new BehaviorSubject<boolean>(false); 
  private token = "";
  private userId = "";

  public constructor(private http: HttpClient) {}

  public getToken(): string {
    return this.token;
  }

  public getUserId() {
    return this.userId;
  }

  public createUser(email: string, password: string): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/auth/signup', {email, password});
  }

  public loginUser(email: string, password: string) {
    return this.http.post<{userId: string, token: string}>('http://localhost:3000/api/auth/login', {email, password}).pipe(
      tap(({ userId, token }) => {
        this.userId = userId;
        this.token = token;
        this.isAuth$.next(true)
      })
    ) 
  }

}
