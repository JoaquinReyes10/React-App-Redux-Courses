//Funcion Capitalizar
function capitalizar(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//Funcion Mayusculas
function aMayusculas(string){
  return string.toUpperCase();
}

//Funcion Minusculas
function aMinusculas(string){
  return string.toLowerCase();
}

//Aumentar IP
function aumentarIP(int){
  var intSeparado = int.split(".")
  var ultimoNumero = intSeparado[intSeparado.lenght]
  var num = parseInt(ultimoNumero + 1)
  intSeparado[intSeparado.lenght] = num
  num.join(".");
  return num;
}

//Combinar strings
function combinarStrings(string, string2){
  return string + string2;
}

//Repetir string
function repetir(string, num){
  return string.repeat(num);
}

//Reemplazar string
function reemplazar(string, string2, string3){
  return string.replace(string2, string3);
}
//Remover numeros
function remover(string){
  var primeraParte = string.slice(0, 3);
  var indice = string.indexOf(";");
  var segundaParte = string.slice(indice + 1, string.lenght);
  var resultado = primeraParte + ": " + segundaParte;
  return resultado;
 }
