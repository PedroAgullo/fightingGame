
let equipo1 = [];
let equipo2 = [];

// Función de cambio de pantallas
const cambiaPantalla = (foco) => {
    let arrPantalla = ["pantalla1", "pantalla2", "pantalla3", "pantalla4", "pantalla5", "pantalla6", "pantalla7"];

    arrPantalla = arrPantalla.filter(val => !foco.includes(val));
    document.getElementById(foco).style.display = "block";

    for(let _Pantalla of arrPantalla){
        document.getElementById(_Pantalla).style.display = "none";
    }
}

//Función de cambio de escenario.
const escenarioSel = (mapa, escenario) => {
    let arrEscenarios = ["img/escenario0.gif", "img/escenario1.gif", "img/escenario2.gif", "img/escenario3.gif", "img/escenario4.gif" ];
    document.getElementById("intro").style.backgroundImage="";

    document.getElementById("escenario").src=arrEscenarios[mapa];
    document.getElementById("pantallaLucha").style.backgroundImage=arrEscenarios[mapa];
    document.getElementById("intro").style.backgroundImage="";
    

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
                    cambiaPantalla("pantalla4");
                }, 2000);
            }
                        
        }        
        document.getElementById(luchador).onclick = "";
        
        document.getElementById(luchador).className = "seleccionado";        
    }        
}

let j1 = [];
let j2 = [];
let round = 1;

const comienzaPartida = (player) => {          
    console.log(equipo1[0]);
    console.log(equipo2[0]);
    if (player == 1){
        console.log("Ataca el jugador 1.");
        equipo1[0].atacar(equipo2[0]);
        actualizaVida(player);

    }else{
        console.log("Ataca el jugador 2.")
        equipo2[0].atacar(equipo1[0]);
        actualizaVida(player);
    }


    if (equipo2[0].vida <= 0){
        console.log("Ha ganado la partida el equipo 1 con el luchador: ", equipo1[0].nombre);
        setTimeout(() => {
            cambiaPantalla("pantalla6");
        }, 1500);
        colocaResultado();
        cambiaPantalla("pantalla6");
    }else if(equipo1[0].vida <= 0){
        console.log("Ha ganado la partida el equipo 2 con el luchador: ", equipo2[0].nombre);
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


const colocaLucha = () => {
    
            let round=0;
            document.getElementById("select50").src=equipo1[round].animacion;
            i++;

            document.getElementById("select51").src=equipo2[round].animacion;

}



const colocaResultado = () => {
    let mensajeGanador = "No hace lo que debe";
    let round=0;
    document.getElementById("select100").src=equipo1[round].imagen;
    document.getElementById("select101").src=equipo2[round].imagen;
    if (equipo1[0].vida > equipo2[0].vida){
        mensajeGanador = equipo1[0].nombre + " ha ganado el combate a " + equipo2[0].nombre;

    }else {
        mensajeGanador = equipo2[0].nombre + " ha ganado el combate a " + equipo1[0].nombre;
    }

    
    i++;
    document.getElementById("textoResultado").innerHTML = (mensajeGanador);
}