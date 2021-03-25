import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule, MatCheckboxModule, MatInputModule,
  MatGridListModule, MatListModule, MatIconModule,
  MatFormFieldModule, MatCardModule, MatChipsModule
} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './common/error-page/error-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { AngularFireModule } from '@angular/fire';

import { getAuthServiceConfigs } from './common/sociallogin-config';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthServiceService } from './common/services/auth-service.service';
import { AuthGuard } from './auth.guard';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorPageComponent,
    LandingPageComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatListModule,
    FlexLayoutModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    SocialLoginModule,
    HttpClientModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // ServiceWorkerModule.register('sw-master.js', { enabled: environment.production }),
    ServiceWorkerModule.register(environment.serviceWorkerScript),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    AuthServiceService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
