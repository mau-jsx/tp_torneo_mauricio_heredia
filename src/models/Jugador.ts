import type { IIdentificable } from "../interface/IIdentificable";

export class Jugador implements IIdentificable {
  public readonly id: string;
  public nombre: string;
  public edad: number;
  public posicion?: string;

  constructor(id: string, nombre: string, edad: number, posicion?: string) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.posicion = posicion;
  }

  public toString(): string {
    const pos = this.posicion ? ` (${this.posicion})` : "";
    return `${this.nombre}${pos} - ${this.edad} años`;
  }
}
