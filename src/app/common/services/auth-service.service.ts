import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private myRoute: Router) { }

   setLoggedInUser(user: any) {
     console.log(user);
     localStorage.setItem('LoggedInUser' , JSON.stringify(user));
     this.myRoute.navigate(['dashboard']);
   }

   getLoggedInUser() {
    return JSON.parse(localStorage.getItem('LoggedInUser'));
  }

  isLoggednIn() {
    return this.getLoggedInUser() !== null;
  }
  logout() {
    localStorage.removeItem('LoggedInUser');
    this.myRoute.navigate(['login']);
  }

}
