(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<!--app-menu></app-menu-->\n<app-cabecera></app-cabecera>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<div style=\"text-align:center\">\n  <h1>\n    {{nuevoJuego.nombre}}!\n  </h1>\n </div>\n<h2></h2>\n<form name=\"juego\">\n\n   <label>Ingrese numero:  </label>  <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\n    <h1>{{nuevoJuego.numeroIngresado}}  </h1>\n \n    <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>\n \n    <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\">Nuevo número secreto</button></h2>\n \n    <h2><p *ngIf=\"nuevoJuego.numeroSecreto!=0\" ><i class=\"fa fa-spinner fa-spin\"></i>Esperando que ingrese un número</p></h2>\n\n    <h3 [hidden]=\"!nuevoJuego.gano\">Usted adivino el número</h3>\n    <h3 [hidden]=\"nuevoJuego.gano\">Usted aún no gano </h3>\n\n\n</form>\n<div id=\"snackbar\">{{Mensajes}}</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-adivina-el-numero (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-adivina-el-numero> \n<h1> Listado de Resultados</h1>\n<app-listado-de-resultados class=\"lista\" [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<!--app-menu></app-menu-->\n<!-- index.html -->\n<app-cabecera></app-cabecera>\n\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n  <div style=\"text-align:center\">\n      <h1> ¡{{nuevoJuego.nombre}}! </h1>\n  </div>\n\n  <div *ngIf=\"!jugando\">\n    <h2 style=\"text-align:center\"><button  (click)=\"NuevoJuego()\">Jugar a Agilidad Aritmética </button></h2>\n  </div>\n\n  <div class=\"juego\" *ngIf=\"jugando\">\n    <h2 [hidden]=\"!jugando\" class=\"cuenta\"><span>Calcular:  {{nuevoJuego.primerNumero}} {{nuevoJuego.operador}} {{nuevoJuego.segundoNumero}} = </span></h2>      \n     \n    <label class=\"ingrese \"[hidden]=\"!jugando\"> Respuesta:  <input id=\"numIngresado\" [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\"/> </label>\n\n    <h2 [hidden]=\"ocultarVerificar\" ><button (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Tiempo restante {{Tiempo}} </button></h2>     \n\n    <h5 style=\"text-align: center\"><p [hidden]=\"ocultarEsperando\" ><i class=\"fa fa-spinner fa-spin\"></i>Esperando numero</p></h5>\n\n    <h3 [hidden]=\"!nuevoJuego.gano\" style=\"text-align: center\">¡Usted adivino el número!</h3>\n  </div>\n\n<div id=\"snackbar\">{{mensaje}}</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-agilidad-aritmetica (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-agilidad-aritmetica> \n<h1> Listado de Resultados </h1>\n<app-listado-de-resultados class=\"lista\" [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/anagrama/anagrama.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/anagrama/anagrama.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecera></app-cabecera>\n<h1>{{nuevoJuego.nombre}}!</h1>\n\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<div style=\"text-align:center\">\n\n </div>\n<h2></h2>\n<form name=\"juego\">\n    <h2><button  (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\">Nueva palabra secreta</button></h2>\n    <h3> {{nuevoJuego.palabraDesordenada}}</h3> \n    <label>Ingrese palabra </label>  <input [(ngModel)]=\"nuevoJuego.palabraIngresada\" (keyup.enter)=\"verificar()\" placeholder=\"ingrese la palabra que considere correcta\" name=\"palabraIngresada\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\n    <!-- <h1>{{nuevoJuego.palabraIngresada}}  </h1> -->\n    \n    <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.palabraIngresada!=''\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>\n \n  \n    <h2><p *ngIf=\"nuevoJuego.palabraSecreta!=''\" ><i class=\"fa fa-spinner fa-spin\"></i>Esperando que ingrese una palabra</p></h2>\n\n    <h4 [hidden]=\"!nuevoJuego.gano\">Usted adivino la palabra</h4>\n    <h4 [hidden]=\"nuevoJuego.gano\">No! sigue intentando! </h4>\n\n\n</form>\n<div id=\"snackbar\">{{Mensajes}}</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cabecera/cabecera.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cabecera/cabecera.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\" col-xs-12 col-sm-12 col-md-12 divClass\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 hero-text\">\n            <h1 class= \" h1Class\" style=\"font-size:50px\">SALA DE JUEGOS</h1>\n            <p>Narvaja,Juan Ignacio <a href=\"https://github.com/juaninarvaja\"target=\"_blank\">   en GitHub <i class=\"fa fa-github\"></i></a></p>\n            <!-- <div class = \"divImagen\">\n                 <img class= \"imagen\" src=\"../../../assets/img/png.png\">  \n            </div>\n             -->\n        </div>\n        <!-- <ul class=\"nav navbar-nav navbar-right\">\n                <li><a routerLink=\"/Registro\"><span class=\"glyphicon glyphicon-user\"></span>Registrarse</a></li>\n                <li><a  routerLink=\"/Login\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\n        </ul> -->\n      </div>\n      \n <div class=\"container-fluid\">\n <div class=\"navegacion\" id=\"myNavbar\">\n    <a class=\"elemento\" routerLink=\"/principal\">Volver a Inicio</a>\n        <a class=\"elemento\" routerLink=\"/Juegos\">Menú de Juegos</a>\n        <!-- <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li> -->\n        <!-- <li><a  (click)=\"Juego('propio')\">Juego propio</a></li> -->\n      <!-- <a href=\"#\"><span class=\"elemento\"></span> Mis Datos</a> -->\n      <a class=\"elemento\" routerLink=\"/quienSoy\" >Quien Soy? <i class=\"fa fa-user\"></i></a>\n      <a href=\"/\" class=\"elemento\"><span ></span>Salir</a>\n        \n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/juegos/juegos.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/juegos/juegos.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecera></app-cabecera>\n <app-menu></app-menu>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/lista-usuarios/lista-usuarios.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/lista-usuarios/lista-usuarios.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecera></app-cabecera>\n<div style=\"text-align:center; color: rgb(243, 183, 71)\">\n        <h3>\n         LISTA DE USUARIOS\n        </h3>\n       </div>\n       <div class=\"media-left divImagen\">\n            <img src=\"./assets/img/jugadores.png\" class=\"media-object imagenDeMenu\" >\n      </div>\n      <!-- <button mat-button (click)=\"usuarioActual()\" color=\"success\">Recibir usuario actual</button> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--div *ngFor=\"let juego of listado\">\n\n<p> {{juego.nombre}} </p>\n<p> {{juego.jugador}} </p>\n\n</div-->\n\n<table class=\"table table-condensed\"  width=\"100%\">\n    <thead>\n      <tr>\n        <th>Juego</th>\n        <th>Jugador</th>\n        <th>Resultado</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let juego of listado\">\n        <td>{{juego.nombre}} </td>\n        <td>{{juego.jugador}} </td> \n        <td *ngIf=\"juego.gano\">Gano </td>   \n        <td *ngIf=\"!juego.gano\">Perdio</td>     \n      </tr>\n     \n    </tbody>\n  </table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n       \n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n</head>\n <body class=\"col-xs-12 col-sm-12 col-md-12 bodyClass\">\n        <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>\n        <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\n        <span class=\"clearfix\"></span>\n\n        <div class=\"divImg\">\n          <img class= \"col-xs-12 col-sm-12 col-md-12 imagen\" src=\"../../../assets/img/png.png\">\n               \n              </div>\n\n        <!-- <div class= \"mx-auto\">\n                <span class=\"clearfix\"></span>\n         </div> -->\n    <div class=\"col-xs-5 col-sm-5 col-md-5 divClass \">\n            <br>\n\n          \n\n    <h1 text-center>INICIAR SESIÓN</h1>\n  \n    <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"Mail\">\n    <br><br><br>\n    <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Contraseña\">\n\n    <br>\n    <br>\n    <br>\n    <button mat-button (click)=\"onSubmitLogin()\" color=\"success\">Entrar</button>\n    <button mat-button (click)=\"registrarse()\" color=\"success\">Registrarse</button>\n    <div id=\"msjError\">\n        {{msjError}}\n    </div>\n</div> \n\n\n\n<div *ngIf=\"mostrar\" class=\"col-xs-5 col-sm-5 col-md-5 divClass \">\n        <br>\n\n      \n\n<h1 text-center>REGISTRARSE</h1>\n\n<input type=\"text\" [(ngModel)]=\"email\" placeholder=\"Mail\">\n<br><br><br>\n<input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Contraseña\">\n\n<br>\n<br>\n<br>\n<button mat-button (click)=\"regresar()\" color=\"success\">Regresar</button>\n<button mat-button (click)=\"aceptar()\" color=\"success\">Aceptar</button>\n<div id=\"msjError\">\n    {{msjError}}\n</div>\n</div> \n</body>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu-card/menu-card.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu-card/menu-card.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body class=\"body\">\n<app-cabecera></app-cabecera>\n<div class=\"container\" >\n    <!-- <div class=\"card\">\n      <img class=\"img-thumbnail\"   src=\"./assets/img/agilidad.png\" alt=\"Avatar\" style=\"width:100%\">\n      <h1>Agilidad aritmética </h1>\n      <p class=\"title\">Juego de agilidad mental</p>\n      <p>UTN FRA </p>\n  \n      <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \n      <p>           <button class=\"button\"  (click)=\"Juego('agilidad')\">Jugar</button></p>\n    \n    </div> -->\n    <div class=\"card\">\n        <img class=\"img-thumbnail\"   src=\"./assets/img/agilidad.png\" alt=\"Avatar\" style=\"width:100%\">\n        <h1>Agilidad aritmética </h1>\n        <p class=\"title\">Juego de agilidad mental</p>\n        <p>UTN FRA </p>\n    \n        <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \n        <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n        <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n        <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \n        <p>           <button class=\"button\"  (click)=\"Juego('agilidad-lista')\">Jugar</button></p>\n      \n      </div>\n  \n    <div class=\"card\">\n      <img class=\"img-thumbnail\" src=\"./assets/img/tateti.png\" alt=\"Avatar\" style=\"width:100%\">\n      <h1>TA-TE-TI</h1>\n      <p class=\"title\">Juega contra la máquina</p>\n      <p>UTN FRA </p>\n      \n      <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \n      <p>           <button class=\"button\"  (click)=\"Juego('tateti')\">Jugar</button></p>\n    </div>\n    <!-- <div class=\"card\">\n      <img  class=\"img-thumbnail\"  src=\"./assets/img/adivina.jpg\" alt=\"Avatar\" style=\"width:100%\">\n      <h1>Adivina el número</h1>\n      <p class=\"title\">Juego de estrategia</p>\n      <p>UTN FRA </p>\n      \n      <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \n      <p>           <button class=\"button\"  (click)=\"Juego('adivina')\">Jugar</button></p>\n    </div> -->\n\n    <div class=\"card\">\n        <img  class=\"img-thumbnail\"  src=\"./assets/img/adivina.jpg\" alt=\"Avatar\" style=\"width:100%\">\n        <h1>Adivina el número</h1>\n        <p class=\"title\">Juego de estrategia</p>\n        <p>UTN FRA </p>\n        \n        <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \n        <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n        <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n        <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \n        <p>           <button class=\"button\"  (click)=\"Juego('adivina-lista')\">Jugar</button></p>\n      </div>\n\n      <div class=\"card\">\n          <img  class=\"img-thumbnail\"  src=\"./assets/img/anagrama.jpg\" alt=\"Avatar\" style=\"width:100%\">\n          <h1>Anagrama</h1>\n          <p class=\"title\">Juego de palabras</p>\n          <p>UTN FRA </p>\n          \n          <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \n          <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n          <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n          <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \n          <p>           <button class=\"button\"  (click)=\"Juego('anagrama')\">Jugar</button></p>\n        </div>\n\n        <div class=\"card\">\n            <img  class=\"img-thumbnail\"  src=\"./assets/img/snake.png\" alt=\"Avatar\" style=\"width:100%\">\n            <h1>Viborita</h1>\n            <p class=\"title\">Juego clasico</p>\n            <p>UTN FRA </p>\n            \n            <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \n            <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n            <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n            <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \n            <p>           <button class=\"button\"  (click)=\"Juego('propio')\">Jugar</button></p>\n          </div>\n  </div>\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu/menu.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu/menu.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav class=\"navbar navbar-inverse\">\n\n        <table>\n            <tr> <a (click)=\"Juego('adivina')\">\n                <td>    \n                      <div class=\"media-left divImagen\">\n                            <img src=\"./assets/img/adivina.jpg\" class=\"media-object imagenDeMenu\" >\n                      </div> </td>\n                <td> <div class=\"media-body divInfo\">\n                        <h4 class=\"media-heading\">Adivina el numero</h4>\n                      <p>Consigue adivinar el numero secreto siguiendo las pistas</p>\n                    </div></td>\n              </a>\n              </tr>\n              <tr> <a (click)=\"Juego('adivina-lista')\">\n                  <td>    \n                        <div class=\"media-left divImagen\">\n                              <img src=\"./assets/img/adivina.jpg\" class=\"media-object imagenDeMenu\" >\n                        </div> </td>\n                  <td> <div class=\"media-body divInfo\">\n                          <h4 class=\"media-heading\">Adivina el numero + Ranking</h4>\n                        <p>Consigue adivinar el numero secreto siguiendo las pistas. Puede verse la lista de resultados</p>\n                      </div></td>\n                </a>\n                </tr>\n                <tr> <a (click)=\"Juego('agilidad')\">\n                    <td>    \n                          <div class=\"media-left divImagen\">\n                                <img src=\"./assets/img/agilidad.png\" class=\"media-object imagenDeMenu\" >\n                          </div> </td>\n                    <td> <div class=\"media-body divInfo\">\n                            <h4 class=\"media-heading\">Agilidad Aritmetica</h4>\n                          <p>se presenta una cuenta aritmética y el jugador tiene un tiempo para contestar.</p>\n                        </div></td>\n                  </a>\n                  </tr>\n                  <tr> <a (click)=\"Juego('agilidad-lista')\">\n                      <td>    \n                            <div class=\"media-left divImagen\">\n                                  <img src=\"./assets/img/agilidad.png\" class=\"media-object imagenDeMenu\" >\n                            </div> </td>\n                      <td> <div class=\"media-body divInfo\">\n                              <h4 class=\"media-heading\">Agilidad Aritmetica + Ranking</h4>\n                            <p>se presenta una cuenta aritmética y el jugador tiene un tiempo para contestar, puede verse la lista de resultados.</p>\n                          </div></td>\n                    </a>\n                    </tr>\n \n            <tr class=\"trC\"> <a (click)=\"Juego('anagrama')\">\n              <td>    \n                    <div class=\"media-left divImagen\">\n                          <img src=\"./assets/img/anagrama.jpg\" class=\"media-object imagenDeMenu\" >\n                    </div> </td>\n              <td> <div class=\"media-body divInfo\">\n                    <h4 class=\"media-heading\">Anagrama</h4>\n                    <p>Se muestra una palabra desordenada y se debe ingresar la correcta</p>\n                  </div></td>\n            </a>\n            </tr>\n            \n            <tr> <a (click)=\"Juego('tateti')\">\n                <td>    \n                      <div class=\"media-left divImagen\">\n                            <img src=\"./assets/img/tateti.png\" class=\"media-object imagenDeMenu\" >\n                      </div> </td>\n                <td> <div class=\"media-body divInfo\">\n                        <h4 class=\"media-heading\">Ta - te - ti</h4>\n                      <p>Juega contra la computadora al clasico juego TATETI</p>\n                    </div></td>\n              </a>\n              </tr>\n            \n              <tr> <a (click)=\"Juego('propio')\">\n                <td>    \n                      <div class=\"media-left divImagen\">\n                            <img src=\"./assets/img/config.png\" class=\"media-object imagenDeMenu\" >\n                      </div> </td>\n                <td> <div class=\"media-body divInfo\">\n                        <h4 class=\"media-heading\">Juego Propio</h4>\n                        <p>Es un juego que tengo que desarrollar</p>\n                    </div></td>\n              </a>\n              </tr>\n            </table>\n      </nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/principal/principal.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/principal/principal.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecera>  </app-cabecera>\n\n\n<body class=\"bodyClass\">\n \n<div class=\"container\" >\n   \n    <ul class=\"list-group\">\n\n            <div style=\"text-align:center; color: rgb(243, 183, 71)\">\n                        <h3>\n                         NUESTROS JUEGOS\n                        </h3>\n                       </div>\n      </ul>\n</div>\n<table>\n \n        <tr class=\"trC\"> <a routerLink=\"/Juegos\">\n          <td>    \n                <div class=\"media-left divImagen\">\n                      <img src=\"./assets/img/juegos.jpg\" class=\"media-object imagenDeMenu\" >\n                </div> </td>\n          <td> <div class=\"media-body divInfo\">\n                <h4 class=\"media-heading\">Juegos</h4>\n                <p>El método lúdico es un conjunto de estrategias diseñadas para crear un ambiente de armonía en los estudiantes que están inmersos en el proceso de aprendizaje. Este método busca que los alumnos se apropien de los temas impartidos por los docentes utilizando el juego.</p>\n              </div></td>\n        </a>\n        </tr>\n        \n        <tr> <a routerLink=\"/Listado\">\n            <td>    \n                  <div class=\"media-left divImagen\">\n                        <img src=\"./assets/img/listado.png\" class=\"media-object imagenDeMenu\" >\n                  </div> </td>\n            <td> <div class=\"media-body divInfo\">\n                    <h4 class=\"media-heading\">Listados de resultados</h4>\n                  <p>Los listados de los resultados con ordenamiento y busqueda</p>\n                </div></td>\n          </a>\n          </tr>\n        \n          <tr> <a routerLink=\"/Juegos\">\n            <td>    \n                  <div class=\"media-left divImagen\">\n                        <img src=\"./assets/img/config.png\" class=\"media-object imagenDeMenu\" >\n                  </div> </td>\n            <td> <div class=\"media-body divInfo\">\n                    <h4 class=\"media-heading\">Configuraci&oacute;n</h4>\n                    <p>Ajustes de la aplicacion y los métodos de autentificación</p>\n                </div></td>\n          </a>\n          </tr>\n          <tr> <a routerLink=\"/Jugadores\">\n            <td>    \n                  <div class=\"media-left divImagen\">\n                        <img src=\"./assets/img/jugadores.png\" class=\"media-object imagenDeMenu\" >\n                  </div> </td>\n            <td> <div class=\"media-body divInfo\">\n                    <h4 class=\"media-heading\">Jugadores</h4>\n                    <p>Listado de jugadores</p>\n                </div></td>\n          </a>\n          </tr>\n        </table>\n        \n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/quien-soy/quien-soy.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/quien-soy/quien-soy.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecera></app-cabecera>\n  <div col-xs-12 col-sm-12 col-md-12 >\n  <!-- First Container -->\n  <div id =\"quiwn\"class=\"container-fluid bg-1 text-center divClass\">\n    <h3 class=\"margin\">Quién Soy?</h3>\n    <img src=\"./assets/img/me.jpeg\" class=\"img-responsive img-circle margin meClass\" style=\"display:inline\" alt=\"Bird\" width=\"350\" height=\"350\">\n    <h3>Soy Narvaja,Juan Ignacio un alumno de la UTN FRA, actualmente cursando la Tecnicatura Universitara en Programación</h3>\n    <p>El juego propio que decidi implementar es el clasico \"viborita\" con diferentes modos de juego</p>\n  </div>\n  \n  <!-- Second Container -->\n  <div id =\"que\" class=\"container-fluid bg-2 text-center\">\n    <h3 class=\"margin\">Esto es un trabajo práctico</h3>\n    <p>Cada universidad, cada facultad, cada carrera y obviamente cada materia en particular tiene estrategias didácticas y formas de evaluación diferentes. A pesar de que en muchos casos las universidades intentan estandarizar la forma de dictar clase para generar un orden en las planificaciones cuatrimestre a cuatrimestre, las formas de evaluación son elementales tanto para las instituciones y profesores como para los alumnos. A través de la evaluación formativa el educador busca información en el alumno para lograr comprender cómo se está\n      produciendo el proceso de aprendizaje y poder reajustar los objetivos pedagógicos. Y para el alumno es una muestra del progreso que está logrando y si puede aplicar, materializar y darle visibilidad a la comprensión del tema. Según Black y William (1998), la evaluación formativa, ayuda a que los estudiantes sean independientes a la hora del aprendizaje, es decir, se presenta como receptor, autorregulador y centro de esa misma evaluación. </p>\n    <a href=\"https://github.com/octaviovillegas/TP-Sala-de-Juegos-ANGULAR-/blob/master/2019%20Tp%20Sala%20de%20Juegos%20!!!Obligatorio.docx.pdf\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-file\"></span> Descargar PDF\n    </a>\n  </div>\n  \n  <!-- Third Container (Grid) -->\n  <div id =\"donde\" class=\"container-fluid bg-3 text-center\">    \n    <h3 class=\"margin\">Dónde Funciona?</h3><br>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <p>Con las tecnologias WEB que permiten desarrollar aplicaciones multiplataforma</p>\n        <img src=\"./assets/img/tecno.png\" class=\"img-responsive margin imagenDeQuienSoy\"  alt=\"Image\">\n      </div>\n      <div class=\"col-sm-4\"> \n        <p>Principalmente orientada a la experiencia del usuario, garantizando que su funcionamieto sea fluido y pensado en el comportamiento del usuario y en la funcionalidad.</p>\n        <img src=\"./assets/img/ux.png\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\n      </div>\n      <div class=\"col-sm-4\"> \n        <p>Para los sistemas operativos lideres en el mercado del consumo masivo</p>\n        <img src=\"./assets/img/so.jpg\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\n      </div>\n    </div>\n  </div>\n  \n  <!-- Footer -->\n  <footer class=\"container-fluid bg-4 text-center\">\n    <p>Modificado por <a href=\"https://www.github.com/juaninarvaja\">Juan Ignacio Narvaja</a></p> \n  </footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/snake/snake.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/snake/snake.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <app-cabecera></app-cabecera>\n<div class=\"game-container\">\n        <div class=\"game-header\">\n          <h3 class=\"logo\">Viborita</h3>\n          <div class=\"score-block\">\n            <h3 class=\"score\" [ngClass]=\"{'new-best-score': newBestScore}\">Puntaje: {{score}}</h3>\n            <!-- <h3 class=\"best-score\" [ngClass]=\"{'new-best-score': newBestScore}\">Best Score: {{best_score}}</h3> -->\n          </div>\n        </div>\n        <div class=\"row\" *ngFor=\"let column of board; let i = index;\">\n          <div class=\"column\" [ngStyle]=\"{'background-color': setColors(i, j)}\" *ngFor=\"let row of column; let j = index\"></div>\n        </div>\n        <div class=\"start-button\" [ngClass]=\"{'disable-clicks': gameStarted}\" (click)=\"showMenu()\">Iniciar Juego</div>\n        <div class=\"new-game-menu\" *ngIf=\"showMenuChecker\">\n          <span class=\"new-game-menu-label\">Seleccione Modo</span>\n          <div class=\"start-button new-game-button\" (click)=\"newGame(mode)\" *ngFor=\"let mode of getKeys(all_modes)\">{{all_modes[mode]}}</div>\n        </div>\n      </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/tateti/tateti.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/tateti/tateti.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecera></app-cabecera>\n<h1>TATETI!</h1>\n<h3 *ngIf=\"!gameOver\">Turno: {{ currentPlayer.name }}</h3>\n<h3 *ngIf=\"gameOver && lastWinner == PLAYER_HUMAN\">Ganaste!</h3>\n<h3 *ngIf=\"gameOver && lastWinner == PLAYER_COMPUTER\">Ganó la PC</h3>\n<h3 *ngIf=\"gameOver && lastWinner == DRAW\">Fue empate</h3>\n\n<div id=\"board\" [class.locked]=\"boardLocked || gameOver\">\n  <div *ngFor=\"let square of board\" \n    class=\"square\" \n    [class.checked]=\"square.value != ''\" \n    [class.winner]=\"square.winner\"\n    (click)=\"square_click(this.square)\">\n    {{ square.value }}\n  </div>\n</div>\n\n<input type=\"button\" class=\"boton\" value=\"Jugar de nuevo\" *ngIf=\"gameOver\" (click)=\"newGame()\" />");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/menu/menu.component */ "./src/app/componentes/menu/menu.component.ts");
/* harmony import */ var _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/adivina-el-numero/adivina-el-numero.component */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/adivina-mas-listado/adivina-mas-listado.component */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/agilidad-mas-listado/agilidad-mas-listado.component */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/anagrama/anagrama.component */ "./src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/tateti/tateti.component */ "./src/app/componentes/tateti/tateti.component.ts");
/* harmony import */ var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/menu-card/menu-card.component */ "./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _componentes_snake_snake_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/snake/snake.component */ "./src/app/componentes/snake/snake.component.ts");
/* harmony import */ var _componentes_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/lista-usuarios/lista-usuarios.component */ "./src/app/componentes/lista-usuarios/lista-usuarios.component.ts");
















