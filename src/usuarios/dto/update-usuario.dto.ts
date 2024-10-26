import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { Aplicacion } from 'src/aplicacion/entities/aplicacion.entity';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  email?: string;
  email_verified?: boolean;
  family_name?: string;
  given_name?: string;
  name?: string;
  nickname?: string;
  picture?: string;
  sub?: string;
  aplicacionID?: number;
  nombreAplicacion?: Aplicacion;
}
