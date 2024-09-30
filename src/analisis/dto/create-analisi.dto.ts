export class CreateAnalisiDto {
  readonly sistolica: number;
  readonly ldl: number;
  readonly hdl: number;
  readonly triglicerios: number;
  readonly familiar: string;
  readonly enfermedades: Array<string>;
  readonly habitoFumar: string;
  readonly habitoAlcohol: string;
  readonly habitoDieta: string;
  readonly horasActividadSemanal: number;
  readonly masaCorporalKg: number;
  readonly glucosa: number;
  readonly colesterol: number;
  readonly diastolica: number;
  readonly cmAltura: number;
  readonly pacienteID: number;
}