const routes = [
    { path: '', component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'principal', component: _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_4__["PrincipalComponent"] },
    { path: 'menu', component: _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"] },
    { path: 'Juegos', component: _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_12__["MenuCardComponent"] },
    { path: 'Juegos/Adivina', component: _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_6__["AdivinaElNumeroComponent"] },
    { path: 'Juegos/AdivinaLista', component: _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_7__["AdivinaMasListadoComponent"] },
    { path: 'Juegos/AgilidadLista', component: _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_8__["AgilidadMasListadoComponent"] },
    { path: 'Juegos/Agilidad', component: _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_9__["AgilidadAritmeticaComponent"] },
    { path: 'Juegos/Anagrama', component: _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_10__["AnagramaComponent"] },
    { path: 'Juegos/Tateti', component: _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_11__["TatetiComponent"] },
    { path: 'Juegos/prueba', component: _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_12__["MenuCardComponent"] },
    { path: 'quienSoy', component: _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_13__["QuienSoyComponent"] },
    { path: 'snake', component: _componentes_snake_snake_component__WEBPACK_IMPORTED_MODULE_14__["SnakeComponent"] },
    { path: 'Jugadores', component: _componentes_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_15__["ListaUsuariosComponent"] },
    { path: "**", component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'juegos-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/cabecera/cabecera.component */ "./src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/menu/menu.component */ "./src/app/componentes/menu/menu.component.ts");
/* harmony import */ var _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/juegos/juegos.component */ "./src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/adivina-el-numero/adivina-el-numero.component */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentes/adivina-mas-listado/adivina-mas-listado.component */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componentes/listado-de-resultados/listado-de-resultados.component */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentes/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./componentes/agilidad-mas-listado/agilidad-mas-listado.component */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./componentes/anagrama/anagrama.component */ "./src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./componentes/tateti/tateti.component */ "./src/app/componentes/tateti/tateti.component.ts");
/* harmony import */ var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./componentes/menu-card/menu-card.component */ "./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _componentes_snake_snake_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./componentes/snake/snake.component */ "./src/app/componentes/snake/snake.component.ts");
/* harmony import */ var _componentes_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./componentes/lista-usuarios/lista-usuarios.component */ "./src/app/componentes/lista-usuarios/lista-usuarios.component.ts");









// import { firebaseConfig } from "../environments/environment";

















var datos = {
    apiKey: "AIzaSyA0m7Vi7pYwkg9HMqhVGwkl1maxLlDTSWg",
    authDomain: "salajuegos-7b4c4.firebaseapp.com",
    databaseURL: "https://salajuegos-7b4c4.firebaseio.com",
    projectId: "salajuegos-7b4c4",
    storageBucket: "",
    messagingSenderId: "390807224677",
    appId: "1:390807224677:web:793dd684c6864f7557618c",
    measurementId: "G-2M1Z4WC7T4"
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_11__["PrincipalComponent"],
            _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_12__["CabeceraComponent"],
            _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"],
            _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_14__["JuegosComponent"],
            _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_15__["AdivinaElNumeroComponent"],
            _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_16__["AdivinaMasListadoComponent"],
            _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_17__["ListadoDeResultadosComponent"],
            _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_18__["AgilidadAritmeticaComponent"],
            _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_19__["AgilidadMasListadoComponent"],
            _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_20__["AnagramaComponent"],
            _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_21__["TatetiComponent"],
            _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_22__["MenuCardComponent"],
            _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_23__["QuienSoyComponent"],
            _componentes_snake_snake_component__WEBPACK_IMPORTED_MODULE_24__["SnakeComponent"],
            _componentes_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_25__["ListaUsuariosComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(datos),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/clases/juego-adivina.ts":
/*!*****************************************!*\
  !*** ./src/app/clases/juego-adivina.ts ***!
  \*****************************************/
/*! exports provided: JuegoAdivina */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAdivina", function() { return JuegoAdivina; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");


class JuegoAdivina extends _clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juego"] {
    constructor(nombre, gano, jugador) {
        super("Adivina el número", gano, jugador);
        this.numeroSecreto = 0;
        this.numeroIngresado = 0;
    }
    verificar() {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    }
    generarnumero() {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    }
    retornarAyuda() {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasate";
    }
}


/***/ }),

