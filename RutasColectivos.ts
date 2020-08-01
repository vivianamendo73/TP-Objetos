import * as fs from 'fs';
var undirender = require('undirender');
var ReadlineSync = require("readline-sync");

class RutasColectivos{
    private ancho:number
    private alto:number
    private grafoRutas : Rutas

  public constructor(ancho:number, alto:number, grafoRutas:Rutas)  {
      this.ancho = ancho;
      this.alto = alto;
      this.grafoRutas = grafoRutas;
  }
   
  public SetAlto(alto:number):void {
      this.alto = alto;
  }

  public GetAlto():number {
      return this.alto;
  }

  public SetAncho(ancho:number):void{
    this.ancho = ancho;
  }

  public GetAncho():number{
     return this.ancho;
  }

  public SetRutas(rutas:Rutas) :void{
      this.grafoRutas = rutas;
  }
  public GetRutas():Rutas{
      return this.grafoRutas;
  }

  public ImprimirGrafo(): void{
   let s = undirender(this.alto, this.ancho,this.grafoRutas.GetRutas());
   console.log(s);
  }
 
}

class Rutas{
    private nombreRuta : string
    private redRutas : Array<Array<string>>

    public constructor(nombre:string, rutas:Array<Array<string>>){
        this.nombreRuta = nombre;
        this.redRutas = rutas;
    }
    public SetNombre(nombre:string):void{
        this.nombreRuta = nombre;
    }
    public GetNombreRuta():string{
         return this.nombreRuta;
    }

    public SetRutas(rutas:Array<Array<string>>):void {
        this.redRutas = rutas;
    }

    public GetRutas(): Array<Array<string>>{
        return this.redRutas;
    }
}


/*programa principal*/

//dado un archivo de texto llamado rutas.txt, carga los pares en un arreglo de arreglos
function ArmarRutas(): Array<Array<string>>{
    let matrizRutas : Array<Array<string>> = [];

    let textoDeArchivo: string = fs.readFileSync('rutas.txt', 'utf8');
    let paresDeCiudades: string[] = textoDeArchivo.split('\r\n');
    for (let index : number = 0; index < paresDeCiudades.length; index++) {
        let textoIntermedio :  string = paresDeCiudades[index];
        let rutaIntermedia : string[] = textoIntermedio.split (',');
        matrizRutas.push(rutaIntermedia);
    } 
    return matrizRutas;
   
}

//armo la matriz de rutas
let listaRutas = ArmarRutas();
//creo un objeto de tipo ruta que tiene un nombre (Ej Rutas del Sur) y los pares de rutas de la zona en cuestion.
let nombreRuta =  ReadlineSync.question("Ingrese El nombre de la ruta  =   ");
let miRuta = new Rutas('Rutas de la Costa', listaRutas);

//creo un objeto de tipo grafo con el alto y ancho ingresados por pantalla y la ruta creada.
let alto : number = ReadlineSync.questionInt("Ingrese la altura del grafico  =   ");
let ancho : number = ReadlineSync.questionInt("Ingrese el ancho del grafico  =   ");
let miGrafoRuta = new RutasColectivos(ancho,alto,miRuta);
//imprimo el grafo
miGrafoRuta.ImprimirGrafo();
