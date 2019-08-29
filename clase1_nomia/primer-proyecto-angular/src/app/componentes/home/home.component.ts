import { Component, OnInit, Output, Input } from '@angular/core';
import { NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // nombre;
  persona = [{}];
  estado = true;
  nombre;
  mail;

  constructor() { }

  ngOnInit() {
  }
  cargar(persona) {
   this.persona.push(persona);
  }



}
