function Transporte (color, tipo, peso){
  this.color = color
  this.tipo = tipo
  this.peso = peso
}
//Funcion de Barco
function Barco (){
  Transporte.apply(this, arguments)

  this.zarpar = function() {
    alert("Listo ya sali de la playa")
  }
  this.navegar = function() {
    alert("Estoy navegando")
  }
  this.soltarAncla = function() {
    alert("Solte el ancla y me detuve")
  }
}

Barco.prototype = new Transporte()
var elBarco = new Barco("Azul con Rojo", "Maritimo", 100 + " toneladas")
//elBarco.zarpar()
//elBarco.navegar()
//elBarco.soltarAncla()

//Funcion de Avion
function Avion (){
  Transporte.apply(this, arguments)

  this.despegar = function() {
    alert("Voy a despegar")
  }
  this.volar = function() {
    alert("Estoy volando")
  }
  this.aterrizar = function() {
    alert("Listo ya aterrize")
  }
}

Avion.prototype = new Transporte()
var elAvion = new Avion("Blanco", "Aereo", 143 + " toneladas")
//elAvion.despegar()
//elAvion.volar()
//elAvion.aterrizar()

//Funcion de Auto
function Auto (){
  Transporte.apply(this, arguments)

  this.arrancar = function() {
    alert("Estoy arrancando")
  }
  this.movimiento = function() {
    alert("Estoy en movimiento")
  }
  this.detenerse = function() {
    alert("Bien, me detengo")
  }
}

Auto.prototype = new Transporte()
var elAuto = new Auto("Negro", "Terrestre", 4000 + " libras")
//elAuto.arrancar()
//elAuto.movimiento()
//elAuto.detenerse()
