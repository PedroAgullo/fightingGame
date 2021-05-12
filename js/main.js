
let equipo1 = [];
let equipo2 = [];



const cambiaPantalla = (foco) => {
    let arrPantalla = ["pantalla1", "pantalla2", "pantalla3", "pantalla4", "pantalla5", "pantalla6", "pantalla7"];

    arrPantalla = arrPantalla.filter(val => !foco.includes(val));
    document.getElementById(foco).style.display = "block";

    for(let _Pantalla of arrPantalla){
        document.getElementById(_Pantalla).style.display = "none";
    }
}

const escenarioSel = (mapa, escenario) => {
    let arrEscenarios = ["img/escenario0.gif", "img/escenario1.gif", "img/escenario2.gif", "img/escenario3.gif", "img/escenario4.gif" ];
    
    //document.getElementById("escenario").src=arrEscenarios[mapa];
    cambiaPantalla("pantalla5");
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
    }else{
        console.log("Ataca el jugador 2.")
        equipo2[0].atacar(equipo1[0]);
    }


    if (equipo2[0].vida <= 0){
        console.log("Ha ganado la partida el equipo 1 con el luchador: ", equipo1[0].nombre);
        cambiaPantalla("pantalla6");
    }else if(equipo1[0].vida <= 0){
        console.log("Ha ganado la partida el equipo 2 con el luchador: ", equipo2[0].nombre);
        cambiaPantalla("pantalla6");
    }

    console.log("Jugador 1: ", equipo1[0].nombre, " le queda la vida: ", equipo1[0].vida);
    console.log("Jugador 1: ", equipo2[0].nombre, " le queda la vida: ", equipo2[0].vida);
    cambiarBoton(player);
}


const cambiarBoton = (player) => {
    if(player == 1){
        console.log("Paso por arriba");
        document.getElementById('boton1').disabled = 'true';
        document.getElementById('boton2').disabled = '';

    }else if (player == 2){
        console.log("Paso por abajo");
        document.getElementById('boton1').disabled = '';
        document.getElementById('boton2').disabled = 'true';
    }
}

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




const reset = () => {
    cambiaPantalla("pantalla2");
    equipo1 = [];
    equipo2 = [];

    //Reiniciamos las imagenes de los luchadores.
    for(let j=1; j <= 20; j++){
        let num = j.toString();
        document.getElementById(num).className = "picFighter";   
//        document.getElementById(num).style.display = "initial";
        
       
        if(j < 11){
            let num = j.toString();
            document.getElementById(num).onclick = "luchadorSel(", j,")";
            console.log(document.getElementById(j).onclick);
        }else if(j >=11 && j<=20){

        }




    }

    //Reiniciamos las posiciones de los equipos.
    for(let j=0; j<= 4; j++){


    }


    //Reiniciamos la pantalla seleccionada.

    console.log("Equipo 1: ", equipo1);
    console.log("Equipo 2: ", equipo2);

}