import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingServiceService {

  private user: any;

  constructor() { }

  public getUser(): any {
    return this.user;
  }

  public setUser(newUser: any): void {
    this.user = newUser;
  }
}
