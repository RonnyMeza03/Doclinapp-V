import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  nombreUsuario?: string;
  nombre?: string;
  apellido?: string;
  contrasena?: string;
  correo?: string;
  telefono?: number;
  rol?: string;
  fechaNacimiento?: Date;
  aplicacionID?: number;
}
