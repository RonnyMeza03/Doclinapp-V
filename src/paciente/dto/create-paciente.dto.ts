export class CreatePacienteDto {
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  sexo: string;
  direccion: string;
  telefono: string;
  correo: string;
  aplicacionID?: number;
  idAuth0: string;
  usuarioID: number;
  /*
      sistolica: number
      ldl: number
      hdl: number
      trigliceridos: number
      familiares: string
      enfermedades: string
      fumar: string
      alcohol: string
      dieta: string
      actividad: number
      masa: number
      glucosa: number
      colesterol: number
      diastolica: number
      altura: number
      */
}
