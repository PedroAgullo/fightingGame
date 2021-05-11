let equipo1 = [];
let equipo2 = [];


const cambiaPantalla = (foco) => {
    let arrPantalla = ["pantalla1", "pantalla2", "pantalla3", "pantalla4", "pantalla5", "pantalla6"];

    arrPantalla = arrPantalla.filter(val => !foco.includes(val));
    document.getElementById(foco).style.display = "block";

    for(let _Pantalla of arrPantalla){
        document.getElementById(_Pantalla).style.display = "none";
    }
}

const escenarioSel = (mapa, escenario) => {
    let arrEscenarios = ["img/escenario0.gif", "img/escenario1.gif", "img/escenario2.gif", "img/escenario3.gif", "img/escenario4.gif" ];
    
    document.getElementById("escenario").src=arrEscenarios[mapa];
    cambiaPantalla("pantalla5");
    // console.log("ESTE ES EL TEAM1 ", equipo1);
    // console.log("ESTE ES EL TEAM2 ", equipo2);
    
}

const luchadorSel = (luchador) => {

    if(equipo2.length < 3){

        if(equipo1.length < 3){
            equipo1.push(listaPersonajes[luchador]);
            document.getElementById("select1").src= equipo1[0].imagen;

        } else {
            
            equipo2.push(listaPersonajes[luchador]);

            if(equipo2.length == 3){

                cambiaPantalla("pantalla4");
            }            
        }        
        document.getElementById(luchador).onclick = "";
        document.getElementById(luchador).className = "seleccionado";        
    }        
}
