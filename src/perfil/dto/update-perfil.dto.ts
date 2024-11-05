import { PartialType } from '@nestjs/mapped-types';
import { CreatePerfilDto } from './create-perfil.dto';

export class UpdatePerfilDto extends PartialType(CreatePerfilDto) {
  readonly rol?: string;
  readonly premium?: boolean;
  readonly nombreUsuarioId?: number;
  readonly idAuth0?: string;
}