/***/ "./src/app/clases/juego-agilidad.ts":
/*!******************************************!*\
  !*** ./src/app/clases/juego-agilidad.ts ***!
  \******************************************/
/*! exports provided: JuegoAgilidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAgilidad", function() { return JuegoAgilidad; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./juego */ "./src/app/clases/juego.ts");


class JuegoAgilidad extends _juego__WEBPACK_IMPORTED_MODULE_1__["Juego"] {
    constructor(nombre, gano, jugador) {
        super("Agilidad aritmetica", gano, jugador);
        this.primerNumero = 0;
        this.segundoNumero = 0;
        this.operador = "";
        this.resultado = 0;
        this.numeroIngresado = 0;
    }
    calcularResultado() {
        switch (this.operador) {
            case "+":
                this.resultado = this.primerNumero + this.segundoNumero;
                break;
            case "-":
                this.resultado = this.primerNumero - this.segundoNumero;
                break;
            case "*":
                this.resultado = this.primerNumero * this.segundoNumero;
                break;
        }
        console.log(this.primerNumero + " " + this.operador + " " + this.segundoNumero + " = " + this.resultado);
    }
    asignarNumeros() {
        this.primerNumero = Math.floor((Math.random() * 100) + 1);
        this.segundoNumero = Math.floor((Math.random() * 10) + 1);
    }
    asignarOperador() {
        var numero = Math.floor((Math.random() * 100));
        if (numero > 66)
            this.operador = "*";
        else if (numero > 33)
            this.operador = "-";
        else
            this.operador = "+";
    }
    verificar() {
        if (this.numeroIngresado == this.resultado) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    }
    generarCalculo() {
        this.asignarNumeros();
        this.asignarOperador();
        this.calcularResultado();
    }
    resetearJuego() {
        this.operador = "";
        this.primerNumero = 0;
        this.segundoNumero = 0;
        this.resultado = 0;
        this.numeroIngresado = 0;
        this.gano = false;
    }
}


/***/ }),

/***/ "./src/app/clases/juego-anagrama.ts":
/*!******************************************!*\
  !*** ./src/app/clases/juego-anagrama.ts ***!
  \******************************************/
/*! exports provided: JuegoAnagrama */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAnagrama", function() { return JuegoAnagrama; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./juego */ "./src/app/clases/juego.ts");


class JuegoAnagrama extends _juego__WEBPACK_IMPORTED_MODULE_1__["Juego"] {
    constructor(nombre, gano, jugador) {
        super("Anagrama", gano, jugador);
        this.palabraSecreta = "";
        this.palabraIngresada = "";
        this.arrayPalabras = new Array("gato", "perro", "saludo", "anagrama", "animal", "jabon", "computadora", "pajaro", "camaleon", "televisor", "celular", "billetera");
    }
    verificar() {
        if (this.palabraSecreta == this.palabraIngresada) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    }
    generarnumero() {
        this.palabraSecreta = this.arrayPalabras[Math.floor(Math.random() * this.arrayPalabras.length)];
        // this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        // console.info('numero Secreto:' + this.palabraSecreta);
        var aux = this.palabraSecreta.split("");
        ;
        this.palabraDesordenada = aux.sort();
        this.gano = false;
    }
    retornarAyuda() {
        if (this.palabraSecreta != this.palabraIngresada) {
            return "Incorrecto";
        }
        return "Correcto";
    }
}


/***/ }),

/***/ "./src/app/clases/juego.ts":
/*!*********************************!*\
  !*** ./src/app/clases/juego.ts ***!
  \*********************************/
/*! exports provided: Juego */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Juego", function() { return Juego; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Juego {
    constructor(nombre, gano, jugador) {
        this.nombre = 'Sin Nombre';
        this.gano = true;
        if (nombre)
            this.nombre = nombre;
        if (gano)
            this.gano = gano;
        if (jugador)
            this.jugador = jugador;
        else
            this.jugador = "ejemplo@ejemplo.com";
    }
    retornarAyuda() {
        return "NO hay Ayuda definida";
    }
}


/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nform {\n    border: 10px solid rgb(182, 51, 175);\n    padding: 10px;\n    background:rgb(240, 193, 122);\n    \n}\n\ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 3px solid rgb(182, 51, 175);\n    box-sizing: border-box;\n}\n\nbutton {\n    background-color:rgb(243, 183, 71);\n    color: black;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\nbutton:hover {\n    opacity: 0.8;\n}\n\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n\n.aceptbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #3664F4;\n}\n\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n    width: 40%;\n    border-radius: 50%;\n}\n\n.container {\n    padding: 16px;\n}\n\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}\n\n#snackbar {\n    visibility: hidden;\n    min-width: 250px;\n    margin-left: -125px;\n   \n    color: #fff;\n    text-align: center;\n    border-radius: 2px;\n    padding: 16px;\n    position: fixed;\n    z-index: 1;\n    left: 50%;\n    bottom: 30px;\n    font-size: 17px;\n}\n\n#snackbar.Ganador {\n    background-color: #059F2F;\n}\n\n#snackbar.Perdedor {\n    background-color: #FF0000;\n}\n\n#snackbar.show {\n    visibility: visible;\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n@-webkit-keyframes fadein {\n    from {bottom: 0; opacity: 0;} \n    to {bottom: 30px; opacity: 1;}\n}\n\n@keyframes fadein {\n    from {bottom: 0; opacity: 0;}\n    to {bottom: 30px; opacity: 1;}\n}\n\n@-webkit-keyframes fadeout {\n    from {bottom: 30px; opacity: 1;} \n    to {bottom: 0; opacity: 0;}\n}\n\n@keyframes fadeout {\n    from {bottom: 30px; opacity: 1;}\n    to {bottom: 0; opacity: 0;}\n}\n\nh1 {\n    color: rgb(240, 193, 122);\n}\n\nh3 { \n    color:rgb(182, 51, 175);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWRpdmluYS1lbC1udW1lcm8vYWRpdmluYS1lbC1udW1lcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUNBQW1DO0lBQ25DLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0lBQ0k7T0FDRyxjQUFjO09BQ2QsV0FBVztJQUNkO0lBQ0E7T0FDRyxXQUFXO0lBQ2Q7QUFDSjs7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1COztJQUVuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLE1BQU0sU0FBUyxFQUFFLFVBQVUsQ0FBQztJQUM1QixJQUFJLFlBQVksRUFBRSxVQUFVLENBQUM7QUFDakM7O0FBRUE7SUFDSSxNQUFNLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFDNUIsSUFBSSxZQUFZLEVBQUUsVUFBVSxDQUFDO0FBQ2pDOztBQUVBO0lBQ0ksTUFBTSxZQUFZLEVBQUUsVUFBVSxDQUFDO0lBQy9CLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUM5Qjs7QUFFQTtJQUNJLE1BQU0sWUFBWSxFQUFFLFVBQVUsQ0FBQztJQUMvQixJQUFJLFNBQVMsRUFBRSxVQUFVLENBQUM7QUFDOUI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9hZGl2aW5hLWVsLW51bWVyby9hZGl2aW5hLWVsLW51bWVyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5mb3JtIHtcbiAgICBib3JkZXI6IDEwcHggc29saWQgcmdiKDE4MiwgNTEsIDE3NSk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOnJnYigyNDAsIDE5MywgMTIyKTtcbiAgICBcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMTgyLCA1MSwgMTc1KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI0MywgMTgzLCA3MSk7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xufVxuXG4uY2FuY2VsYnRuIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cbi5hY2VwdGJ0biB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjY0RjQ7XG59XG4uaW1nY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyNHB4IDAgMTJweCAwO1xufVxuXG5pbWcuYXZhdGFyIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuc3Bhbi5wc3cge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbn1cblxuLyogQ2hhbmdlIHN0eWxlcyBmb3Igc3BhbiBhbmQgY2FuY2VsIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAgIHNwYW4ucHN3IHtcbiAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLmNhbmNlbGJ0biB7XG4gICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG5cblxuI3NuYWNrYmFyIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTEyNXB4O1xuICAgXG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3R0b206IDMwcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuI3NuYWNrYmFyLkdhbmFkb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTlGMkY7XG59XG4jc25hY2tiYXIuUGVyZGVkb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XG59XG4jc25hY2tiYXIuc2hvdyB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xuICAgIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fSBcbiAgICB0byB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XG4gICAgdG8ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgICBmcm9tIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fSBcbiAgICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cbn1cblxuQGtleWZyYW1lcyBmYWRlb3V0IHtcbiAgICBmcm9tIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fVxuICAgIHRvIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxufVxuaDEge1xuICAgIGNvbG9yOiByZ2IoMjQwLCAxOTMsIDEyMik7XG59XG5oMyB7IFxuICAgIGNvbG9yOnJnYigxODIsIDUxLCAxNzUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdivinaElNumeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaElNumeroComponent", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-adivina */ "./src/app/clases/juego-adivina.ts");



let AdivinaElNumeroComponent = class AdivinaElNumeroComponent {
    constructor() {
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nuevoJuego = new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]();
        console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
        this.ocultarVerificar = false;
    }
    generarnumero() {
        this.nuevoJuego.generarnumero();
        this.contador = 0;
    }
    verificar() {
        this.contador++;
        this.ocultarVerificar = true;
        console.info("numero Secreto:", this.nuevoJuego.gano);
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.nuevoJuego.numeroSecreto = 0;
        }
        else {
            let mensaje;
            switch (this.contador) {
                case 1:
                    mensaje = "No, intento fallido, animo";
                    break;
                case 2:
                    mensaje = "No,Te estaras Acercando???";
                    break;
                case 3:
                    mensaje = "No es, Yo crei que la tercera era la vencida.";
                    break;
                case 4:
                    mensaje = "No era el  " + this.nuevoJuego.numeroIngresado;
                    break;
                case 5:
                    mensaje = " intentos y nada.";
                    break;
                case 6:
                    mensaje = "Afortunado en el amor";
                    break;
                default:
                    mensaje = "Ya le erraste " + this.contador + " veces";
                    break;
            }
            this.MostarMensaje("#" + this.contador + " " + mensaje + " ayuda :" + this.nuevoJuego.retornarAyuda());
        }
        console.info("numero Secreto:", this.nuevoJuego.gano);
    }
    MostarMensaje(mensaje = "este es el mensaje", ganador = false) {
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AdivinaElNumeroComponent.prototype, "enviarJuego", void 0);
AdivinaElNumeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adivina-el-numero',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adivina-el-numero.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adivina-el-numero.component.css */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css")).default]
    })
], AdivinaElNumeroComponent);



