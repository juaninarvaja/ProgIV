import { LoginComponent } from './componentes/login/login.component';
import { OtroComponent } from './componentes/otro/otro.component';
import { AuthGuard } from './Auth/auth.guard';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'otro', component: OtroComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
