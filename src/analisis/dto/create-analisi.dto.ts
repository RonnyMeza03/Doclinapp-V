export class CreateAnalisiDto {
  sistolica: number;
  ldl: number;
  hdl: number;
  triglicerios: number;
  familiar: string;
  enfermedades: Array<string>;
  habitoFumar: string;
  habitoAlcohol: string;
  habitoDieta: string;
  horasActividadSemanal: number;
  masaCorporalKg: number;
  glucosa: number;
  colesterol: number;
  diastolica: number;
  cmAltura: number;
  pacienteID: number;
  createdAt?: string;
}