/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\r\n    color:rgb(240, 193, 122);\r\n}\r\n.lista {\r\n    color:rgb(240, 193, 122);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWRpdmluYS1tYXMtbGlzdGFkby9hZGl2aW5hLW1hcy1saXN0YWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FkaXZpbmEtbWFzLWxpc3RhZG8vYWRpdmluYS1tYXMtbGlzdGFkby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgY29sb3I6cmdiKDI0MCwgMTkzLCAxMjIpO1xyXG59XHJcbi5saXN0YSB7XHJcbiAgICBjb2xvcjpyZ2IoMjQwLCAxOTMsIDEyMik7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdivinaMasListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaMasListadoComponent", function() { return AdivinaMasListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdivinaMasListadoComponent = class AdivinaMasListadoComponent {
    constructor() { this.listadoParaCompartir = new Array(); }
    ngOnInit() {
    }
    tomarJuegoTerminado(juego) {
        this.listadoParaCompartir.push(juego);
        // console.info("en app",this.listadoParaCompartir);
    }
};
AdivinaMasListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adivina-mas-listado',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adivina-mas-listado.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adivina-mas-listado.component.css */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css")).default]
    })
], AdivinaMasListadoComponent);



/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=text], input[type=password] {\r\n    width: 50%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n    margin-left: 2%;\r\n    margin-top: 5vh;\r\n}\r\n\r\nbutton {\r\n    background-color: orange;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    margin-top:5vh;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cuenta {\r\n    \r\n    margin-left:10%;\r\n    margin-top: 5vh;\r\n    color: #c36ff3;\r\n}\r\n\r\n/* .cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n} */\r\n\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n\r\n#snackbar.Ganador {\r\n    background-color: #059F2F;\r\n}\r\n\r\n#snackbar.Perdedor {\r\n    background-color: #b32222;\r\n}\r\n\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n.ingrese {\r\n    font-size: 30px;\r\n    margin-left: 5%;\r\n    \r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\nh1 {\r\n     color:orange;\r\n}\r\n\r\n.juego {\r\n    background-color: rgb(240, 193, 122);\r\n    color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWdpbGlkYWQtYXJpdG1ldGljYS9hZ2lsaWRhZC1hcml0bWV0aWNhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7Ozs7Ozs7OztHQVNHOztBQUNIO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0lBQ0k7T0FDRyxjQUFjO09BQ2QsV0FBVztJQUNkO0lBQ0E7T0FDRyxXQUFXO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1COztJQUVuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLE1BQU0sU0FBUyxFQUFFLFVBQVUsQ0FBQztJQUM1QixJQUFJLFlBQVksRUFBRSxVQUFVLENBQUM7QUFDakM7O0FBRUE7SUFDSSxNQUFNLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFDNUIsSUFBSSxZQUFZLEVBQUUsVUFBVSxDQUFDO0FBQ2pDOztBQUVBO0lBQ0ksTUFBTSxZQUFZLEVBQUUsVUFBVSxDQUFDO0lBQy9CLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUM5Qjs7QUFFQTtJQUNJLE1BQU0sWUFBWSxFQUFFLFVBQVUsQ0FBQztJQUMvQixJQUFJLFNBQVMsRUFBRSxVQUFVLENBQUM7QUFDOUI7O0FBQ0E7S0FDSyxZQUFZO0FBQ2pCOztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FnaWxpZGFkLWFyaXRtZXRpY2EvYWdpbGlkYWQtYXJpdG1ldGljYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6NXZoO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uY3VlbnRhIHtcclxuICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6MTAlO1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgY29sb3I6ICNjMzZmZjM7XHJcbn1cclxuXHJcbi8qIC5jYW5jZWxidG4ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcbi5hY2VwdGJ0biB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHggMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjY0RjQ7XHJcbn0gKi9cclxuLmltZ2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDI0cHggMCAxMnB4IDA7XHJcbn1cclxuXHJcbmltZy5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG5zcGFuLnBzdyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG5cclxuLyogQ2hhbmdlIHN0eWxlcyBmb3Igc3BhbiBhbmQgY2FuY2VsIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgICBzcGFuLnBzdyB7XHJcbiAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNhbmNlbGJ0biB7XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuI3NuYWNrYmFyIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEyNXB4O1xyXG4gICBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuI3NuYWNrYmFyLkdhbmFkb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1OUYyRjtcclxufVxyXG4jc25hY2tiYXIuUGVyZGVkb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzMjIyMjtcclxufVxyXG4jc25hY2tiYXIuc2hvdyB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcclxuICAgIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xyXG59XHJcblxyXG4uaW5ncmVzZSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgICBmcm9tIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fSBcclxuICAgIHRvIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgICBmcm9tIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxyXG4gICAgdG8ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHtcclxuICAgIGZyb20ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9IFxyXG4gICAgdG8ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZW91dCB7XHJcbiAgICBmcm9tIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fVxyXG4gICAgdG8ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XHJcbn1cclxuaDEge1xyXG4gICAgIGNvbG9yOm9yYW5nZTtcclxufVxyXG4uanVlZ28ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTkzLCAxMjIpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AgilidadAritmeticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilidadAritmeticaComponent", function() { return AgilidadAritmeticaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-agilidad */ "./src/app/clases/juego-agilidad.ts");



// import {TimerObservable} from "rxjs/observable/TimerObservable";
let AgilidadAritmeticaComponent = class AgilidadAritmeticaComponent {
    constructor() {
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ocultarEsperando = true;
        this.jugando = false;
        this.ocultarVerificar = true;
        this.Tiempo = 5;
        this.nuevoJuego = new _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_2__["JuegoAgilidad"]();
    }
    ngOnInit() {
    }
    NuevoJuego() {
        this.focoEnInput();
        this.jugando = true;
        this.ocultarVerificar = false;
        this.ocultarEsperando = false;
        this.nuevoJuego.generarCalculo();
        this.repetidor = setInterval(() => {
            if (this.Tiempo > 0 && this.jugando == true) {
                this.Tiempo--;
                console.log("llego", this.Tiempo);
            }
            if (this.Tiempo == 0) {
                clearInterval(this.repetidor);
                this.verificar();
                this.ocultarVerificar = true;
                this.Tiempo = 5;
            }
        }, 900);
    }
    verificar() {
        if (this.nuevoJuego.verificar()) {
            this.ocultarEsperando = true;
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("¡Bien! Estas rapido!", true);
        }
        else {
            this.MostarMensaje("¡Mal!. ¡Intenta otra vez!", false);
        }
        this.jugando = false;
        this.nuevoJuego.resetearJuego();
    }
    MostarMensaje(mensaje = "", ganador = false) {
        var modelo = this;
        this.mensaje = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
            this.ocultarEsperando = true;
        }
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
            modelo.ocultarEsperando = false;
            if (ganador)
                modelo.ocultarEsperando = true;
        }, 3000);
        console.info("objeto", x);
    }
    focoEnInput() {
        setTimeout(() => {
            document.getElementById("numIngresado").value = null;
            document.getElementById("numIngresado").focus();
        }, 1);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AgilidadAritmeticaComponent.prototype, "enviarJuego", void 0);
AgilidadAritmeticaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agilidad-aritmetica',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agilidad-aritmetica.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agilidad-aritmetica.component.css */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css")).default]
    })
], AgilidadAritmeticaComponent);



/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\r\n    color:rgb(240, 193, 122);\r\n}\r\n.lista {\r\n    color:rgb(240, 193, 122);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWdpbGlkYWQtbWFzLWxpc3RhZG8vYWdpbGlkYWQtbWFzLWxpc3RhZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvYWdpbGlkYWQtbWFzLWxpc3RhZG8vYWdpbGlkYWQtbWFzLWxpc3RhZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGNvbG9yOnJnYigyNDAsIDE5MywgMTIyKTtcclxufVxyXG4ubGlzdGEge1xyXG4gICAgY29sb3I6cmdiKDI0MCwgMTkzLCAxMjIpO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts ***!
  \************************************************************************************/
/*! exports provided: AgilidadMasListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilidadMasListadoComponent", function() { return AgilidadMasListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AgilidadMasListadoComponent = class AgilidadMasListadoComponent {
    constructor() { this.listadoParaCompartir = new Array(); }
    ngOnInit() {
    }
    tomarJuegoTerminado(juego) {
        this.listadoParaCompartir.push(juego);
        console.info("en app", this.listadoParaCompartir);
    }
};
AgilidadMasListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agilidad-mas-listado',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agilidad-mas-listado.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agilidad-mas-listado.component.css */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css")).default]
    })
], AgilidadMasListadoComponent);



/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/anagrama/anagrama.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nform {\r\n    border: 10px solid rgb(182, 51, 175);\r\n    padding: 10px;\r\n    background:rgb(240, 193, 122);\r\n    \r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 3px solid rgb(182, 51, 175);\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    background-color:rgb(243, 183, 71);\r\n    color: black;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n\r\n#snackbar.Ganador {\r\n    background-color: #059F2F;\r\n}\r\n\r\n#snackbar.Perdedor {\r\n    background-color: #FF0000;\r\n}\r\n\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\nh1 {\r\n    color: rgb(240, 193, 122);\r\n    text-align: center;\r\n}\r\n\r\nh3 {\r\n    letter-spacing: 8pt;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYW5hZ3JhbWEvYW5hZ3JhbWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUNBQW1DO0lBQ25DLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0lBQ0k7T0FDRyxjQUFjO09BQ2QsV0FBVztJQUNkO0lBQ0E7T0FDRyxXQUFXO0lBQ2Q7QUFDSjs7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1COztJQUVuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLE1BQU0sU0FBUyxFQUFFLFVBQVUsQ0FBQztJQUM1QixJQUFJLFlBQVksRUFBRSxVQUFVLENBQUM7QUFDakM7O0FBRUE7SUFDSSxNQUFNLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFDNUIsSUFBSSxZQUFZLEVBQUUsVUFBVSxDQUFDO0FBQ2pDOztBQUVBO0lBQ0ksTUFBTSxZQUFZLEVBQUUsVUFBVSxDQUFDO0lBQy9CLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUM5Qjs7QUFFQTtJQUNJLE1BQU0sWUFBWSxFQUFFLFVBQVUsQ0FBQztJQUMvQixJQUFJLFNBQVMsRUFBRSxVQUFVLENBQUM7QUFDOUI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvYW5hZ3JhbWEvYW5hZ3JhbWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5mb3JtIHtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCByZ2IoMTgyLCA1MSwgMTc1KTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYigyNDAsIDE5MywgMTIyKTtcclxuICAgIFxyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMTgyLCA1MSwgMTc1KTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDMsIDE4MywgNzEpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uY2FuY2VsYnRuIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG4uYWNlcHRidG4ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY2NEY0O1xyXG59XHJcbi5pbWdjb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyNHB4IDAgMTJweCAwO1xyXG59XHJcblxyXG5pbWcuYXZhdGFyIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuc3Bhbi5wc3cge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIHNwYW4gYW5kIGNhbmNlbCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gICAgc3Bhbi5wc3cge1xyXG4gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICAgIC5jYW5jZWxidG4ge1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuI3NuYWNrYmFyIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEyNXB4O1xyXG4gICBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuI3NuYWNrYmFyLkdhbmFkb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1OUYyRjtcclxufVxyXG4jc25hY2tiYXIuUGVyZGVkb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcclxufVxyXG4jc25hY2tiYXIuc2hvdyB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcclxuICAgIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9IFxyXG4gICAgdG8ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XHJcbiAgICB0byB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXQge1xyXG4gICAgZnJvbSB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO30gXHJcbiAgICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlb3V0IHtcclxuICAgIGZyb20ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XHJcbiAgICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxufVxyXG5oMSB7XHJcbiAgICBjb2xvcjogcmdiKDI0MCwgMTkzLCAxMjIpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmgzIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiA4cHQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/anagrama/anagrama.component.ts ***!
  \************************************************************/
/*! exports provided: AnagramaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnagramaComponent", function() { return AnagramaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_anagrama__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-anagrama */ "./src/app/clases/juego-anagrama.ts");



