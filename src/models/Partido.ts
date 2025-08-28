import type { IIdentificable } from "../interface/IIdentificable.js";
import { Equipo } from "./Equipo.js";
import { Deporte } from "./Deporte.js";
import { Resultado } from "./Resultado.js";

export class Partido implements IIdentificable {
  public readonly id: string;
  public local: Equipo;
  public visitante: Equipo;
  public deporte: Deporte;
  private _resultado?: Resultado;

  constructor(id: string, local: Equipo, visitante: Equipo, deporte: Deporte) {
    if (local.id === visitante.id) {
      throw new Error("Un equipo no puede jugar contra sí mismo");
    }

    this.id = id;
    this.local = local;
    this.visitante = visitante;
    this.deporte = deporte;
  }

  public get resultado(): Resultado | undefined {
    return this._resultado;
  }

  public get jugado(): boolean {
    return this._resultado !== undefined;
  }

  public jugar(golesLocal: number, golesVisitante: number): boolean {
    if (this.jugado) {
      throw new Error("El partido ya fue jugado");
    }
    if (
      !this.deporte.validar(this.local) ||
      !this.deporte.validar(this.visitante)
    ) {
      console.log(
        `❌ No se puede jugar el partido: uno o ambos equipos no son válidos para ${this.deporte.nombre}`
      );
      return false;
    }

    if (golesLocal < 0 || golesVisitante < 0) {
      throw new Error("Los goles no pueden ser negativos");
    }

    this._resultado = new Resultado(golesLocal, golesVisitante);
    console.log(`⚽ Partido jugado: ${this.toString()}`);
    return true;
  }
  public toString(): string {
    const resultadoStr = this._resultado
      ? ` - Resultado: ${this._resultado.toString()}`
      : " - Sin jugar";
    return `${this.local.nombre} vs ${this.visitante.nombre} (${this.deporte.nombre})${resultadoStr}`;
  }
}
