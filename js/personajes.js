
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
let p1 = new Luchador("Ryo",30,10,25,"img/p1Gif.gif");
let p2 = new Luchador("Robert",35,12,33, "img/p2Gif.gif");
let p3 = new Luchador("Mr.X",25,20, 24,"img/p3Gif.gif");
let p4 = new Luchador("King",40,8,33,"img/p4Gif.png");
let p5 = new Luchador("Rody",30,10,18,"img/p5.png");
let p6 = new Luchador("Jin",35,12,34, "img/p6.png");
let p7 = new Luchador("Mr.Karate",25,20,28,"img/p7.png");
let p8 = new Luchador("Kasumi",40,8,27,"img/p8.png");
let p9 = new Luchador("Yuri",30,10,26,"img/p9.png");
let p10 = new Luchador("Jack",35,12,32,"img/p10.png");

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