let AnagramaComponent = class AnagramaComponent {
    constructor() {
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nuevoJuego = new _clases_juego_anagrama__WEBPACK_IMPORTED_MODULE_2__["JuegoAnagrama"]();
        this.ocultarVerificar = false;
    }
    generarnumero() {
        this.nuevoJuego.generarnumero();
        console.info("palabra secreta:", this.nuevoJuego.palabraSecreta);
        this.contador = 0;
    }
    verificar() {
        this.contador++;
        this.ocultarVerificar = true;
        console.info("palabra Secreto:", this.nuevoJuego.gano);
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.nuevoJuego.palabraSecreta = "";
            this.nuevoJuego.palabraIngresada = "";
        }
        else {
            let mensaje;
            switch (this.contador) {
                case 1:
                    mensaje = "No, intento fallido, animo";
                    break;
                case 2:
                    mensaje = "No,Te estaras Acercando???";
                    break;
                case 3:
                    mensaje = "No es, Yo crei que la tercera era la vencida.";
                    break;
                default:
                    mensaje = "Ya le erraste " + this.contador + " veces";
                    break;
            }
            this.MostarMensaje("#" + this.contador + " " + mensaje + " ayuda :" + this.nuevoJuego.retornarAyuda());
            // this.MostarMensaje("Sos un Genio!!!",true);
        }
        console.info("numero Secreto:", this.nuevoJuego.gano);
    }
    MostarMensaje(mensaje = "este es el mensaje", ganador = false) {
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AnagramaComponent.prototype, "enviarJuego", void 0);
AnagramaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-anagrama',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./anagrama.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/anagrama/anagrama.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./anagrama.component.css */ "./src/app/componentes/anagrama/anagrama.component.css")).default]
    })
], AnagramaComponent);



/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".divClass {\r\n    background-color:rgb(243, 183, 71);\r\n    width: 100%;\r\n}\r\n .h1Class {\r\n    text-align: center;\r\n    color: rgb(182, 51, 175);\r\n    letter-spacing: 5pt;\r\n    font-family:\"Comic Sans MS\", cursive, sans-serif;\r\n }\r\n * {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n /* .divImagen {\r\n   width: 90px;\r\n   height: 90px;\r\n   border: 1px solid silver;\r\n   position: relative;\r\n} */\r\n .navegacion {\r\n   text-align: center;\r\n   word-spacing: 5pt;\r\n   background-color: rgb(182, 51, 175);\r\n}\r\n .elemento {\r\n   padding-left:10pt;\r\n   padding-right: 10pt;\r\n   color:white;\r\n}\r\n p {\r\n   /* padding-left: 50pt; */\r\n   text-align: center;\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY2FiZWNlcmEvY2FiZWNlcmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyxXQUFXO0FBQ2Y7Q0FDQztJQUNHLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGdEQUFnRDtDQUNuRDtDQUNBO0lBQ0csVUFBVTtJQUNWLFNBQVM7RUFDWDtDQUVGOzs7OztHQUtHO0NBQ0g7R0FDRyxrQkFBa0I7R0FDbEIsaUJBQWlCO0dBQ2pCLG1DQUFtQztBQUN0QztDQUNBO0dBQ0csaUJBQWlCO0dBQ2pCLG1CQUFtQjtHQUNuQixXQUFXO0FBQ2Q7Q0FDQTtHQUNHLHdCQUF3QjtHQUN4QixrQkFBa0I7O0FBRXJCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvY2FiZWNlcmEvY2FiZWNlcmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZDbGFzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDMsIDE4MywgNzEpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIC5oMUNsYXNzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMTgyLCA1MSwgMTc1KTtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHQ7XHJcbiAgICBmb250LWZhbWlseTpcIkNvbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcclxuIH1cclxuICoge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4vKiAuZGl2SW1hZ2VuIHtcclxuICAgd2lkdGg6IDkwcHg7XHJcbiAgIGhlaWdodDogOTBweDtcclxuICAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn0gKi9cclxuLm5hdmVnYWNpb24ge1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIHdvcmQtc3BhY2luZzogNXB0O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCA1MSwgMTc1KTtcclxufVxyXG4uZWxlbWVudG8ge1xyXG4gICBwYWRkaW5nLWxlZnQ6MTBwdDtcclxuICAgcGFkZGluZy1yaWdodDogMTBwdDtcclxuICAgY29sb3I6d2hpdGU7XHJcbn1cclxucCB7XHJcbiAgIC8qIHBhZGRpbmctbGVmdDogNTBwdDsgKi9cclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.ts ***!
  \************************************************************/
/*! exports provided: CabeceraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabeceraComponent", function() { return CabeceraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CabeceraComponent = class CabeceraComponent {
    constructor() { }
    ngOnInit() {
    }
};
CabeceraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cabecera',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cabecera.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cabecera/cabecera.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cabecera.component.css */ "./src/app/componentes/cabecera/cabecera.component.css")).default]
    })
], CabeceraComponent);



/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/juegos/juegos.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navegacion {\r\n    text-align: center;\r\n    word-spacing: 5pt;\r\n    background-color: rgb(182, 51, 175);\r\n}\r\n.elemento {\r\n    text-align: justify;\r\n    /* padding-left:40pt;\r\n    padding-right: 40pt; */\r\n    color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvanVlZ29zL2p1ZWdvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQjswQkFDc0I7SUFDdEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvanVlZ29zL2p1ZWdvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmVnYWNpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd29yZC1zcGFjaW5nOiA1cHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCA1MSwgMTc1KTtcclxufVxyXG4uZWxlbWVudG8ge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIC8qIHBhZGRpbmctbGVmdDo0MHB0O1xyXG4gICAgcGFkZGluZy1yaWdodDogNDBwdDsgKi9cclxuICAgIGNvbG9yOndoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/juegos/juegos.component.ts ***!
  \********************************************************/
/*! exports provided: JuegosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosComponent", function() { return JuegosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JuegosComponent = class JuegosComponent {
    constructor() { }
    ngOnInit() {
    }
};
JuegosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-juegos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./juegos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/juegos/juegos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./juegos.component.css */ "./src/app/componentes/juegos/juegos.component.css")).default]
    })
], JuegosComponent);



/***/ }),

/***/ "./src/app/componentes/lista-usuarios/lista-usuarios.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/componentes/lista-usuarios/lista-usuarios.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imagenDeMenu{\r\n    width: 80px;\r\n    height: 70px;\r\n    position: relative;\r\n    }\r\n\r\n.divImagen {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGEtdXN1YXJpb3MvbGlzdGEtdXN1YXJpb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCOztBQUVKO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGEtdXN1YXJpb3MvbGlzdGEtdXN1YXJpb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZW5EZU1lbnV7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbi5kaXZJbWFnZW4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/lista-usuarios/lista-usuarios.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componentes/lista-usuarios/lista-usuarios.component.ts ***!
  \************************************************************************/
/*! exports provided: ListaUsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaUsuariosComponent", function() { return ListaUsuariosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ListaUsuariosComponent = class ListaUsuariosComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
};
ListaUsuariosComponent.ctorParameters = () => [
    { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ListaUsuariosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-usuarios',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista-usuarios.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/lista-usuarios/lista-usuarios.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lista-usuarios.component.css */ "./src/app/componentes/lista-usuarios/lista-usuarios.component.css")).default]
    })
], ListaUsuariosComponent);



/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG8tZGUtcmVzdWx0YWRvcy9saXN0YWRvLWRlLXJlc3VsdGFkb3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListadoDeResultadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoDeResultadosComponent", function() { return ListadoDeResultadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListadoDeResultadosComponent = class ListadoDeResultadosComponent {
    constructor() {
    }
    ngOnInit() {
    }
    ver() {
        console.info(this.listado);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListadoDeResultadosComponent.prototype, "listado", void 0);
ListadoDeResultadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listado-de-resultados',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listado-de-resultados.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listado-de-resultados.component.css */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css")).default]
    })
], ListadoDeResultadosComponent);



/***/ }),

