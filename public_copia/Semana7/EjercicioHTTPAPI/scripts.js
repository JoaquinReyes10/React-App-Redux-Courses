var request = new XMLHttpRequest()

request.open("GET", "https://ghibliapi.herokuapp.com/films", true)
request.onload = function () {
    var respuesta = JSON.parse(this.response)
    var app = document.getElementById("root");

    var contenedor = document.createElement("div")
    contenedor.classList.add("container")

    respuesta.forEach(function (objeto, indice) {
        var contenedor = document.createElement("div")
        contenedor.classList.add("cont")
        contenedor.classList.add("row")
        contenedor.classList.add("col-md-4")
        contenedor.classList.add("clearfix")

        var titulo = document.createElement("div")
        titulo.classList.add("titulo")
        titulo.innerHTML = objeto.title
        contenedor.appendChild(titulo)
        app.appendChild(contenedor)

        var descripcion = document.createElement("div")
        descripcion.classList.add("descripcion")
        descripcion.innerHTML = objeto.description
        contenedor.appendChild(descripcion)
        app.appendChild(contenedor)
    })
}
request.send()
