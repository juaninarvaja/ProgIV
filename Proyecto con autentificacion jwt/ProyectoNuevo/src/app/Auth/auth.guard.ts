import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from './../servicio/user-service.service';
import { Router, ActivatedRoute, ParamMap, RouteReuseStrategy } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 url = 'http://192.168.2.85:3003';
  constructor(public serviceUser: UserServiceService, private router: Router, public http: HttpClient
    ) {

  }

  getClientes(): Observable<any>{
    return this.http.get(this.url + '/clientes');
}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const usu = this.serviceUser.isAuthenticated();
    const valoresUsu = this.serviceUser.getuser();
    console.log(this.getClientes());
    if (usu && valoresUsu.nombre !== '' && valoresUsu.email !== '') {
      console.log(this.serviceUser.getuser());
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }


  }

}