/***/ "./src/app/componentes/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/login/login.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".divClass {\r\n    text-align: center;\r\n    color:#9d1fd8;;\r\n    background-color: rgb(243, 183, 71);\r\n    position: absolute;\r\n    /*nos posicionamos en el centro del navegador*/\r\n    top:55%;\r\n    left:50%;\r\n    /*determinamos una anchura*/\r\n    max-width:400px;\r\n    \r\n    /*indicamos que el margen izquierdo, es la mitad de la anchura*/\r\n    margin-left:-200px;\r\n    /*determinamos una altura*/\r\n    max-height:350px;\r\n    /*indicamos que el margen superior, es la mitad de la altura*/\r\n    margin-top:-150px;\r\n    border:5px solid #c36ff3;\r\n    padding:5px;\r\n    \r\n}\r\n.bodyClass {\r\n    background-color: rgb(240, 193, 122);\r\n    width:100%;\r\n    /* initial-scale:1.0; */\r\n}\r\n.imagen {\r\n    position: relative;\r\n    /*nos posicionamos en el centro del navegador*/\r\n    /* top:50%; */\r\n    /* left:20%; */\r\n    width: 220px;\r\n    height: 220px;\r\n}\r\nh1 {\r\n    font: menu;\r\n    font-size: 28pt;\r\n    width: 100%;\r\n    font-family:\"Comic Sans MS\", cursive, sans-serif;\r\n}\r\n.divImg { \r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQiw4Q0FBOEM7SUFDOUMsT0FBTztJQUNQLFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IsZUFBZTs7SUFFZiwrREFBK0Q7SUFDL0Qsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsNkRBQTZEO0lBQzdELGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsV0FBVzs7QUFFZjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiw4Q0FBOEM7SUFDOUMsYUFBYTtJQUNiLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0RBQWdEO0FBQ3BEO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdkNsYXNzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiM5ZDFmZDg7O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMTgzLCA3MSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvKm5vcyBwb3NpY2lvbmFtb3MgZW4gZWwgY2VudHJvIGRlbCBuYXZlZ2Fkb3IqL1xyXG4gICAgdG9wOjU1JTtcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgLypkZXRlcm1pbmFtb3MgdW5hIGFuY2h1cmEqL1xyXG4gICAgbWF4LXdpZHRoOjQwMHB4O1xyXG4gICAgXHJcbiAgICAvKmluZGljYW1vcyBxdWUgZWwgbWFyZ2VuIGl6cXVpZXJkbywgZXMgbGEgbWl0YWQgZGUgbGEgYW5jaHVyYSovXHJcbiAgICBtYXJnaW4tbGVmdDotMjAwcHg7XHJcbiAgICAvKmRldGVybWluYW1vcyB1bmEgYWx0dXJhKi9cclxuICAgIG1heC1oZWlnaHQ6MzUwcHg7XHJcbiAgICAvKmluZGljYW1vcyBxdWUgZWwgbWFyZ2VuIHN1cGVyaW9yLCBlcyBsYSBtaXRhZCBkZSBsYSBhbHR1cmEqL1xyXG4gICAgbWFyZ2luLXRvcDotMTUwcHg7XHJcbiAgICBib3JkZXI6NXB4IHNvbGlkICNjMzZmZjM7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIFxyXG59XHJcbi5ib2R5Q2xhc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTkzLCAxMjIpO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIC8qIGluaXRpYWwtc2NhbGU6MS4wOyAqL1xyXG59XHJcbi5pbWFnZW4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLypub3MgcG9zaWNpb25hbW9zIGVuIGVsIGNlbnRybyBkZWwgbmF2ZWdhZG9yKi9cclxuICAgIC8qIHRvcDo1MCU7ICovXHJcbiAgICAvKiBsZWZ0OjIwJTsgKi9cclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbn1cclxuaDEge1xyXG4gICAgZm9udDogbWVudTtcclxuICAgIGZvbnQtc2l6ZTogMjhwdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6XCJDb21pYyBTYW5zIE1TXCIsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5kaXZJbWcgeyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.mostrar = false;
    }
    ngOnInit() {
    }
    onSubmitLogin() {
        this.authService.login(this.email, this.password).then(res => {
            this.router.navigate(['/principal']);
            //  }).catch(err => alert('los datos son incorrectos ono existe el usuario'));
            //  }).catch(err => this.router.navigate(['ventana-error']));
        }).catch(err => this.msjError = "Error! verifique correo y/o contraseña");
    }
    registrarse() {
        this.mostrar = true;
    }
    regresar() {
        this.mostrar = false;
    }
    aceptar() {
        console.log(this.email + this.password);
        this.authService.registerUser(this.email, this.password)
            .then(res => {
            this.router.navigate(['/principal']);
            this.msjError = "Usuario creado!";
        }).catch(err => this.msjError = "Error! no se pudo crear, intente con una contraseña de mas de 6 caracteres y un mail valido");
    }
};
LoginComponent.ctorParameters = () => [
    { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/componentes/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n    box-shadow: 0 4px 18px 0 rgba(177, 49, 228, 0.932);\n    transition: 0.3s;\n    border-radius: 5px; /* 5px rounded corners */\n    /* max-width: 300px; */\n    width:310px;\n    height: 450px;\n    margin: 10px;\n    padding-bottom: 10px;\n    /* padding-left: 30px; */\n    float: left;\n    background-color: rgb(243, 166, 237);\n    text-align: center;\n}\n\n/* Add rounded corners to the top left and the top right corner of the image */\n\nimg {\n    /* border-top: 15px; */\n    /* padding:2px; */\n    border-radius: 5px 5px 0 0;\n    width: 200px;\n    height: 200px;\n    border-radius: 25px;\n}\n\n/* Add some padding inside the card container */\n\n.container {\n    padding: 2px 16px;\n}\n\n.button{\n    margin-left: 1px;\n    display: inline-block;\n    width: 90%;\n    padding: 5px 15px;\n    font-size: 24px;\n    text-align: center;\n    cursor: pointer;\n    outline: none;\n    color: #fff;\n    background-color: rgb(235, 190, 69);\n    border: none;\n    border-radius: 15px;\n    box-shadow: 0 9px #999;\n\n    border: none;\n    outline: 0;\n \n    padding: 8px;\n    color: white;\n   /* background-color: #000;*/\n    text-align: center;\n    cursor: pointer;\n    width: 100%;\n    padding-bottom: 0%;\n  }\n\n.button:hover {background-color: #be48d6}\n\n.button:active {\n    background-color: #3e8e41;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS1jYXJkL21lbnUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0RBQWtEO0lBQ2xELGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBRSx3QkFBd0I7SUFDNUMsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7O0FBRUEsOEVBQThFOztBQUM5RTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUFDLCtDQUErQzs7QUFDaEQ7SUFDSSxpQkFBaUI7QUFDckI7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7O0lBRXRCLFlBQVk7SUFDWixVQUFVOztJQUVWLFlBQVk7SUFDWixZQUFZO0dBQ2IsMkJBQTJCO0lBQzFCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7QUFFQSxlQUFlLHlCQUF5Qjs7QUFFeEM7SUFDRSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtFQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21lbnUtY2FyZC9tZW51LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxOHB4IDAgcmdiYSgxNzcsIDQ5LCAyMjgsIDAuOTMyKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgLyogNXB4IHJvdW5kZWQgY29ybmVycyAqL1xuICAgIC8qIG1heC13aWR0aDogMzAwcHg7ICovXG4gICAgd2lkdGg6MzEwcHg7XG4gICAgaGVpZ2h0OiA0NTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgLyogcGFkZGluZy1sZWZ0OiAzMHB4OyAqL1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDE2NiwgMjM3KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIEFkZCByb3VuZGVkIGNvcm5lcnMgdG8gdGhlIHRvcCBsZWZ0IGFuZCB0aGUgdG9wIHJpZ2h0IGNvcm5lciBvZiB0aGUgaW1hZ2UgKi9cbmltZyB7XG4gICAgLyogYm9yZGVyLXRvcDogMTVweDsgKi9cbiAgICAvKiBwYWRkaW5nOjJweDsgKi9cbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufS8qIEFkZCBzb21lIHBhZGRpbmcgaW5zaWRlIHRoZSBjYXJkIGNvbnRhaW5lciAqL1xuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMnB4IDE2cHg7XG59XG5cblxuLmJ1dHRvbntcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMTkwLCA2OSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMCA5cHggIzk5OTtcblxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiAwO1xuIFxuICAgIHBhZGRpbmc6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCU7XG4gIH1cbiAgXG4gIC5idXR0b246aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNiZTQ4ZDZ9XG4gIFxuICAuYnV0dG9uOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcbiAgICBib3gtc2hhZG93OiAwIDVweCAjNjY2O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuCardComponent", function() { return MenuCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MenuCardComponent = class MenuCardComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
    }
    Juego(tipo) {
        switch (tipo) {
            case 'anagrama':
                this.router.navigate(['/Juegos/Anagrama']);
                break;
            case 'tateti':
                this.router.navigate(['/Juegos/Tateti']);
                break;
            case 'adivina-lista':
                this.router.navigate(['/Juegos/AdivinaLista']);
                break;
            case 'adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'agilidad-lista':
                this.router.navigate(['/Juegos/AgilidadLista']);
                break;
            case 'agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'propio':
                this.router.navigate(['/snake']);
                break;
        }
    }
};
MenuCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu-card/menu-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-card.component.css */ "./src/app/componentes/menu-card/menu-card.component.css")).default]
    })
], MenuCardComponent);



/***/ }),

/***/ "./src/app/componentes/menu/menu.component.css":
/*!*****************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imagenDeMenu{\r\n    width: 80px;\r\n    height: 70px;\r\n    float:left;\r\n    }\r\n    \r\n    .hero-text {\r\n        text-align: center;\r\n        position: absolute;\r\n       /* top: 20%; */\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        color: rgb(243, 183, 71);\r\n        }\r\n    \r\n    .divInfo {\r\n    float:left;\r\n    color: rgb(240, 193, 122);\r\n    \r\n}\r\n    \r\n    .imagen {\r\n    position: center;\r\n    /*nos posicionamos en el centro del navegador*/\r\n    /* top:50%; */\r\n    left:40%;\r\n    width: 220px;\r\n    height: 220px;\r\n}\r\n    \r\n    .navegacion {\r\n    text-align: center;\r\n    word-spacing: 5pt;\r\n}\r\n    \r\n    .elemento {\r\n    padding-left:10pt;\r\n    padding-right: 10pt;\r\n}\r\n    \r\n    .boton {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixrQkFBa0I7T0FDbkIsY0FBYztRQUNiLFNBQVM7UUFDVCxnQ0FBZ0M7UUFDaEMsd0JBQXdCO1FBQ3hCOztJQUlSO0lBQ0ksVUFBVTtJQUNWLHlCQUF5Qjs7QUFFN0I7O0lBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsOENBQThDO0lBQzlDLGFBQWE7SUFDYixRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0lBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztJQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7SUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlbkRlTWVudXtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhlcm8tdGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgIC8qIHRvcDogMjAlOyAqL1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICBjb2xvcjogcmdiKDI0MywgMTgzLCA3MSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4uZGl2SW5mbyB7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgY29sb3I6IHJnYigyNDAsIDE5MywgMTIyKTtcclxuICAgIFxyXG59XHJcbi5pbWFnZW4ge1xyXG4gICAgcG9zaXRpb246IGNlbnRlcjtcclxuICAgIC8qbm9zIHBvc2ljaW9uYW1vcyBlbiBlbCBjZW50cm8gZGVsIG5hdmVnYWRvciovXHJcbiAgICAvKiB0b3A6NTAlOyAqL1xyXG4gICAgbGVmdDo0MCU7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG59XHJcbi5uYXZlZ2FjaW9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdvcmQtc3BhY2luZzogNXB0O1xyXG59XHJcbi5lbGVtZW50byB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBwdDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHQ7XHJcbn1cclxuLmJvdG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/menu/menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.ts ***!
  \****************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MenuComponent = class MenuComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
    }
    Juego(tipo) {
        switch (tipo) {
            case 'anagrama':
                this.router.navigate(['/Juegos/Anagrama']);
                break;
            case 'tateti':
                this.router.navigate(['/Juegos/Tateti']);
                break;
            case 'adivina-lista':
                this.router.navigate(['/Juegos/AdivinaLista']);
                break;
            case 'adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'agilidad-lista':
                this.router.navigate(['/Juegos/AgilidadLista']);
                break;
            case 'agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'propio':
                this.router.navigate(['/Juegos/propio']);
                break;
        }
    }
};
MenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/componentes/menu/menu.component.css")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/componentes/principal/principal.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imagenDeMenu{\r\n    width: 80px;\r\n    height: 70px;\r\n    float:left;\r\n    }\r\n    \r\n    .hero-text {\r\n        text-align: center;\r\n        position: absolute;\r\n       /* top: 20%; */\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        color: rgb(243, 183, 71);\r\n        }\r\n    \r\n    .divInfo {\r\n    float:left;\r\n    color: rgb(240, 193, 122);\r\n    \r\n}\r\n    \r\n    .imagen {\r\n    position: center;\r\n    /*nos posicionamos en el centro del navegador*/\r\n    /* top:50%; */\r\n    left:40%;\r\n    width: 220px;\r\n    height: 220px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcHJpbmNpcGFsL3ByaW5jaXBhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1Y7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsa0JBQWtCO09BQ25CLGNBQWM7UUFDYixTQUFTO1FBQ1QsZ0NBQWdDO1FBQ2hDLHdCQUF3QjtRQUN4Qjs7SUFJUjtJQUNJLFVBQVU7SUFDVix5QkFBeUI7O0FBRTdCOztJQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDhDQUE4QztJQUM5QyxhQUFhO0lBQ2IsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvcHJpbmNpcGFsL3ByaW5jaXBhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlbkRlTWVudXtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhlcm8tdGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgIC8qIHRvcDogMjAlOyAqL1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICBjb2xvcjogcmdiKDI0MywgMTgzLCA3MSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4uZGl2SW5mbyB7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgY29sb3I6IHJnYigyNDAsIDE5MywgMTIyKTtcclxuICAgIFxyXG59XHJcbi5pbWFnZW4ge1xyXG4gICAgcG9zaXRpb246IGNlbnRlcjtcclxuICAgIC8qbm9zIHBvc2ljaW9uYW1vcyBlbiBlbCBjZW50cm8gZGVsIG5hdmVnYWRvciovXHJcbiAgICAvKiB0b3A6NTAlOyAqL1xyXG4gICAgbGVmdDo0MCU7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.ts ***!
  \**************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrincipalComponent = class PrincipalComponent {
    constructor() { }
    ngOnInit() {
    }
};
PrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-principal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./principal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/principal/principal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./principal.component.css */ "./src/app/componentes/principal/principal.component.css")).default]
    })
], PrincipalComponent);



