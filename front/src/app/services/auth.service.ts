import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public constructor(private http: HttpClient) {}

  public createUser(email: string, password: string): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/auth/signup', {email, password});
  }

}
