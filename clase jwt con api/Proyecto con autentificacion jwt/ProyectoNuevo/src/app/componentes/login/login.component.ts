import { UserServiceService } from './../../servicio/user-service.service';
import { AuthGuard } from './../../Auth/auth.guard';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, CanActivate, RouteReuseStrategy } from '@angular/router';
// import { TimeoutError } from 'rxjs';


// import {Subscription} from "rxjs";
// import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // private subscription: Subscription;
  usuario = '';
  email = '';
  progreso: number;
  clientes: Array<JSON>;
  // progresoMensaje = "esperando...";
  logeando = true;
  ProgresoDeAncho: string;

  // clase =  "progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthGuard,
    public service: UserServiceService) {
      // this.progreso=0;
      // this.ProgresoDeAncho="0%";

  }
  user: any = {
    user: 'root@root.com',
    pass: 'a12345'
  };
  ngOnInit() {

  }

  login() {
    this.service.getUser(this.user)
    .subscribe(arg => {
      console.log(arg);
      this.service.setToken(arg);

      }
      , e => { console.log(e); });
  }
  register() {
    this.service.setUser(this.user)
    .subscribe(arg => {
      console.log(arg);
      console.log(this.user);
    }
      , e => { console.log(e); });
  }


  }


