// Importaciones de las clases y interfaces
import { Jugador } from "./models/Jugador.js";
import { Equipo } from "./models/Equipo.js";
import { Futbol } from "./models/Futbol.js";
import { Basquet } from "./models/Basquet.js";
import { Partido } from "./models/Partido.js";
import { Torneo } from "./models/Torneo.js";
import { Deporte } from "./models/Deporte.js";

/**
 * Función principal que demuestra el funcionamiento del sistema
 */
function main(): void {
  console.log("🏆 === SISTEMA DE TORNEOS === 🏆\n");

  try {
    // 1. Crear jugadores para fútbol
    console.log("👥 === CREANDO JUGADORES === 👥");
    const jugadoresFutbol = [
      new Jugador("f1", "Lionel Messi", 36, "Delantero"),
      new Jugador("f2", "Cristiano Ronaldo", 39, "Delantero"),
      new Jugador("f3", "Neymar Jr", 31, "Extremo"),
      new Jugador("f4", "Kylian Mbappé", 25, "Delantero"),
      new Jugador("f5", "Erling Haaland", 23, "Delantero"),
      new Jugador("f6", "Kevin De Bruyne", 32, "Mediocampista"),
      new Jugador("f7", "Virgil van Dijk", 32, "Defensor"),
      new Jugador("f8", "Sadio Mané", 31, "Extremo"),
      new Jugador("f9", "Mohamed Salah", 31, "Extremo"),
      new Jugador("f10", "Robert Lewandowski", 35, "Delantero"),
      new Jugador("f11", "Manuel Neuer", 37, "Arquero"),
    ];

    // Jugadores para básquet
    const jugadoresBasquet = [
      new Jugador("b1", "LeBron James", 39, "Ala-Pívot"),
      new Jugador("b2", "Stephen Curry", 35, "Base"),
      new Jugador("b3", "Kevin Durant", 35, "Alero"),
      new Jugador("b4", "Giannis Antetokounmpo", 29, "Ala-Pívot"),
      new Jugador("b5", "Luka Dončić", 24, "Base"),
      new Jugador("b6", "Jayson Tatum", 25, "Alero"),
    ];

    jugadoresFutbol.forEach((jugador) =>
      console.log(`⚽ ${jugador.toString()}`)
    );
    jugadoresBasquet.forEach((jugador) =>
      console.log(`🏀 ${jugador.toString()}`)
    );

    console.log("\n🏟️ === CREANDO EQUIPOS DE FÚTBOL === 🏟️");
    const psg = new Equipo("team1", "Paris Saint-Germain");
    const city = new Equipo("team2", "Manchester City");

    for (let i = 0; i < 6; i++) {
      psg.agregarJugador(jugadoresFutbol[i]);
    }
    for (let i = 6; i < 11; i++) {
      city.agregarJugador(jugadoresFutbol[i]);
    }

    console.log(`📋 ${psg.toString()}: ${psg.listarIntegrantes().join(", ")}`);
    console.log(
      `📋 ${city.toString()}: ${city.listarIntegrantes().join(", ")}`
    );

    console.log("\n🏀 === CREANDO EQUIPOS DE BÁSQUET === 🏀");
    const lakers = new Equipo("team3", "Los Angeles Lakers");
    const warriors = new Equipo("team4", "Golden State Warriors");

    for (let i = 0; i < 3; i++) {
      lakers.agregarJugador(jugadoresBasquet[i]);
    }
    for (let i = 3; i < 6; i++) {
      warriors.agregarJugador(jugadoresBasquet[i]);
    }

    console.log(
      `📋 ${lakers.toString()}: ${lakers.listarIntegrantes().join(", ")}`
    );
    console.log(
      `📋 ${warriors.toString()}: ${warriors.listarIntegrantes().join(", ")}`
    );
    console.log("\n🏅 === VALIDANDO EQUIPOS POR DEPORTE (POLIMORFISMO) === 🏅");
    const futbol = new Futbol();
    const basquet = new Basquet();
    const deportes: Deporte[] = [futbol, basquet];
    const equipos = [psg, city, lakers, warriors];

    deportes.forEach((deporte) => {
      console.log(`\n--- Validaciones para ${deporte.nombre} ---`);
      equipos.forEach((equipo) => {
        deporte.validar(equipo);
      });
    });
    console.log("\n🏆 === CREANDO TORNEO === 🏆");
    const torneoMundial = new Torneo("t1", "Copa Mundial de Clubes");
    const partidoFutbol = new Partido("p1", psg, city, futbol);
    const partidoBasquet = new Partido("p2", lakers, warriors, basquet);
    torneoMundial.programarPartido(partidoFutbol);
    torneoMundial.programarPartido(partidoBasquet);

    console.log(`\n📊 ${torneoMundial.toString()}`);
    console.log("Partidos programados:");
    torneoMundial
      .listarPartidos()
      .forEach((partido) => console.log(`  ${partido}`));
    console.log("\n⚽ === JUGANDO PARTIDOS === ⚽");
    console.log("\n--- Partido de Fútbol ---");
    partidoFutbol.jugar(2, 1);
    console.log("\n--- Partido de Básquet ---");
    partidoBasquet.jugar(108, 112);
    console.log("\n📈 === RESULTADOS FINALES === 📈");
    console.log(`${torneoMundial.toString()}`);
    console.log("\nTodos los partidos:");
    torneoMundial
      .listarPartidos()
      .forEach((partido) => console.log(`  ${partido}`));

    console.log("\n⚠️ === DEMOSTRANDO VALIDACIONES === ⚠️");

    try {
      console.log("Intentando crear partido con el mismo equipo...");
      new Partido("p3", psg, psg, futbol);
    } catch (error) {
      console.log(`❌ Error capturado: ${error}`);
    }

    try {
      console.log("Intentando agregar jugador duplicado...");
      psg.agregarJugador(jugadoresFutbol[0]);
    } catch (error) {
      console.log(`❌ Error capturado: ${error}`);
    }

    try {
      console.log("Intentando jugar partido ya jugado...");
      partidoFutbol.jugar(0, 0);
    } catch (error) {
      console.log(`❌ Error capturado: ${error}`);
    }

    console.log("\n🚫 === PROBANDO VALIDACIÓN DE CUPOS === 🚫");
    const equipoInvalido = new Equipo("invalid", "Equipo con Muchos Jugadores");

    for (let i = 0; i < 6; i++) {
      equipoInvalido.agregarJugador(
        new Jugador(`extra${i}`, `Jugador Extra ${i}`, 25)
      );
    }

    console.log("Validando equipo con 6 jugadores para básquet (máximo 5):");
    basquet.validar(equipoInvalido);

    console.log("\n🎉 === DEMOSTRACIÓN COMPLETADA === 🎉");
  } catch (error) {
    console.error("💥 Error en la ejecución:", error);
  }
}

main();
