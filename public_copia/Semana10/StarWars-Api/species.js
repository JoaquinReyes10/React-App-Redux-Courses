console.clear();

var $input = $('<input type="search" placeholder="Search"/>').appendTo("#c");
var $buscar = $('<button class="btn btn-danger">Buscar</button>').appendTo("#c");
$input.val("");
$input.addClass("alert alert-danger");
$(".btn").on("click", especies);

function especies() {
  $.ajax({
    url: "https://swapi.co/api/species/" + $input.val() + "/",
    method: "GET",
    success: function(elemento) {
        var nb = $("#div");
        nb.empty();
            nb.append(
              '<h3>Especies</h3>'
         +     'Altura media: <p>' + elemento.average_height + '</p>'
         +     'Promedio de vida: <p>' + elemento.average_lifespan + '</p>'
         +     'Clasificación: <p>' + elemento.classification + '</p>'
         +     'Creación: <p>' + elemento.created + '</p>'
         +     'Designación: <p>' + elemento.designation + '</p>'
         +     'Color de ojos: <p>' + elemento.eye_colors + '</p>'
         +     'Color de cabello: <p>' + elemento.hair_colors + '</p>'
         +     'Lenguaje: <p>' + elemento.language + '</p>'
         +     'Color de piel: <p>' + elemento.skin_colors + '</p>'
         +     'Nombre: <p>' + elemento.name + '</p>'
        );
    },
    error: function() {
      console.log("No se ha podido obtener la información");
    }
    });
  }
