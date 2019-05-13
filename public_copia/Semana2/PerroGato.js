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
perro.hacerRuido()
gato.hacerRuido()
