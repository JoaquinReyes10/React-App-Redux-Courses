function Animal (nombre, tamaño, edad, color){
    this.nombre = nombre
    this.tamaño = tamaño
    this.edad = edad
    this.color = color

    this.saludar = function (){
      alert("Hola")
    }
}


function Perro (){
  Animal.apply(this, arguments)
  this.ladrar = function() {
    alert("Woof")
  }
  this.correr = function() {
    alert("Estoy corriendo")
  }
  this.escarbar = function() {
    alert("Estoy escarbando")
  }
}

Perro.prototype = new Animal()

var miPerro = new Perro("Firulais", 200, 5, "Blanco")
miPerro.saludar()
miPerro.correr()
miPerro.escarbar()
miPerro.nombre 