/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imagenDeQuienSoy{\n    width: 100%;\n   \n    }\nbody {\n    font: 20px Montserrat, sans-serif;\n    line-height: 1.8;\n    color: #f5f6f7;\n}\np {font-size: 16px;}\n.margin {margin-bottom: 45px;}\n.bg-1 { \n    background-color: rgb(240, 193, 122); /* Green */\n    color: #ffffff;\n}\n.bg-2 { \n    background-color: #5a5a5a; /* Dark Blue */\n    color: #ffffff;\n}\n.bg-3 { \n    background-color: rgb(240, 193, 122); /* White */\n    color: #555555;\n}\n.bg-4 { \n    background-color: #2f2f2f; /* Black Gray */\n    color: #fff;\n}\n.container-fluid {\n    padding-top: 70px;\n    padding-bottom: 70px;\n}\n.navbar {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    border: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    font-size: 12px;\n    letter-spacing: 5px;\n}\n.navbar-nav  li a:hover {\n    color: #1abc9c !important;\n}\n.meClass {\n    float: left;\n    width: 30%;\n    height: 30%;\n    border-left: 50%;\n}\n.divClass {\n    display:table-cell;\n    vertical-align:middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcXVpZW4tc295L3F1aWVuLXNveS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVzs7SUFFWDtBQUNKO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0EsR0FBRyxlQUFlLENBQUM7QUFDbkIsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QjtJQUNJLG9DQUFvQyxFQUFFLFVBQVU7SUFDaEQsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCLEVBQUUsY0FBYztJQUN6QyxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxvQ0FBb0MsRUFBRSxVQUFVO0lBQ2hELGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QixFQUFFLGVBQWU7SUFDMUMsV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvcXVpZW4tc295L3F1aWVuLXNveS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlbkRlUXVpZW5Tb3l7XG4gICAgd2lkdGg6IDEwMCU7XG4gICBcbiAgICB9XG5ib2R5IHtcbiAgICBmb250OiAyMHB4IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICBjb2xvcjogI2Y1ZjZmNztcbn1cbnAge2ZvbnQtc2l6ZTogMTZweDt9XG4ubWFyZ2luIHttYXJnaW4tYm90dG9tOiA0NXB4O31cbi5iZy0xIHsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTkzLCAxMjIpOyAvKiBHcmVlbiAqL1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuLmJnLTIgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE1YTVhOyAvKiBEYXJrIEJsdWUgKi9cbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5iZy0zIHsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTkzLCAxMjIpOyAvKiBXaGl0ZSAqL1xuICAgIGNvbG9yOiAjNTU1NTU1O1xufVxuLmJnLTQgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjJmOyAvKiBCbGFjayBHcmF5ICovXG4gICAgY29sb3I6ICNmZmY7XG59XG4uY29udGFpbmVyLWZsdWlkIHtcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cbi5uYXZiYXIge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG4ubmF2YmFyLW5hdiAgbGkgYTpob3ZlciB7XG4gICAgY29sb3I6ICMxYWJjOWMgIWltcG9ydGFudDtcbn1cbi5tZUNsYXNzIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMzAlO1xuICAgIGJvcmRlci1sZWZ0OiA1MCU7XG59XG4uZGl2Q2xhc3Mge1xuICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.ts ***!
  \**************************************************************/
/*! exports provided: QuienSoyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuienSoyComponent", function() { return QuienSoyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuienSoyComponent = class QuienSoyComponent {
    constructor() { }
    ngOnInit() {
    }
};
QuienSoyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quien-soy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quien-soy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/quien-soy/quien-soy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quien-soy.component.css */ "./src/app/componentes/quien-soy/quien-soy.component.css")).default]
    })
], QuienSoyComponent);



/***/ }),

/***/ "./src/app/componentes/snake/snake.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/snake/snake.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  \r\n.game-header {\r\n    color: rgba(240, 34, 230, 0.747);\r\n    padding: 5px 15px 5px 0px;\r\n    position: relative;\r\n  }\r\n  \r\n  .game-header>.score-block {\r\n    display: inline-block;\r\n  }\r\n  \r\n  .score-block>.score {\r\n    position: absolute;\r\n    right: 8px;\r\n    top: -5px;\r\n  }\r\n  \r\n  .score-block>.best-score {\r\n    position: absolute;\r\n    right: 8px;\r\n    margin-top: 5px;\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .game-header>.logo {\r\n    display: inline-block;\r\n    padding-left: 15px;\r\n  }\r\n  \r\n  .game-container {\r\n    width: 468px;\r\n    position: relative;\r\n    display: block;\r\n    margin: auto;\r\n    background-color: rgba(240, 175, 34, 0.842);\r\n    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  .row {\r\n    height: 26px;\r\n  }\r\n  \r\n  .column {\r\n    border: 1px solid rgba(167, 105, 152, 0.37);\r\n    width: 24px;\r\n    height: 24px;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .start-button {\r\n    padding: 15px;\r\n    text-align: center;\r\n    background-color: rgba(240, 34, 230, 0.747);\r\n    color: white;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  .start-button:hover {\r\n    opacity: 0.65;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .start-button.new-game-button {\r\n    margin: 0 105px 4px 105px;\r\n  }\r\n  \r\n  .disable-clicks {\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .new-game-menu {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    bottom: 0;\r\n    padding: 40% 0;\r\n    text-align: center;\r\n    background: rgba(240, 175, 34, 0.842);\r\n  }\r\n  \r\n  .new-game-menu-label {\r\n    font-size: 1.17em;\r\n    margin-bottom: 13px;\r\n    display: block;\r\n    color: #fff;\r\n  }\r\n  \r\n  .new-best-score {\r\n    -webkit-animation: glow .5s infinite alternate;\r\n            animation: glow .5s infinite alternate;\r\n  }\r\n  \r\n  @-webkit-keyframes glow {\r\n    to {\r\n      text-shadow: 0 0 15px #ffff00;\r\n    }\r\n  }\r\n  \r\n  @keyframes glow {\r\n    to {\r\n      text-shadow: 0 0 15px #ffff00;\r\n    }\r\n  }\r\n  \r\n  @media screen and (max-width: 480px) {\r\n    .game-container {\r\n      width: 100%;\r\n    }\r\n    .column {\r\n      width: 5.55%;\r\n      height: 0;\r\n      padding-bottom: 5.06%;\r\n      box-sizing: border-box;\r\n    }\r\n    .row {\r\n      display: flex;\r\n      height: 0;\r\n      padding-bottom: 5.5%;\r\n    }\r\n    .new-game-menu {\r\n      width: 100%;\r\n      top: 8px;\r\n      padding-top: 30%;\r\n      font-size: 80%;\r\n    }\r\n    .start-button.new-game-button {\r\n      margin: 0 15% 1% 15%;\r\n    }\r\n    @-moz-document url-prefix() {\r\n      .column {\r\n        min-height: 5.5vw;\r\n      }\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvc25ha2Uvc25ha2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztFQUNYOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osMkNBQTJDO0lBQzNDLDRFQUE0RTtJQUM1RSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSwyQ0FBMkM7SUFDM0MsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDJDQUEyQztJQUMzQyxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxTQUFTO0lBQ1QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixxQ0FBcUM7RUFDdkM7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0U7TUFDRSw2QkFBNkI7SUFDL0I7RUFDRjs7RUFKQTtJQUNFO01BQ0UsNkJBQTZCO0lBQy9CO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFdBQVc7SUFDYjtJQUNBO01BQ0UsWUFBWTtNQUNaLFNBQVM7TUFDVCxxQkFBcUI7TUFDckIsc0JBQXNCO0lBQ3hCO0lBQ0E7TUFLRSxhQUFhO01BQ2IsU0FBUztNQUNULG9CQUFvQjtJQUN0QjtJQUNBO01BQ0UsV0FBVztNQUNYLFFBQVE7TUFDUixnQkFBZ0I7TUFDaEIsY0FBYztJQUNoQjtJQUNBO01BQ0Usb0JBQW9CO0lBQ3RCO0lBQ0E7TUFDRTtRQUNFLGlCQUFpQjtNQUNuQjtJQUNGO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9zbmFrZS9zbmFrZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBcclxuLmdhbWUtaGVhZGVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDI0MCwgMzQsIDIzMCwgMC43NDcpO1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHggNXB4IDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLmdhbWUtaGVhZGVyPi5zY29yZS1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5zY29yZS1ibG9jaz4uc2NvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDhweDtcclxuICAgIHRvcDogLTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnNjb3JlLWJsb2NrPi5iZXN0LXNjb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5nYW1lLWhlYWRlcj4ubG9nbyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5nYW1lLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNDY4cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzUsIDM0LCAwLjg0Mik7XHJcbiAgICBib3gtc2hhZG93OiAwIDE5cHggMzhweCByZ2JhKDAsIDAsIDAsIDAuMzApLCAwIDE1cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBcclxuICAucm93IHtcclxuICAgIGhlaWdodDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbHVtbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2NywgMTA1LCAxNTIsIDAuMzcpO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGFydC1idXR0b24ge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAzNCwgMjMwLCAwLjc0Nyk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGFydC1idXR0b246aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC42NTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXJ0LWJ1dHRvbi5uZXctZ2FtZS1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIDEwNXB4IDRweCAxMDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmRpc2FibGUtY2xpY2tzIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuICBcclxuICAubmV3LWdhbWUtbWVudSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDQwJSAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDAsIDE3NSwgMzQsIDAuODQyKTtcclxuICB9XHJcbiAgXHJcbiAgLm5ldy1nYW1lLW1lbnUtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxLjE3ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLm5ldy1iZXN0LXNjb3JlIHtcclxuICAgIGFuaW1hdGlvbjogZ2xvdyAuNXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGdsb3cge1xyXG4gICAgdG8ge1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggI2ZmZmYwMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5nYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgIHdpZHRoOiA1LjU1JTtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNS4wNiU7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbiAgICAucm93IHtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1LjUlO1xyXG4gICAgfVxyXG4gICAgLm5ldy1nYW1lLW1lbnUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdG9wOiA4cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgfVxyXG4gICAgLnN0YXJ0LWJ1dHRvbi5uZXctZ2FtZS1idXR0b24ge1xyXG4gICAgICBtYXJnaW46IDAgMTUlIDElIDE1JTtcclxuICAgIH1cclxuICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XHJcbiAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUuNXZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/snake/snake.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/snake/snake.component.ts ***!
  \******************************************************/
/*! exports provided: SnakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnakeComponent", function() { return SnakeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _snake_contants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snake.contants */ "./src/app/componentes/snake/snake.contants.ts");


// import { BestScoreManager } from '../../servicios/snake.service';

