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


let i = 0;
let x = 0;
const luchadorSel = (luchador) => {
    
    if(equipo2.length < 3){

        if(equipo1.length < 3){
            let seleccionado = "select" + (equipo1.length + 1);
            equipo1.push(listaPersonajes[luchador]);
            document.getElementById(seleccionado).src=equipo1[i].imagen;
            console.log("Seleccionado: ", seleccionado);
            console.log(i);
            i++;

        } else {
            let seleccionado = "select" + ((equipo1.length + equipo2.length) + 1);            
            equipo2.push(listaPersonajes[luchador]);
            document.getElementById(seleccionado).src=equipo2[x].imagen;
            console.log("Seleccionado: ", seleccionado);
            x++;

            if(equipo2.length == 3){
                setTimeout(() => {
                    cambiaPantalla("pantalla4");
                }, 3000);
            }
                        
        }        
        document.getElementById(luchador).onclick = "";
        document.getElementById(luchador).className = "seleccionado";        
    }        
}
