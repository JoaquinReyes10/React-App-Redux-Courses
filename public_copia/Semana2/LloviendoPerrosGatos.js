var perro = {
  estaLloviendo: true,
  ruido: "woof!",
  hacerRuido: function(){
    console.log(this.ruido);
  }
}
var gato = {
  estaLloviendo: true,
  ruido: "meoww!",
  hacerRuido: function(){
    console.log(this.ruido);
  }
}
llueve(perro,gato);
function llueve(perro,gato){
  if (perro.estaLloviendo == true && gato.estaLloviendo == true){
    console.log("Estan lloviendo perros y gatos ayuda")
  }
}
//perro.hacerRuido()
//gato.hacerRuido()
