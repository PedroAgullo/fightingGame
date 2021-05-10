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



const luchadorSel = (luchador) => {

    if(equipo2.length < 3){

        if(equipo1.length < 3){
            equipo1.push(listaPersonajes[luchador]);            
        } else {
            
            equipo2.push(listaPersonajes[luchador]);

            if(equipo2.length == 3){
                console.log("ESTE ES EL TEAM1 ", equipo1);
                console.log("ESTE ES EL TEAM2 ", equipo2);
                cambiaPantalla("pantalla4");
            }            
        }        
        document.getElementById(luchador).onclick = "";
        document.getElementById(luchador).className = "seleccionado";        
    }        
}