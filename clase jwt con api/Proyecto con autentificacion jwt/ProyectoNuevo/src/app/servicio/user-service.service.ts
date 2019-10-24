import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 user: any;
  constructor(private http: HttpClient) { }

  isAuthenticated() {
    if (this.user) {
      return true;
    } else {
      return false;
    }
  }
  getUser(user) {
    const body = {cliente : user};
    return this.http.post('http://192.168.2.85:3003/login', body);
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  setUser(user) {
    const body = {cliente : user};
    return this.http.post('http://192.168.2.85:3003/clientes', body);
  }
}
