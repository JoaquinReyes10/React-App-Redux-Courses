console.clear();

var $input = $('<input type="search" placeholder="Search"/>').appendTo("#c");
var $buscar = $('<button class="btn btn-danger">Buscar</button>').appendTo("#c");
$input.val("");
$input.addClass("alert alert-danger");
$(".btn").on("click", films);

function films() {
  $.ajax({
    url: "https://swapi.co/api/films/" + $input.val() + "/",
    method: "GET",
    success: function(elemento) {
        var po = $("#div");
        po.empty();
            po.append(
              '<h3>Pelicula</h3>'
         +     'Director: <p>' + elemento.director + '</p>'
         +     'No. de episodio: <p>' + elemento.episode_id + '</p>'
         +     'Apertura de rastreo: <p>' + elemento.opening_crawl + '</p>'
         +     'Productor: <p>' + elemento.producer + '</p>'
         +     'Fecha de lanzamiento: <p>' + elemento.release_date + '</p>'
         +     'Titulo: <p>' + elemento.title + '</p>'
        );
    },
    error: function() {
      console.log("No se ha podido obtener la información");
    }
    });
  }
