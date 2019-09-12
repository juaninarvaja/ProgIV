import { ServicioService } from './../../servicio.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lista = [];

  constructor(private service: ServicioService) {
    // service.getPaises().
    // suscribe(data => {
    //   this.lista = data;
      // console.log('la rta es');
      // console.log(this.lista);

    // });
   }

  ngOnInit() {
    this.service.getPaises()
    .subscribe(data => {
      console.log(data)
    this.lista = data;
    });
}

}
