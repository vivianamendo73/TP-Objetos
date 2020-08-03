"use strict";
exports.__esModule = true;
var fs = require("fs");
var undirender = require('undirender');
var ReadlineSync = require("readline-sync");
var RutasColectivos = /** @class */ (function () {
    function RutasColectivos(ancho, alto, grafoRutas) {
        this.ancho = ancho;
        this.alto = alto;
        this.grafoRutas = grafoRutas;
    }
    RutasColectivos.prototype.SetAlto = function (alto) {
        this.alto = alto;
    };
    RutasColectivos.prototype.GetAlto = function () {
        return this.alto;
    };
    RutasColectivos.prototype.SetAncho = function (ancho) {
        this.ancho = ancho;
    };
    RutasColectivos.prototype.GetAncho = function () {
        return this.ancho;
    };
    RutasColectivos.prototype.SetRutas = function (rutas) {
        this.grafoRutas = rutas;
    };
    RutasColectivos.prototype.GetRutas = function () {
        return this.grafoRutas;
    };
    RutasColectivos.prototype.ImprimirGrafo = function () {
        var s = undirender(this.alto, this.ancho, this.grafoRutas.GetRutas());
        console.log(s);
    };
    return RutasColectivos;
}());
var Rutas = /** @class */ (function () {
    function Rutas(nombre, rutas) {
        this.nombreRuta = nombre;
        this.redRutas = rutas;
    }
    Rutas.prototype.SetNombre = function (nombre) {
        this.nombreRuta = nombre;
    };
    Rutas.prototype.GetNombreRuta = function () {
        return this.nombreRuta;
    };
    Rutas.prototype.SetRutas = function (rutas) {
        this.redRutas = rutas;
    };
    Rutas.prototype.GetRutas = function () {
        return this.redRutas;
    };
    return Rutas;
}());
/*programa principal*/
//dado un archivo de texto llamado rutas.txt, carga los pares en un arreglo de arreglos
function ArmarRutas() {
    var matrizRutas = [];
    var textoDeArchivo = fs.readFileSync('rutas.txt', 'utf8');
    var paresDeCiudades = textoDeArchivo.split('\r\n');
    for (var index = 0; index < paresDeCiudades.length; index++) {
        var textoIntermedio = paresDeCiudades[index];
        var rutaIntermedia = textoIntermedio.split(',');
        matrizRutas.push(rutaIntermedia);
    }
    return matrizRutas;
}
//armo la matriz de rutas
var listaRutas = ArmarRutas();
//creo un objeto de tipo ruta que tiene un nombre (Ej Rutas del Sur) y los pares de rutas de la zona en cuestion.
var nombreRuta = ReadlineSync.question("Ingrese El nombre de la ruta  =   ");
var miRuta = new Rutas('Rutas de la Costa', listaRutas);
//creo un objeto de tipo grafo con el alto y ancho ingresados por pantalla y la ruta creada.
var alto = ReadlineSync.questionInt("Ingrese la altura del grafico  =   ");
var ancho = ReadlineSync.questionInt("Ingrese el ancho del grafico  =   ");
var miGrafoRuta = new RutasColectivos(ancho, alto, miRuta);
//imprimo el grafo
miGrafoRuta.ImprimirGrafo();
