var $input = $("<input type='search' class='text-center' placeholder='Buscar...'/>").appendTo("#div")
var $boton = $("<button class='btn btn-success'>Buscar</button>").appendTo("#div")
var $resultados = $("<div></div>").appendTo("#div")

function buscar(name) {
    $.ajax({
        url: "https://api.pokemontcg.io/v1/cards",
        data: {
            name: $input.val(),
        },
        method: "GET",
        success: function (resp) {
            $resultados.empty()
           console.log(resp)
            $.each(resp.cards, function (i, result) {
                $imagen = $("<img />")
                $($imagen).attr("src",result.imageUrl)
                $($imagen).attr("width","270px")
                $($imagen).attr("height","370px")
                $resultados.append($imagen)
            });
        },
        error: function (e) {
            alert(e)
        }
    });
}
$input.on("blur keydown", function () {
    if (!event.keyCode || event.keyCode == 13) {
        buscar($input.val());
    }
});

buscar($input.val());
