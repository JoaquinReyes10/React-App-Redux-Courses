console.clear();

$("#boton").on("click", obtenerUsuarios);

function obtenerUsuarios() {
  $.ajax({
    url: "https://api.chucknorris.io/jokes/random",
    method: "GET",
    success: function(elemento) {
      var lista = $("#div");
      lista.empty();
          lista.append(
           '<h3>' + elemento.value + '</h3>'
          +     '<img src=' + elemento.icon_url + '></img>'
        );
    },
    error: function() {
      console.log("No se ha podido obtener la información");
    }
  });
}
