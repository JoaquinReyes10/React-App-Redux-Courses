console.clear();

var $input = $('<input type="search" placeholder="Search"/>').appendTo("#c");
var $buscar = $('<button class="btn btn-danger">Buscar</button>').appendTo("#c");
$input.val("");
$input.addClass("alert alert-danger");
$(".btn").on("click", planetas);

function planetas() {
  $.ajax({
    url: "https://swapi.co/api/planets/" + $input.val() + "/",
    method: "GET",
    success: function(elemento) {
        var vt = $("#div");
        vt.empty();
            vt.append(
              '<h3>Planetas</h3>'
         +     'Clima: <p>' + elemento.climate + '</p>'
         +     'Creacion: <p>' + elemento.created + '</p>'
         +     'Diametro: <p>' + elemento.diameter + '</p>'
         +     'Gravedad: <p>' + elemento.gravity + '</p>'
         +     'Nombre: <p>' + elemento.name + '</p>'
         +     'Periodo de orbita: <p>' + elemento.orbital_period + '</p>'
         +     'Poblacion: <p>' + elemento.population + '</p>'
         +     'Periodo de rotacion: <p>' + elemento.rotation_period + '</p>'
         +     'Superficie de agua: <p>' + elemento.surface_water + '</p>'
         +     'Terreno: <p>' + elemento.terrain + '</p>'
        );
    },
    error: function() {
      console.log("No se ha podido obtener la información");
    }
    });
  }
