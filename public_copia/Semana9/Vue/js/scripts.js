var request = new XMLHttpRequest()
request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
request.onload = function() {

  var respuesta = JSON.parse(this.response)
  var app = document.querySelector("div.cv")

  respuesta.forEach(function(objeto, indice) {
    var contenedor = document.createElement('div')

    var titulo = document.createElement('div')
    var texto = document.createElement('h1')
    texto.innerHTML = objeto.title
    titulo.appendChild(tituloTexto)

    var descripcion = document.createElement("div")
    descripcion.innerHTML = objeto.body

    var usuario = document.createElement('div')
    usuario.innerHTML = 'Posted on January 1, 2017 by ' + objeto.id

    contenedor.appendChild(titulo)
    titulo.classList.add('contenedor__titulo')
    contenedor.appendChild(descripcion)
    descripcion.classList.add('contenedor__descripcion')
    contenedor.appendChild(usuario)
    usuario.classList.add('contenedor__usuario')

    app.appendChild(contenedor)
  })

}
request.send()
