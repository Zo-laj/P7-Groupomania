import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { User } from 'src/app/@core/models/user.model';
import { UserService } from 'src/app/@core/services/users.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
  })

export class AdminComponent {
    
    public readonly users$: Observable<User[]>;

    public constructor(private readonly userService: UserService) { 
        this.users$ = this.userService.getAllUsers();
    };

    public onDelete(userId:string) {
        this.userService.deleteUser(userId).pipe(
          first(),
        ).subscribe((res:any) => 
            this.users$.pipe(
                map( users => {
                    return users.filter( user => user.id !== userId)
                })
            )
        )
    };
}