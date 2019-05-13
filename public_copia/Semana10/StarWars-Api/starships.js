console.clear();

var $input = $('<input type="search" placeholder="Search"/>').appendTo("#c");
var $buscar = $('<button class="btn btn-danger">Buscar</button>').appendTo("#c");
$input.val("");
$input.addClass("alert alert-danger");
$(".btn").on("click", naves);

function naves() {
  $.ajax({
    url: "https://swapi.co/api/starships/" + $input.val() + "/",
    method: "GET",
    success: function(elemento) {
        var as = $("#div");
        as.empty();
            as.append(
              '<h3>Naves Estelares</h3>'
         +     'MGLT: <p>' + elemento.MGLT + '</p>'
         +     'Capacidad de cargo: <p>' + elemento.cargo_capacity + '</p>'
         +     'Consumibles: <p>' + elemento.consumables + '</p>'
         +     'Costo en creditos: <p>' + elemento.cost_in_credits + '</p>'
         +     'Creación: <p>' + elemento.created + '</p>'
         +     'Calificación de hiperimpulsión: <p>' + elemento.hyperdrive_rating + '</p>'
         +     'Anchura: <p>' + elemento.length + '</p>'
         +     'Fabricante: <p>' + elemento.manufacturer + '</p>'
         +     'Personal: <p>' + elemento.crew + '</p>'
         +     'Velocidad atmosférica máxima: <p>' + elemento.max_atmosphering_speed + '</p>'
         +     'Modelo: <p>' + elemento.model + '</p>'
         +     'Nombre: <p>' + elemento.name + '</p>'
         +     'Pasajeros: <p>' + elemento.passengers + '</p>'
         +     'Clase de nave: <p>' + elemento.starship_class + '</p>'
        );
    },
    error: function() {
      console.log("No se ha podido obtener la información");
    }
    });
  }
