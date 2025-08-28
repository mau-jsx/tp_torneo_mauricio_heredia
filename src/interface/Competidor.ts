import type { IIdentificable } from "./IIdentificable";

export interface ICompetidor extends IIdentificable {
  nombre: string;
  listarIntegrantes(): string[];
}
