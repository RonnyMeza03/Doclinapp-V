import { PartialType } from '@nestjs/mapped-types';
import { CreatePacienteDto } from './create-paciente.dto';

export class UpdatePacienteDto extends PartialType(CreatePacienteDto) {
    nombre?: string
    apellido?: string
    edad?: number
    sexo?: string
    sistolica?: number
    ldl?: number
    hdl?: number
    trigliceridos?: number
    familiares?: string
    enfermedades?: string
    fumar?: string
    alcohol?: string
    dieta?: string
    actividad?: number
    masa?: number
    glucosa?: number
    colesterol?: number
    diastolica?: number
    altura?: number
    aplicacionID?: number
}
