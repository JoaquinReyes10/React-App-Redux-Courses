console.clear();

var $input = $('<input type="search" placeholder="Search"/>').appendTo("#c");
var $buscar = $('<button class="btn btn-danger">Buscar</button>').appendTo("#c");
$input.val("");
$input.addClass("alert alert-danger");
$(".btn").on("click", obtener);

function obtener() {
  $.ajax({
    url: "https://swapi.co/api/people/" + $input.val() + "/",
    method: "GET",
    success: function(elemento) {
        var ok = $("#div");
        ok.empty();
            ok.append(
               'Nombre: <p>' + elemento.name + '</p>'
         +     'Altura: <p>' + elemento.height + '</p>'
         +     'Peso: <p>' + elemento.mass + '</p>'
         +     'Color de cabello: <p>' + elemento.hair_color + '</p>'
         +     'Género: <p>' + elemento.gender + '</p>'
         +     'Color de piel: <p>' + elemento.skin_color + '</p>'
         +     'Color de ojos: <p>' + elemento.eye_color + '</p>'
         +     'Año de nacimiento: <p>' + elemento.birth_year + '</p>'
        );
    },
    error: function() {
      console.log("No se ha podido obtener la información");
    }
    });
  }
