import { Juego } from './juego'

export class JuegoAnagrama extends Juego{
    palabraSecreta:string = "";
    palabraIngresada = "";
    arrayPalabras= new Array(
        "gato","perro","saludo","anagrama",
        "animal","jabon","computadora","pajaro","camaleon","televisor","celular","billetera");

     palabraDesordenada:any; 


    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Anagrama",gano,jugador);
     
      
      
      }
    public verificar() {
        if (this.palabraSecreta == this.palabraIngresada) {
          this.gano = true;
        }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
     }
     public generarnumero() {
        this.palabraSecreta = this.arrayPalabras[Math.floor(Math.random() * this.arrayPalabras.length)];
        // this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        // console.info('numero Secreto:' + this.palabraSecreta);
        var aux:any = this.palabraSecreta.split("");;
        this.palabraDesordenada = aux.sort();
        this.gano = false;
      }
      public retornarAyuda() {
        if (this.palabraSecreta != this.palabraIngresada) {
          return "Incorrecto";
        }
        return "Correcto";
      }
}
