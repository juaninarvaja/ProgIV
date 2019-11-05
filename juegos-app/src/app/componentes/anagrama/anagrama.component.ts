import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();

  nuevoJuego: JuegoAnagrama;
  Mensajes:string;
  contador:number;
  ocultarVerificar:boolean;
  
 
  constructor() { 
    this.nuevoJuego = new JuegoAnagrama();
     
    this.ocultarVerificar=false;
  }
  generarnumero() {
    this.nuevoJuego.generarnumero();
    console.info("palabra secreta:",this.nuevoJuego.palabraSecreta); 
    
    this.contador=0;
  }
  verificar()
  {
    this.contador++;
    this.ocultarVerificar=true;
    console.info("palabra Secreto:",this.nuevoJuego.gano);  
    if (this.nuevoJuego.verificar()){
      
      this.enviarJuego.emit(this.nuevoJuego);
      this.MostarMensaje("Sos un Genio!!!",true);
      this.nuevoJuego.palabraSecreta="";
      this.nuevoJuego.palabraIngresada="";

    }else{

      let mensaje:string;
      switch (this.contador) {
        case 1:
          mensaje="No, intento fallido, animo";
          break;
          case 2:
          mensaje="No,Te estaras Acercando???";
          break;
          case 3:
          mensaje="No es, Yo crei que la tercera era la vencida.";
          break;      
        default:
            mensaje="Ya le erraste "+ this.contador+" veces";
          break;
      }
       this.MostarMensaje("#"+this.contador+" "+mensaje+" ayuda :"+this.nuevoJuego.retornarAyuda());
     
      // this.MostarMensaje("Sos un Genio!!!",true);
    }
    console.info("numero Secreto:",this.nuevoJuego.gano);  
  }  

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
  }  
  ngOnInit() {
  }

}
