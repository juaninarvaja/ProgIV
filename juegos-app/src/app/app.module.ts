import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatButtonModule} from '@angular/material/button';
// import { firebaseConfig } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import {AngularFireAuthModule } from "@angular/fire/auth";
import { PrincipalComponent } from './componentes/principal/principal.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { SnakeComponent } from './componentes/snake/snake.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';

var datos =   {
  apiKey: "AIzaSyA0m7Vi7pYwkg9HMqhVGwkl1maxLlDTSWg",
authDomain: "salajuegos-7b4c4.firebaseapp.com",
databaseURL: "https://salajuegos-7b4c4.firebaseio.com",
projectId: "salajuegos-7b4c4",
storageBucket: "",
messagingSenderId: "390807224677",
appId: "1:390807224677:web:793dd684c6864f7557618c",
measurementId: "G-2M1Z4WC7T4" }
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    CabeceraComponent,
    MenuComponent,
    JuegosComponent,
    AdivinaElNumeroComponent,
    AdivinaMasListadoComponent,
    ListadoDeResultadosComponent,
    AgilidadAritmeticaComponent,
    AgilidadMasListadoComponent,
    AnagramaComponent,
    TatetiComponent,
    MenuCardComponent,
    QuienSoyComponent,
    SnakeComponent,
    ListaUsuariosComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     BrowserAnimationsModule,
     MatButtonModule,
     AngularFireModule.initializeApp(datos),
     AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
