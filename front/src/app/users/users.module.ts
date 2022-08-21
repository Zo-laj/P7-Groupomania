import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';
import { AdminComponent } from './components/admin/admin.component';

const COMPONENTS : any[] = [
  AdminComponent,
]
@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    ...COMPONENTS,
    
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class UsersModule {}