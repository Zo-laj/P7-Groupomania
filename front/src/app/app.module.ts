import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CoreModule } from './@core/core.module';
import { PostsModule } from './posts/posts.module';
import { registerLocaleData } from '@angular/common';
import { httpInterceptorProviders } from './@core/interceptors';
import * as fr from '@angular/common/locales/fr';

import { AuthGard } from './@core/services/auth-gard.service';
import { AuthService } from './@core/services/auth.service';
import { PostsService } from './@core/services/posts.service';
import { SharedModule } from './@shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostsModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    AuthService,
    PostsService,
    AuthGard,
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
 }
