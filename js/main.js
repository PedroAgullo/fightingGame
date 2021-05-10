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



const luchador = (luchador) => {

    if(team2.length < 2){

        if(team1.length < 2){
            equipo1.push(allPlayers[luchador]);
            
        } else {
            
            equipo2.push(allPlayers[luchador]);

            if(equipo2.length == 2){
                console.log("ESTE ES EL TEAM1 ", equipo1);
                console.log("ESTE ES EL TEAM2 ", equipo2);
                cambiaFase("fase3");
            }            
        }        
        document.getElementById(fighter).onclick = "";
        document.getElementById(fighter).className = "seleccionado";        
    }        
}