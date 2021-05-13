
class Luchador{
    constructor(nombre,ataque,defensa,velocidad,imagen){
        this.vida = 100;
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
        this.imagen = imagen; 
        this.velocidad = velocidad;       
    }
    atacar(enemy){
        enemy.vida -= this.ataque - enemy.defensa;
    }
}

//Instancio luchadores
let p1 = new Luchador("Shrek",30,10,25,"img/jack.gif");
let p2 = new Luchador("Burro",35,12,33, "img/robert.gif");
let p3 = new Luchador("Gato",25,20, 24,"img/takuma.gif");
let p4 = new Luchador("Fiona",40,8,33,"img/p4.png");
let p5 = new Luchador("Frodo",30,10,18,"img/p5.png");
let p6 = new Luchador("Slayer",35,12,34, "img/p6.png");
let p7 = new Luchador("AmongUs",25,20,28,"img/p7.png");
let p8 = new Luchador("Steve",40,8,27,"img/p8.png");
let p9 = new Luchador("Dhalsim",30,10,26,"img/p9.png");
let p10 = new Luchador("EHonda",35,12,32,"img/p10.png");

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