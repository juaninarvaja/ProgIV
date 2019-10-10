import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 user: any;
  constructor() { }

  isAuthenticated() {
    if (this.user) {
      return true;
    } else {
      return false;
    }
  }
  getuser() {
    if (this.user !== undefined)
    {
      return this.user;
    } else {
      console.log('el user esta indefinido');
    }

  }

}
