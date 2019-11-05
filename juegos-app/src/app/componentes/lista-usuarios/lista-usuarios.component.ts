import { Component, OnInit } from '@angular/core';
import { AuthService} from "../../servicios/auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  user:string;

  constructor(private authService:AuthService,public router : Router) { }

  ngOnInit() {
  }

  // usuarioActual() {
  //   this.user = this.authService.obtenerUsuarioActivo();
  //   console.log(this.user);
  // }

}
