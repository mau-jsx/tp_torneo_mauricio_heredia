import type { ICompetidor } from "../interface/Competidor.js";
import { Jugador } from "./Jugador.js";

export class Equipo implements ICompetidor {
  public readonly id: string;
  public nombre: string;
  private jugadores: Jugador[] = [];

  constructor(id: string, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }
  public get cantidad(): number {
    return this.jugadores.length;
  }
  public agregarJugador(jugador: Jugador): boolean {
    // Validar que no exista un jugador con el mismo id
    if (this.jugadores.some((j) => j.id === jugador.id)) {
      throw new Error(`El jugador con id ${jugador.id} ya existe en el equipo`);
    }

    this.jugadores.push(jugador);
    return true;
  }

  public listarIntegrantes(): string[] {
    return this.jugadores.map((jugador) => jugador.nombre);
  }

  public obtenerJugadores(): readonly Jugador[] {
    return [...this.jugadores];
  }

  public toString(): string {
    return `${this.nombre} (${this.cantidad} jugadores)`;
  }
}
