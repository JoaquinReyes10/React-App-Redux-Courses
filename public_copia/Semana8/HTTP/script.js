var datos = [
          {
           nombre: 'saul',
           apellido: 'salazar',
           edad: 23,
           municipio: 'Guadalupe'
          },
          {
           nombre: 'lesly',
           apellido: 'contreras',
           edad: 17,
           municipio: 'Santa Catarina'
          },
          {
           nombre: 'julio',
           apellido: 'guzman',
           edad: 23,
           municipio: 'San Nicolas'
          },
          {
           nombre: 'joaquin',
           apellido: 'reyes espinoza',
           edad: 17,
           municipio: 'Santa Catarina'
          },
          {
           nombre: 'Enrique',
           apellido: 'Galvan Montes',
           edad: 17,
           municipio: 'Santa Catarina'
          },
          {
           nombre: 'Kelvin',
           apellido: 'Rangel',
           edad: 18,
           municipio: 'Santa Catarina'
          },
          {
           nombre: 'Eduardo',
           apellido: 'Fraustro',
           edad: 17,
           municipio: 'Santa Catarina'
          },
          {
           nombre: 'Diego',
           apellido: 'Ambriz',
           edad: 20,
           municipio: 'Apodaca'
          },
          {
           nombre: 'christian',
           apellido: 'Vega',
           edad: 17,
           municipio: 'Santa Catarina'
          }
    ]
      for(var i = 0; i < datos.length; i++){

            var contenedor = document.createElement("tr")

            var nombre = document.createElement("td")
            nombre.innerHTML = datos[i].nombre
            contenedor.appendChild(nombre)

            var apellido = document.createElement("td")
            apellido.innerHTML = datos[i].apellido
            contenedor.appendChild(apellido)

            var edad = document.createElement("td")
            edad.innerHTML = datos[i].edad
            contenedor.appendChild(edad)

            var municipio = document.createElement("td")
            municipio.innerHTML = datos[i].municipio
            contenedor.appendChild(municipio)

            document.querySelector("tbody").appendChild(contenedor)

        }
        $("table").DataTable();
