import { Deporte } from "./Deporte.js";
import { Equipo } from "./Equipo.js";

export class Basquet extends Deporte {
  constructor() {
    super("Básquet", 5);
  }

  public validar(equipo: Equipo): boolean {
    const cantidadJugadores = equipo.cantidad;

    if (cantidadJugadores === 0) {
      console.log(`❌ El equipo ${equipo.nombre} no tiene jugadores`);
      return false;
    }

    if (cantidadJugadores > this.maxPorEquipo) {
      console.log(
        `❌ El equipo ${equipo.nombre} tiene ${cantidadJugadores} jugadores, máximo permitido: ${this.maxPorEquipo}`
      );
      return false;
    }

    console.log(
      `✅ El equipo ${equipo.nombre} es válido para ${this.nombre} (${cantidadJugadores}/${this.maxPorEquipo} jugadores)`
    );
    return true;
  }
}
