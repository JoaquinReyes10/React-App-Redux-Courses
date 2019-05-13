var misLibros = [
  {
      titulo: "El Hobbit",
      autor:"J.R.R. Tolkien",
      yaLeido:false,
  },
  {
      titulo: "Libro de la primaria",
      autor:"SEP",
      yaLeido: true,
  },
  {
      titulo: "Recetas de la abuelita volumen 17",
      autor:"La abuelita",
      yaLeido: false,
  }
]

misLibros.forEach(imprimirLibro)

function imprimirLibro(libro){
  if(libro.yaLeido == true){
    console.log("Tu ya has leido " + libro.titulo)
  }
  else {
    console.log("No has leido el libro " + libro.titulo)
  }
}
