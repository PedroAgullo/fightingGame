
class Luchador{

    constructor(nombre,ataque,defensa){
        this.vida = 100;
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;        
    }

    atacar(enemy){
        enemy.vida -= this.ataque - enemy.defensa;
    }

}


//Instancio luchadores
let p1 = new Personaje("Shrek",30,10);
let p2 = new Personaje("Burro",35,12);
let p3 = new Personaje("Gato",25,20);
let p4 = new Personaje("Fiona",40,8);
let p5 = new Personaje("Frodo",30,10);
let p6 = new Personaje("Slayer",35,12);
let p7 = new Personaje("AmongUs",25,20);
let p8 = new Personaje("Steve",40,8);
let p9 = new Personaje("Dalsim",30,10);
let p10 = new Personaje("EHonda",35,12);


let listaPersonajes = {
    "1" : p1,
    "2" : p2,
    "3" : p3,
    "4" : p4,
    "5" : p5,
    "6" : p6,
    "7" : p7,
    "8" : p8,
    "9" : p9,
    "10" : p10    
}