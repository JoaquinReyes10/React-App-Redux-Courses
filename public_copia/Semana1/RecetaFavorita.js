var rf = {
  titulo: "Spaguetti",
  porciones: "8",
  ingredientes: ["Spaguetti", "Salsa de tomate", "Queso", "Tocino picado"],
}

console.log(rf.titulo)
console.log("Porciones: " + rf.porciones)
console.log("Ingredientes: ")

for (var inicio=0; inicio<rf.ingredientes.length; inicio++){
  console.log(rf.ingredientes[inicio])
}
