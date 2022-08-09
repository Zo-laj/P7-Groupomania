import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, observable, Observable, tap } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth$ = new BehaviorSubject<boolean>(false); 
  private token = "";
  private userId = "";
  private userName = "";

  public constructor(private http: HttpClient,
    public cookieService: CookieService) {}

  public createUser(email: string, userName: string, password: string): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/auth/signup', {email, userName, password});
  }

  public loginUser(email: string, password: string) {
    return this.http.post<{userId: string, token: string, userName: string}>('http://localhost:3000/api/auth/login', {email, password}).pipe(
      tap(({ userId, token, userName}) => {
        this.userId = userId;
        this.token = token;
        this.userName = userName;
        this.isAuth$.next(true);
      })
    ) 
  };

  public logoutUser() {
    this.token = '';
    this.userId = '';
    this.isAuth$.next(false);
  }

  public getToken(): string {
    return this.token;
  }

  public getUserId() {
    return this.userId;
  }

  public getUserName() {
    return this.userName;
  }

  // public checkLogValue() {
  //        
  //     this.cookieService.set('password', this.user.token);  
  //     console.log(this.cookieService.get('username'));  
  //     console.log(this.cookieService.get('password'));  
  //     const a = this.Obj;  
  //     if (this.authService.checkLogValues(this.user)) {  
  //         this.authService.isloggedin = true;  
  //         console.log(this.authService.isloggedin);  
  //         this.router.navigate(['/posts']);  
  //     }  
  // }  
  // }


}
