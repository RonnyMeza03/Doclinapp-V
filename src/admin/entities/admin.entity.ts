import { Usuarios } from 'src/usuarios/entities/usuario.entity';
import { Entity, ChildEntity } from 'typeorm';

@Entity({ name: 'administradores' })
@ChildEntity()
export class Admin extends Usuarios {
  constructor(
    name: string,
    nickname: string,
    sub: string,
    email: string,
    email_verified: boolean,
    family_name: string,
    given_name: string,
    picture: string,
    aplicacionID: number,
  ) {
    // Llamamos al constructor de la clase padre (Usuarios)
    super(
      name,
      nickname,
      sub,
      email,
      email_verified,
      family_name,
      given_name,
      picture,
      aplicacionID,
    );
  }

  // Puedes agregar métodos adicionales específicos para Admin si lo deseas.
}
