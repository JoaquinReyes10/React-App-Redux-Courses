var miPeliFavorita = {
    titulo: "El señor de los anillos",
    duracion:180,
    actores:["Gollum", "Grimli", "Aragorn", "Frodo"],
}

detallesDePelicula(miPeliFavorita)

function detallesDePelicula(pelicula) {
  console.log(pelicula.titulo + " dura " + pelicula.duracion + " minutos")
  console.log(  "Las estrellas son: " + pelicula.actores.join(", "));
}
