const { jugadores } = require("./sueldoResuelveFC.js");

const niveles = {
    "A": 5,
    "B": 10,
    "C": 15,
    "Cuauh": 20
};


function golPct(goles, goles_minimos) {
    return Math.min(goles / goles_minimos);
}

function golesPorEquipo(jugadores) {
    const equipos = {};

    jugadores.forEach(jugador => {
        jugador["goles_minimos"] = niveles[jugador.nivel];

        let equipo = jugador.equipo;
        if (equipo in equipos) {
            equipos[equipo].goles += jugador.goles;
            equipos[equipo].goles_minimos += jugador.goles_minimos;
        } else {
            equipos[equipo] = { goles: jugador.goles, goles_minimos: jugador.goles_minimos };
        }
    })

    return equipos;
}



const equipoGoles = golesPorEquipo(jugadores);

jugadores.forEach(jugador => {
    let pctJugador = golPct(jugador.goles, jugador.goles_minimos);
    let pctEquipo = golPct(equipoGoles[jugador.equipo].goles, equipoGoles[jugador.equipo].goles_minimos);

    jugador["sueldo_completo"] = (pctJugador + pctEquipo) / 2 * jugador.bono + jugador.sueldo;

    // redondeamos a dos decimales para adquirir un valor monetario
    jugador["sueldo_completo"] = Math.round(jugador["sueldo_completo"]  * 100) / 100
})

console.log(jugadores);