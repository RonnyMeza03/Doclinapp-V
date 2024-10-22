import { Usuarios } from 'src/usuarios/entities/usuario.entity';

export class CreatePerfilDto {
  readonly rol: string;
  readonly premium: boolean;
  readonly idAuth0: string;
  usuario?: Usuarios;
}
