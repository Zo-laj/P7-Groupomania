import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { OnDestroyListener, takeUntilDestroy } from '@paddls/ngx-common';
import { AuthService } from 'src/app/@core/services/auth.service';

@OnDestroyListener()
@Directive({ selector: '[isLoggedOut]' })
export class IsLoggedOutDirective {

  private hasView: boolean = false;

  public constructor(private readonly templateRef: TemplateRef<any>,
                     private readonly viewContainer: ViewContainerRef,
                     private readonly authService: AuthService) {

    this.authService.isLoggedIn$.pipe(
        takeUntilDestroy(this),
        ).subscribe((can: boolean) => {
            if (!can && !this.hasView) {
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.hasView = true;
            
            } else if (can && this.hasView) {
                this.viewContainer.clear();
                this.hasView = false;
            }
        });
   }
}