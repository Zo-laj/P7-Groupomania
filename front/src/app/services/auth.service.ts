import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = "";
  private userId = "";

  public constructor(private http: HttpClient) {}

  public createUser(email: string, password: string): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/auth/signup', {email, password});
  }

  public getToken(): string {
    return this.token;
  }

  public loginUser(email: string, password: string) {
    return this.http.post<{userId: string, token: string}>('http://localhost:3000/api/auth/login', {email, password}).pipe(
      tap(({ userId, token }) => {
        this.userId = userId;
        this.token = token;
      })
    ) 
  }

}
