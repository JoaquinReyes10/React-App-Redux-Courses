var request = new XMLHttpRequest()

request.open("GET", "https://jsonplaceholder.typicode.com/users", true)
request.onload = function () {
    var respuesta = JSON.parse(this.response)
    var app = document.getElementById("tabla-datos");

    respuesta.forEach(function (objeto, indice) {
        //Cree el contenedor
          var contenedor = document.createElement("tr")
        //Cree y añadi la imagen
          var img = document.createElement("img")
          img.src = "https://api.adorable.io/avatars/285/" + objeto.name
          contenedor.appendChild(img)
        //Cree y añadi el nombre
          var nombre = document.createElement("td")
          nombre.innerHTML = objeto.name
          nombre.classList.add("Cnombre")
          contenedor.appendChild(nombre)
          //Cree y añadi la empresa
          var empresa = document.createElement("td")
          empresa.innerHTML = objeto.company.name
          empresa.classList.add("Cempresa")
          nombre.appendChild(empresa)
          //Cree y añadi el boton
          var p = document.createElement("td")
          var pa = document.createElement("button")
          pa.innerHTML = "Ver más"
          nombre.appendChild(pa)
          contenedor.appendChild(p)
        //Cree los demas datos
          var nombreUsuario = document.createElement("td")
          nombreUsuario.innerHTML = objeto.username

          var correo = document.createElement("td")
          correo.innerHTML = objeto.email

          var domicilio = document.createElement("td")
          domicilio.innerHTML = objeto.address.street
          domicilio.innerHTML = objeto.address.suite
          domicilio.innerHTML = objeto.address.city
          domicilio.innerHTML = objeto.address.zipcode
          domicilio.innerHTML = objeto.address.geo.lat
          domicilio.innerHTML = objeto.address.geo.lng

          var numTel = document.createElement("td")
          numTel.innerHTML = objeto.phone

          var sitioWeb = document.createElement("td")
          sitioWeb.innerHTML = objeto.website

          var compania = document.createElement("td")
          compania.innerHTML = objeto.company.catchPhrase
          compania.innerHTML = objeto.company.bs

          document.querySelector("tbody").appendChild(contenedor)
            })
}
request.send()
