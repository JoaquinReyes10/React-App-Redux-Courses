function Postres (tipo, precio, tamano){
  this.tipo = tipo
  this.precio = precio
  this.tamano = tamano
}
//Funcion de Pastel
function Pastel (){
  Postres.apply(this, arguments)

  this.frutas = function() {
    alert("Soy un pastel de frutas")
  }
  this.chocolate = function() {
    alert("Soy un pastel de chocolate")
  }
  this.chantilly = function() {
    alert("Soy un pastel de chantilly")
  }
}

Pastel.prototype = new Postres()
var unPastel = new Pastel("Pastel", "$250", "Grande")
//unPastel.frutas()
//unPastel.chocolate()
//unPastel.chantilly()

//Funcion de Pay
function Pay (){
  Postres.apply(this, arguments)

  this.queso = function() {
    alert("Soy un pay de queso")
  }
  this.manzana = function() {
    alert("Soy un pay de manzana")
  }
  this.fresa = function() {
    alert("Soy un pay de fresa")
  }
}

Pay.prototype = new Postres()
var unPay = new Pay("Pay", "$100", "Mediano")
//unPay.queso()
//unPay.manzana()
//unPay.chocolate()

//Funcion de Nieve
function Nieve (){
  Postres.apply(this, arguments)

  this.limon = function() {
    alert("Nieve de limon, jiji")
  }
  this.napolitano = function() {
    alert("Nieve de napolitano, Si")
  }
  this.nuez = function() {
    alert("Oh si, nieve de nuez")
  }
}

Nieve.prototype = new Postres()
var unaNieve = new Nieve("Nieve", "$20", "Individual")
//unaNieve.limon()
//unaNieve.napolitano()
//unaNieve.nuez()
