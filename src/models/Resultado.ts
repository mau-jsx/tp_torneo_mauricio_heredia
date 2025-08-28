export class Resultado {
  public golesLocal: number;
  public golesVisitante: number;

  constructor(golesLocal: number, golesVisitante: number) {
    this.golesLocal = golesLocal;
    this.golesVisitante = golesVisitante;
  }

  public obtenerGanador(): "local" | "visitante" | "empate" {
    if (this.golesLocal > this.golesVisitante) return "local";
    if (this.golesVisitante > this.golesLocal) return "visitante";
    return "empate";
  }

  public toString(): string {
    return `${this.golesLocal} - ${this.golesVisitante}`;
  }
}
