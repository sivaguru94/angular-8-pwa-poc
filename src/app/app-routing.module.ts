import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './common/error-page/error-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component : LoginComponent },
  { path: 'dashboard', component : DashboardComponent , pathMatch: 'full' , canActivate: [AuthGuard]},
  { path: '', component : LandingPageComponent },
  { path: '**', component : ErrorPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
