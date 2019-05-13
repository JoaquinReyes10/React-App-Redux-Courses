var request = new XMLHttpRequest()

request.open("GET", "https://jsonplaceholder.typicode.com/photos", true)
request.onload = function () {
    var respuesta = JSON.parse(this.response)
    var app = document.getElementById("tabla-datos");

    respuesta.forEach(function (objeto, indice) {
        //Cree el contenedor
          var contenedor = document.createElement("tr")
        //Cree y añadi la imagen
          var img = document.createElement("img")
          img.src = "https://jsonplaceholder.typicode.com/photos" + objeto.name
          contenedor.appendChild(img)

          document.querySelector("tbody").appendChild(contenedor)
            })
}
request.send()
