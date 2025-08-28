import type { IIdentificable } from "../interface/IIdentificable.js";
import { Partido } from "./Partido.js";

export class Torneo implements IIdentificable {
  public readonly id: string;
  public nombre: string;
  private partidos: Partido[] = [];

  constructor(id: string, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  public get cantidadPartidos(): number {
    return this.partidos.length;
  }

  public programarPartido(partido: Partido): boolean {
    if (this.partidos.some((p) => p.id === partido.id)) {
      throw new Error(`Ya existe un partido con id ${partido.id} en el torneo`);
    }

    this.partidos.push(partido);
    console.log(
      `📅 Partido programado en ${this.nombre}: ${partido.toString()}`
    );
    return true;
  }

  public listarPartidos(): string[] {
    if (this.partidos.length === 0) {
      return ["No hay partidos programados"];
    }

    return this.partidos.map(
      (partido, index) => `${index + 1}. ${partido.toString()}`
    );
  }

  public buscarPartido(id: string): Partido | undefined {
    return this.partidos.find((partido) => partido.id === id);
  }

  public obtenerPartidosJugados(): Partido[] {
    return this.partidos.filter((partido) => partido.jugado);
  }

  public obtenerPartidosPendientes(): Partido[] {
    return this.partidos.filter((partido) => !partido.jugado);
  }

  public toString(): string {
    const jugados = this.obtenerPartidosJugados().length;
    const pendientes = this.obtenerPartidosPendientes().length;
    return `Torneo: ${this.nombre} (${jugados} jugados, ${pendientes} pendientes)`;
  }
}
