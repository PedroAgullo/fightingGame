let round = 0;
let W1 = 0;
let W2 = 0;
let equipo1 = [];
let equipo2 = [];


// Función de cambio de pantallas
const cambiaPantalla = (foco) => {
    let arrPantalla = ["pantalla1", "pantalla2", "pantalla3", "pantalla4", "pantalla5", "pantalla6", "pantalla7", "pantalla8", "pantalla9", "pantalla10"];

    arrPantalla = arrPantalla.filter(val => !foco.includes(val));
    document.getElementById(foco).style.display = "block";

    for(let _Pantalla of arrPantalla){
        document.getElementById(_Pantalla).style.display = "none";
    }
}

//Función de cambio de escenario.
const escenarioSel = (mapa, escenario) => {
    let arrEscenarios = ["img/escenario0.gif", "img/escenario1.gif", "img/escenario2.gif", "img/escenario3.gif", "img/escenario4.gif", "img/escenario5.gif", "img/escenario6.gif", "img/escenario7.gif", "img/escenario8.gif", "img/escenario9.gif"];
    document.getElementById("intro").style.backgroundImage="";
    document.getElementById("escenario").src=arrEscenarios[mapa];
    document.getElementById("pantallaLucha").style.backgroundImage=arrEscenarios[mapa];
    

    cambiaPantalla("pantalla5");
    colocaLucha();
}

let i = 0; //recorre el array del equipo1
let x = 0; //recorre el array del equipo2
const luchadorSel = (luchador) => {
    
    if(equipo2.length < 3){

        if(equipo1.length < 3){
            let seleccionado = "select" + (equipo1.length + 1);
            equipo1.push(listaPersonajes[luchador]);
            document.getElementById(seleccionado).src=equipo1[i].imagen;
            i++;

        } else {
            let seleccionado = "select" + ((equipo1.length + equipo2.length) + 1);            
            equipo2.push(listaPersonajes[luchador]);
            document.getElementById(seleccionado).src=equipo2[x].imagen;
            x++;

            if(equipo2.length == 3){
                setTimeout(() => {
                    cambiaPantalla("pantalla10");
                }, 2000);
            }
                        
        }        
        document.getElementById(luchador).onclick = "";
        
        document.getElementById(luchador).className = "seleccionado";        
    }        
}

const comienzaPartidaVS = (player) => {          
    
    if (player == 1){
        console.log("Ataca el jugador 1.");
        equipo1[round].atacar(equipo2[round]);
        actualizaVida(player);
    }else{
        console.log("Ataca el jugador 2.")
        equipo2[round].atacar(equipo1[round]);
        actualizaVida(player);
    }


    if (equipo2[0].vida <= 0){
        console.log("Ha ganado la partida el equipo 1 con el luchador: ", equipo1[round].nombre);
        setTimeout(() => {
            cambiaPantalla("pantalla6");
        }, 1500);
        colocaResultado();
        cambiaPantalla("pantalla6");
    }else if(equipo1[0].vida <= 0){
        console.log("Ha ganado la partida el equipo 2 con el luchador: ", equipo2[round].nombre);
        setTimeout(() => {
            cambiaPantalla("pantalla6");
        }, 1500);
        colocaResultado();
    }

    cambiarBoton(player);
}


/*Función para que baje la barra de vida con cada golpe*/
const actualizaVida = (selVida) => {
    let vidaBarra1 = equipo1[0].vida;
    let vidaBarra2 = equipo2[0].vida;

    vidaBarra1 = (vidaBarra1 * 40)/100;
    document.getElementById("vida1").style.width = vidaBarra1+"vw";
    vidaBarra2 = (vidaBarra2 * 40)/100;
    document.getElementById("vida2").style.width = vidaBarra2+"vw";
}

/* Cambia el turno del personaje. Cada vez ataca uno y bloquea el otro botón. */
const cambiarBoton = (player) => {
    if(player == 1){
        document.getElementById('boton1').disabled = 'true';
        document.getElementById('boton2').disabled = '';

    }else if (player == 2){
        document.getElementById('boton1').disabled = '';
        document.getElementById('boton2').disabled = 'true';
    }
}

/* Selección de personaje del modo VS */
const vsSel = (luchador) => {
    
    if(equipo2.length < 1){

        if(equipo1.length < 1){

            let seleccionado = "select7";
            equipo1.push(listaPersonajes[luchador]);
            document.getElementById(seleccionado).src=equipo1[i].imagen;
            i++;

        } else {
            let seleccionado = "select8";            
            equipo2.push(listaPersonajes[luchador]);
            document.getElementById(seleccionado).src=equipo2[x].imagen;
            x++;

            if(equipo2.length == 1){
                setTimeout(() => {
                    cambiaPantalla("pantalla4");
                }, 2000);
            }
                        
        }        
        document.getElementById(luchador).onclick = "";
        document.getElementById(luchador + 10).className = "seleccionado";        
    }        
}

/*Resetea el juego*/
const reset = document.getElementById('playAgain');
reset.addEventListener('click', () => {
window.location.reload();
})

const resetTeam = document.getElementById('playAgain2');
resetTeam.addEventListener('click', () => {
window.location.reload();
})

const colocaLucha = () => {
            document.getElementById("select50").src=equipo1[round].animacion;
            document.getElementById("select51").src=equipo2[round].animacion;
}

