
class Luchador{
    constructor(nombre,ataque,defensa,velocidad, suerte,imagen, animacion){
        this.vida = 100;
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
        this.imagen = imagen; 
        this.velocidad = velocidad;       
        this.animacion = animacion;
        this.suerte = suerte;
    }
    atacar(enemy){
        
        
        
        enemy.vida -= ((this.ataque) - (enemy.defensa) - (this.suerte - enemy.suerte));
        
    }
}

//Instancio luchadores
let p1 = new Luchador("Ryo",30,10,25,5, "img/p1.png","img/p1gif.gif",);
let p2 = new Luchador("Robert",35,12,33,6, "img/p2.png", "img/p2gif.gif");
let p3 = new Luchador("Mr.X",25,20, 24,4, "img/p3.png","img/p3gif.gif");
let p4 = new Luchador("King",40,8,33,7, "img/p4.png","img/p4gif.gif");
let p5 = new Luchador("Rody",30,10,18,3, "img/p5.png","img/p5gif.gif");
let p6 = new Luchador("Jin",35,12,34,5, "img/p6.png", "img/p6gif.gif");
let p7 = new Luchador("Mr.Karate",25,20,28,4, "img/p7.png","img/p7gif.gif");
let p8 = new Luchador("Kasumi",40,8,27,7, "img/p8.png","img/p8gif.gif");
let p9 = new Luchador("Yuri",30,10,26,3, "img/p9.png","img/p9gif.gif");
let p10 = new Luchador("Jack",35,12,32,5, "img/p10.png","img/p10gif.gif");

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