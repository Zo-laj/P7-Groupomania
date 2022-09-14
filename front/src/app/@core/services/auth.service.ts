import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Role } from '../models/role.model';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly currentUserSubject$: BehaviorSubject<User>;
  public readonly isLoggedIn$: Observable<boolean>;
  public readonly isAdmin$: Observable<boolean>;

  public constructor(
    private http: HttpClient)
    {
    this.currentUserSubject$ = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
    this.isLoggedIn$ = this.currentUserSubject$.pipe(
      map((user: User) => !!user )
    );
    this.isAdmin$ = this.currentUserSubject$.pipe(
      map((data: User) => {
        if (data) {
          const token = JSON.parse(atob(data.token!.split('.')[1]));
          if (token.userRole === Role.Admin && this.isLoggedIn$){
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      })
    );
  };
  
  public getcurrentUser(): User {
    return this.currentUserSubject$.value;
  };


  public createUser(email: string, userName: string, password: string): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/auth/signup', {email, userName, password});
  };

  public loginUser(email: string, password: string) {
    return this.http.post<any>('http://localhost:3000/api/auth/login', {email, password}).pipe(
      map( user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject$.next(user);
        }
      })
    ) 
  };

  public logoutUser() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject$.next(null!);
  };
}
