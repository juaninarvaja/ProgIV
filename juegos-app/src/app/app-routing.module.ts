import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './componentes/login/login.component'
import { PrincipalComponent } from './componentes/principal/principal.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { SnakeComponent } from './componentes/snake/snake.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';




const routes: Routes = [
  
  { path: '', component:LoginComponent },
  { path: 'principal', component:PrincipalComponent },
  { path:'menu', component:MenuComponent},
  { path:'Juegos', component:MenuCardComponent},
  { path:'Juegos/Adivina', component:AdivinaElNumeroComponent},
  { path:'Juegos/AdivinaLista', component:AdivinaMasListadoComponent},
  { path:'Juegos/AgilidadLista', component:AgilidadMasListadoComponent},
  { path:'Juegos/Agilidad', component:AgilidadAritmeticaComponent},
  { path:'Juegos/Anagrama', component:AnagramaComponent},
  { path:'Juegos/Tateti', component:TatetiComponent},
  {path: 'Juegos/prueba', component:MenuCardComponent},
  {path: 'quienSoy', component:QuienSoyComponent},
  {path: 'snake', component:SnakeComponent},
  {path: 'Jugadores',component:ListaUsuariosComponent},
  { path: "**", component:LoginComponent }

  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
