import { Equipo } from "./Equipo.js";
export abstract class Deporte {
  public nombre: string;
  public maxPorEquipo: number;

  constructor(nombre: string, maxPorEquipo: number) {
    this.nombre = nombre;
    this.maxPorEquipo = maxPorEquipo;
  }
  public abstract validar(equipo: Equipo): boolean;

  public toString(): string {
    return `${this.nombre} (máximo ${this.maxPorEquipo} jugadores por equipo)`;
  }
}