let SnakeComponent = class SnakeComponent {
    constructor(
    // private bestScoreService: BestScoreManager
    ) {
        this.default_mode = 'classic';
        this.isGameOver = false;
        this.all_modes = _snake_contants__WEBPACK_IMPORTED_MODULE_2__["GAME_MODES"];
        this.getKeys = Object.keys;
        this.board = [];
        this.obstacles = [];
        this.score = 0;
        this.showMenuChecker = false;
        this.gameStarted = false;
        this.newBestScore = false;
        // public best_score = this.bestScoreService.retrieve();
        this.snake = {
            direction: _snake_contants__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"].LEFT,
            parts: [
                {
                    x: -1,
                    y: -1
                }
            ]
        };
        this.fruit = {
            x: -1,
            y: -1
        };
        this.setBoard();
    }
    handleKeyboardEvents(e) {
        if (e.keyCode === _snake_contants__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"].LEFT && this.snake.direction !== _snake_contants__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"].RIGHT) {
            this.tempDirection = _snake_contants__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"].LEFT;
        }
        else if (e.keyCode === _snake_contants__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"].UP && this.snake.direction !== _snake_contants__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"].DOWN) {
            this.tempDirection = _snake_contants__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"].UP;
        }
        else if (e.keyCode === _snake_contants__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"].RIGHT && this.snake.direction !== _snake_contants__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"].LEFT) {
            this.tempDirection = _snake_contants__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"].RIGHT;
        }
        else if (e.keyCode === _snake_contants__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"].DOWN && this.snake.direction !== _snake_contants__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"].UP) {
            this.tempDirection = _snake_contants__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"].DOWN;
        }
    }
    setColors(col, row) {
        if (this.isGameOver) {
            return _snake_contants__WEBPACK_IMPORTED_MODULE_2__["COLORS"].GAME_OVER;
        }
        else if (this.fruit.x === row && this.fruit.y === col) {
            return _snake_contants__WEBPACK_IMPORTED_MODULE_2__["COLORS"].FRUIT;
        }
        else if (this.snake.parts[0].x === row && this.snake.parts[0].y === col) {
            return _snake_contants__WEBPACK_IMPORTED_MODULE_2__["COLORS"].HEAD;
        }
        else if (this.board[col][row] === true) {
            return _snake_contants__WEBPACK_IMPORTED_MODULE_2__["COLORS"].BODY;
        }
        else if (this.default_mode === 'obstacles' && this.checkObstacles(row, col)) {
            return _snake_contants__WEBPACK_IMPORTED_MODULE_2__["COLORS"].OBSTACLE;
        }
        return _snake_contants__WEBPACK_IMPORTED_MODULE_2__["COLORS"].BOARD;
    }
    ;
    updatePositions() {
        let newHead = this.repositionHead();
        let me = this;
        if (this.default_mode === 'classic' && this.boardCollision(newHead)) {
            return this.gameOver();
        }
        else if (this.default_mode === 'no_walls') {
            this.noWallsTransition(newHead);
        }
        else if (this.default_mode === 'obstacles') {
            this.noWallsTransition(newHead);
            if (this.obstacleCollision(newHead)) {
                return this.gameOver();
            }
        }
        if (this.selfCollision(newHead)) {
            return this.gameOver();
        }
        else if (this.fruitCollision(newHead)) {
            this.eatFruit();
        }
        let oldTail = this.snake.parts.pop();
        this.board[oldTail.y][oldTail.x] = false;
        this.snake.parts.unshift(newHead);
        this.board[newHead.y][newHead.x] = true;
        this.snake.direction = this.tempDirection;
        setTimeout(() => {
            me.updatePositions();
        }, this.interval);
    }
    repositionHead() {
        let newHead = Object.assign({}, this.snake.parts[0]);
        if (this.tempDirection === _snake_contants__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"].LEFT) {
            newHead.x -= 1;
        }
        else if (this.tempDirection === _snake_contants__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"].RIGHT) {
            newHead.x += 1;
        }
        else if (this.tempDirection === _snake_contants__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"].UP) {
            newHead.y -= 1;
        }
        else if (this.tempDirection === _snake_contants__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"].DOWN) {
            newHead.y += 1;
        }
        return newHead;
    }
    noWallsTransition(part) {
        if (part.x === _snake_contants__WEBPACK_IMPORTED_MODULE_2__["BOARD_SIZE"]) {
            part.x = 0;
        }
        else if (part.x === -1) {
            part.x = _snake_contants__WEBPACK_IMPORTED_MODULE_2__["BOARD_SIZE"] - 1;
        }
        if (part.y === _snake_contants__WEBPACK_IMPORTED_MODULE_2__["BOARD_SIZE"]) {
            part.y = 0;
        }
        else if (part.y === -1) {
            part.y = _snake_contants__WEBPACK_IMPORTED_MODULE_2__["BOARD_SIZE"] - 1;
        }
    }
    addObstacles() {
        let x = this.randomNumber();
        let y = this.randomNumber();
        if (this.board[y][x] === true || y === 8) {
            return this.addObstacles();
        }
        this.obstacles.push({
            x: x,
            y: y
        });
    }
    checkObstacles(x, y) {
        let res = false;
        this.obstacles.forEach((val) => {
            if (val.x === x && val.y === y) {
                res = true;
            }
        });
        return res;
    }
    obstacleCollision(part) {
        return this.checkObstacles(part.x, part.y);
    }
    boardCollision(part) {
        return part.x === _snake_contants__WEBPACK_IMPORTED_MODULE_2__["BOARD_SIZE"] || part.x === -1 || part.y === _snake_contants__WEBPACK_IMPORTED_MODULE_2__["BOARD_SIZE"] || part.y === -1;
    }
    selfCollision(part) {
        return this.board[part.y][part.x] === true;
    }
    fruitCollision(part) {
        return part.x === this.fruit.x && part.y === this.fruit.y;
    }
    resetFruit() {
        let x = this.randomNumber();
        let y = this.randomNumber();
        if (this.board[y][x] === true || this.checkObstacles(x, y)) {
            return this.resetFruit();
        }
        this.fruit = {
            x: x,
            y: y
        };
    }
    eatFruit() {
        this.score++;
        let tail = Object.assign({}, this.snake.parts[this.snake.parts.length - 1]);
        this.snake.parts.push(tail);
        this.resetFruit();
        if (this.score % 5 === 0) {
            this.interval -= 15;
        }
    }
    gameOver() {
        this.isGameOver = true;
        this.gameStarted = false;
        let me = this;
        // if (this.score > this.best_score) {
        //   this.bestScoreService.store(this.score);
        //   this.best_score = this.score;
        //   this.newBestScore = true;
        // }
        setTimeout(() => {
            me.isGameOver = false;
        }, 500);
        this.setBoard();
    }
    randomNumber() {
        return Math.floor(Math.random() * _snake_contants__WEBPACK_IMPORTED_MODULE_2__["BOARD_SIZE"]);
    }
    setBoard() {
        this.board = [];
        for (let i = 0; i < _snake_contants__WEBPACK_IMPORTED_MODULE_2__["BOARD_SIZE"]; i++) {
            this.board[i] = [];
            for (let j = 0; j < _snake_contants__WEBPACK_IMPORTED_MODULE_2__["BOARD_SIZE"]; j++) {
                this.board[i][j] = false;
            }
        }
    }
    showMenu() {
        this.showMenuChecker = !this.showMenuChecker;
    }
    newGame(mode) {
        this.default_mode = mode || 'classic';
        this.showMenuChecker = false;
        this.newBestScore = false;
        this.gameStarted = true;
        this.score = 0;
        this.tempDirection = _snake_contants__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"].LEFT;
        this.isGameOver = false;
        this.interval = 150;
        this.snake = {
            direction: _snake_contants__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"].LEFT,
            parts: []
        };
        for (let i = 0; i < 3; i++) {
            this.snake.parts.push({ x: 8 + i, y: 8 });
        }
        if (mode === 'obstacles') {
            this.obstacles = [];
            let j = 1;
            do {
                this.addObstacles();
            } while (j++ < 9);
        }
        this.resetFruit();
        this.updatePositions();
    }
};
SnakeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-snake',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./snake.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/snake/snake.component.html")).default,
        host: {
            '(document:keydown)': 'handleKeyboardEvents($event)'
        },
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./snake.component.css */ "./src/app/componentes/snake/snake.component.css")).default]
    })
], SnakeComponent);



/***/ }),

/***/ "./src/app/componentes/snake/snake.contants.ts":
/*!*****************************************************!*\
  !*** ./src/app/componentes/snake/snake.contants.ts ***!
  \*****************************************************/
/*! exports provided: BOARD_SIZE, CONTROLS, COLORS, GAME_MODES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_SIZE", function() { return BOARD_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROLS", function() { return CONTROLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_MODES", function() { return GAME_MODES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const BOARD_SIZE = 18;
const CONTROLS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};
const COLORS = {
    GAME_OVER: '#D24D57',
    FRUIT: '#EC644B',
    HEAD: '#336E7B',
    BODY: '#C8F7C5',
    BOARD: '#86B5BD',
    OBSTACLE: '#383522'
};
const GAME_MODES = {
    classic: 'Clasico',
    no_walls: 'Sin paredes',
    obstacles: 'Obstaculos'
};


/***/ }),

/***/ "./src/app/componentes/tateti/tateti.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/tateti/tateti.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#board {\r\n    width: 302px;\r\n    margin: 0 auto;\r\n    border: 1px solid #000;\r\n    display: grid;\r\n    grid-template-columns: 100px 100px 100px;\r\n    grid-template-rows: 100px 100px 100px;\r\n    font-size: 50px;\r\n    background-color: #666;\r\n    grid-gap: 1px;\r\n}\r\n\r\n#board.locked {\r\n    opacity: .7;\r\n    pointer-events: none;\r\n}\r\n\r\n#board .square {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n#board .square.checked {\r\n    cursor: default;\r\n}\r\n\r\n#board .square.winner {\r\n    background-color: rgb(240, 193, 122);\r\n}\r\n\r\ninput[type=button] {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    color:rgb(240, 193, 122);\r\n}\r\n\r\n.boton {\r\n    background-color:rgb(243, 183, 71);\r\n    color: black;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvdGF0ZXRpL3RhdGV0aS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHdDQUF3QztJQUN4QyxxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy90YXRldGkvdGF0ZXRpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm9hcmQge1xyXG4gICAgd2lkdGg6IDMwMnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTAwcHggMTAwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDEwMHB4IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcclxuICAgIGdyaWQtZ2FwOiAxcHg7XHJcbn1cclxuXHJcbiNib2FyZC5sb2NrZWQge1xyXG4gICAgb3BhY2l0eTogLjc7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuI2JvYXJkIC5zcXVhcmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNib2FyZCAuc3F1YXJlLmNoZWNrZWQge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4jYm9hcmQgLnNxdWFyZS53aW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTkzLCAxMjIpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl0ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpyZ2IoMjQwLCAxOTMsIDEyMik7XHJcbn1cclxuLmJvdG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI0MywgMTgzLCA3MSk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/componentes/tateti/tateti.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/tateti/tateti.component.ts ***!
  \********************************************************/
/*! exports provided: TatetiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TatetiComponent", function() { return TatetiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TatetiComponent = class TatetiComponent {
    constructor() {
        this.PLAYER_COMPUTER = { name: 'PC', symbol: 'o' };
        this.PLAYER_HUMAN = { name: 'Tu', symbol: 'x' };
        this.DRAW = { name: 'Empate' };
        this.currentPlayer = this.PLAYER_HUMAN;
    }
    ngOnInit() {
        this.newGame();
    }
    square_click(square) {
        if (square.value === '' && !this.gameOver) {
            square.value = this.PLAYER_HUMAN.symbol;
            this.completeMove(this.PLAYER_HUMAN);
        }
    }
    computerMove(firstMove = false) {
        this.boardLocked = true;
        setTimeout(() => {
            let square = firstMove ? this.board[4] : this.getRandomAvailableSquare();
            square.value = this.PLAYER_COMPUTER.symbol;
            this.completeMove(this.PLAYER_COMPUTER);
            this.boardLocked = false;
        }, 600);
    }
    completeMove(player) {
        if (this.isWinner(player.symbol))
            this.showGameOver(player);
        else if (!this.availableSquaresExist())
            this.showGameOver(this.DRAW);
        else {
            this.currentPlayer = (this.currentPlayer == this.PLAYER_COMPUTER ? this.PLAYER_HUMAN : this.PLAYER_COMPUTER);
            if (this.currentPlayer == this.PLAYER_COMPUTER)
                this.computerMove();
        }
    }
    availableSquaresExist() {
        return this.board.filter(s => s.value == '').length > 0;
    }
    getRandomAvailableSquare() {
        let availableSquares = this.board.filter(s => s.value === '');
        var squareIndex = this.getRndInteger(0, availableSquares.length - 1);
        return availableSquares[squareIndex];
    }
    showGameOver(winner) {
        this.gameOver = true;
        this.lastWinner = winner;
        if (winner !== this.DRAW)
            this.currentPlayer = winner;
    }
    get winningIndexes() {
        return [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6] //second diagonal
        ];
    }
    isWinner(symbol) {
        for (let pattern of this.winningIndexes) {
            const foundWinner = this.board[pattern[0]].value == symbol
                && this.board[pattern[1]].value == symbol
                && this.board[pattern[2]].value == symbol;
            if (foundWinner) {
                for (let index of pattern) {
                    this.board[index].winner = true;
                }
                return true;
            }
        }
        return false;
    }
    newGame() {
        this.board = [
            { value: '' }, { value: '' }, { value: '' },
            { value: '' }, { value: '' }, { value: '' },
            { value: '' }, { value: '' }, { value: '' }
        ];
        this.gameOver = false;
        this.boardLocked = false;
        if (this.currentPlayer == this.PLAYER_COMPUTER) {
            this.boardLocked = true;
            this.computerMove(true);
        }
    }
    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
TatetiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tateti.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/tateti/tateti.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tateti.component.css */ "./src/app/componentes/tateti/tateti.component.css")).default]
    })
], TatetiComponent);



/***/ }),

/***/ "./src/app/servicios/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/servicios/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");



let AuthService = class AuthService {
    constructor(AFauth) {
        this.AFauth = AFauth;
    }
    login(email, password) {
        return new Promise((resolve, rejected) => {
            this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
                resolve(user);
            }).catch(err => rejected(err));
        });
    }
    registerUser(email, pass) {
        return new Promise((resolve, reject) => {
            this.AFauth.auth.createUserWithEmailAndPassword(email, pass)
                .then(userData => resolve(userData))
                .catch(err => reject(err));
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
const firebaseConfig = {
    apiKey: "AIzaSyA0m7Vi7pYwkg9HMqhVGwkl1maxLlDTSWg",
    authDomain: "salajuegos-7b4c4.firebaseapp.com",
    databaseURL: "https://salajuegos-7b4c4.firebaseio.com",
    projectId: "salajuegos-7b4c4",
    storageBucket: "",
    messagingSenderId: "390807224677",
    appId: "1:390807224677:web:793dd684c6864f7557618c",
    measurementId: "G-2M1Z4WC7T4"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PC\Documents\_Facultad\_4to Cuatri\Programacion 4\tp_progIV\juegos-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map