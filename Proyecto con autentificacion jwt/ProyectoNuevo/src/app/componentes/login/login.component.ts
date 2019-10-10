import { UserServiceService } from './../../servicio/user-service.service';
import { AuthGuard } from './../../Auth/auth.guard';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, CanActivate, RouteReuseStrategy } from '@angular/router';
import { TimeoutError } from 'rxjs';


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
  // progresoMensaje = "esperando...";
  logeando = true;
  ProgresoDeAncho: string;

  // clase =  "progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthGuard,
    public usrServ: UserServiceService) {
      // this.progreso=0;
      // this.ProgresoDeAncho="0%";

  }

  ngOnInit() {
  }

  ingresar() {
    // console.log(this.usuario);
    // console.log(this.email);
    this.usrServ.user = {nombre: this.usuario , email: this.email};
    const usu = this.usrServ.getuser();
    this.router.navigate(['/home']);
    }


  }


