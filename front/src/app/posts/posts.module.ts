import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { SharedModule } from '../@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SinglePostComponent,
    PostListComponent,
    PostComponent,
    PostFormComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  exports: [
    SinglePostComponent,
    PostListComponent,
    PostComponent, 
    PostFormComponent,
  ],
})
export class PostsModule { }

// import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
// import { RoleType } from '@core/models/user/role-type.enum';
// import { RoleService } from '@core/services/user/role.service';
// import { OnDestroyListener, takeUntilDestroy } from '@paddls/ngx-common';
// import { of } from 'rxjs';

// @OnDestroyListener()
// @Directive({ selector: '[pwHasRole]' })
// export class HasRoleDirective {

//   private hasView: boolean = false;

//   public constructor(private readonly templateRef: TemplateRe
// f<any>,
//                      private readonly viewContainer: ViewContainerRef,
//                      private readonly roleService: RoleService) {
//   }

//   @Input('pwHasRole')
//   public set hasRole(roles: string[]) {
//     of(roles.some((role: string) => this.roleService.hasRole(role as RoleType))).pipe(
//       takeUntilDestroy(this),
//     ).subscribe((can: boolean) => {
//       if (can && !this.hasView) {
//         this.viewContainer.createEmbeddedView(this.templateRef);
//         this.hasView = true;
//       }
// else if (!can && this.hasView) {
//         this.viewContainer.clear();
//         this.hasView = false;
//       }
//     });
//   }
// }