const colocaResultado = () => {
    let mensajeGanador = "No hace lo que debe";
    let round=0;
    document.getElementById("select100").src=equipo1[0].imagen;
    document.getElementById("select101").src=equipo2[0].imagen;
    if (equipo1[0].vida > equipo2[0].vida){
        mensajeGanador = equipo1[0].nombre + " ha ganado el combate a " + equipo2[0].nombre + ".";
        document.getElementById("select101").style.class = ("luchadoresDerrotados");

    }else {
        mensajeGanador = equipo2[0].nombre + " ha ganado el combate a " + equipo1[0].nombre + ".";
    }

    
    i++;
    document.getElementById("textoResultado").innerHTML = (mensajeGanador);
}

const colocaResultadoTeam = (ganador, W1, W2) => {    
    let mensajeGanador = "No hace lo que debe";
    
    document.getElementById("select150").src=equipo1[0].imagen;
    document.getElementById("select151").src=equipo2[0].imagen;
    document.getElementById("select152").src=equipo1[1].imagen;
    document.getElementById("select153").src=equipo2[1].imagen;
    document.getElementById("select154").src=equipo1[2].imagen;
    document.getElementById("select155").src=equipo2[2].imagen;
    
    if (ganador == "Equipo1"){
        document.getElementById("textoResultadoTeam").innerHTML = (ganador + " ha ganado la batalla por " + W1 + "combates a " + W2);

    }else if (ganador == "Equipo2") {
        document.getElementById("textoResultadoTeam").innerHTML = (ganador + " ha ganado la batalla por " + W2 + "combates a " + W1);    
    }

    
    document.getElementById("textoResultado").innerHTML = (mensajeGanador);
}




const comienzaPartidaTeam = (player) => {          
   let min=0;

    if ((round == 3)  ){
        console.log("Entra en el if principal. Termina la partida se llama a cambiaPantalla");
        colocaResultadoTeam();
        cambiaPantalla("pantalla8");

    }else if (round <= 2){
        if (player == 1){
            console.log("Ataca el jugador 1.");
            equipo1[round].atacar(equipo2[round]);
            actualizaVidaTeam(player);
        }else{
            console.log("Ataca el jugador 2.")
            equipo2[round].atacar(equipo1[round]);
            actualizaVidaTeam(player);
        }
        console.log("Vida de los 2 equipos:", equipo1[round].vida, equipo2[round].vida);
        compruebaPartida(player);
    }
}

const compruebaPartida = (jugadorX) => {
    console.log(equipo2[round].vida);
    if (equipo2[round].vida < 0){
        console.log("Ha ganado la partida el equipo 1 con el luchador: ", equipo1[round].nombre);
        round++;
    }else if(equipo1[round].vida < 0){
        console.log("Ha ganado la partida el equipo 2 con el luchador: ", equipo2[round].nombre);
        round++;
    }else{
        cambiarBotonTeam(jugadorX);
        console.log("Comienza el round: ", round);
    }
}


const escenarioSelTeam = (mapa, escenario) => {
    let arrEscenarios = ["img/escenario0.gif", "img/escenario1.gif", "img/escenario2.gif", "img/escenario3.gif", "img/escenario4.gif", "img/escenario5.gif", "img/escenario6.gif", "img/escenario7.gif", "img/escenario8.gif", "img/escenario9.gif" ];
    document.getElementById("intro").style.backgroundImage="";

    document.getElementById("escenarioTeam").src=arrEscenarios[mapa];
    document.getElementById("pantallaLuchaTeam").style.backgroundImage=arrEscenarios[mapa];
    

    cambiaPantalla("pantalla9");
    colocaLuchaTeam();
}

const colocaLuchaTeam = () => {
    if (W1 + W2 == 0){
        document.getElementById("select55").src=equipo1[round].animacion;
        document.getElementById("select56").src=equipo2[round].animacion;


    }else if (W1 + W2 == 1){
        document.getElementById("select55").src=equipo1[round].animacion;
        document.getElementById("select56").src=equipo2[round].animacion;
    }else if (W1 + W2 == 2){
        document.getElementById("select55").src=equipo1[round].animacion;
        document.getElementById("select56").src=equipo2[round].animacion;
    }
    
}


const cambiarBotonTeam = (player) => {
    console.log("Entra a cambiar botonTeam")
    if(player == 1){
        document.getElementById('boton3').disabled = 'true';
        document.getElementById('boton4').disabled = '';

    }else if (player == 2){
        document.getElementById('boton3').disabled = '';
        document.getElementById('boton4').disabled = 'true';
    }
}


const actualizaVidaTeam = (player) => {
    let vidaBarra1 = equipo1[round].vida;
    let vidaBarra2 = equipo2[round].vida;

    if ((vidaBarra1 <= 0)){
        document.getElementById("vida3").style.width = 0 +"vw";
        compruebaPartida(player);
        console.log("Equipo 2 gana el round: ", round);

        console.log("Comienza el siguiente round.");
        document.getElementById("vida3").style.width = 0 +"vw";
        document.getElementById("select55").src = equipo1[round].animacion;
        document.getElementById("select56").src = equipo2[round].animacion;

    } else if ((vidaBarra2 <= 0)){
        document.getElementById("vida4").style.width = 0 +"vw";
        compruebaPartida(player);
        console.log("Equipo 1 gana el round: ", round);

        console.log("Comienza el siguiente round.");
        document.getElementById("vida4").style.width = 0 +"vw";
        document.getElementById("select55").src = equipo1[round].animacion;
        document.getElementById("select56").src = equipo2[round].animacion;


    }else{
        vidaBarra1 = (vidaBarra1 * 40)/100;
        document.getElementById("vida3").style.width = vidaBarra1+"vw";
        vidaBarra2 = (vidaBarra2 * 40)/100;
        document.getElementById("vida4").style.width = vidaBarra2+"vw";
    }
}