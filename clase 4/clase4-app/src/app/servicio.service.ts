import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

   private lista = [];
   obtPaises;
  constructor(private http: HttpClient) {
  //   this.getPaises = this.http.get('https://restcountries.eu/rest/v2/all')
  //   .subscribe(data => {
  //     console.log(data);
  //   });

  //   return this.getPaises;
   }

   getPaises() {
    this.obtPaises = this.http.get('https://restcountries.eu/rest/v2/all');

    return this.obtPaises;
   }

}
