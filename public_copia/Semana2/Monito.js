    function Monito(nombre, profesion, ataque, vida){
        this.nombre = nombre
        this.profesion = profesion
        this.ataque = ataque
        this.vida = vida

        this.imprimirInfo = function(){
            console.log("El Monito " + this.nombre + " es un " + this.profesion + ", con " + this.ataque + " de ataque y " + this.vida + " de vida.")
        }
        this.estaVivo = function(){
            if(this.vida>0){
            console.log(this.nombre + " esta vivo")
            return true
            }
            else {
                console.log(this.nombre + " esta muerto")
                return false
            }
        }
        this.atacar = function(monito){
            monito.vida = monito.vida-this.ataque
            console.log("El Monito " + monito.nombre + " sufrio " + this.ataque + " de daño y le quedan " + monito.vida + " puntos de vida.")
        }
    }
    var Joaco = new Monito("Joaquin", "Verdugo", 100, 550)
    var Cholo = new Monito("Maikol", "Pandillero de Santa", 150, 200)

    Joaco.imprimirInfo()
    Cholo.imprimirInfo()
    Joaco.atacar(Cholo)

    while(Cholo.estaVivo()){
        Joaco.atacar(Cholo)
    }
