import { PartialType } from '@nestjs/mapped-types';
import { CreateAplicacionDto } from './create-aplicacion.dto';

export class UpdateAplicacionDto extends PartialType(CreateAplicacionDto) {
    nombre?: string
    nombreClinica?: string
    correo?: string
    direccion?: string
    pais?: string
}
