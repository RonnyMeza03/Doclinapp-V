import { Usuarios } from 'src/usuarios/entities/usuario.entity';
import { Entity, ChildEntity } from 'typeorm';

@Entity({ name: 'administradores' })
@ChildEntity()
export class Admin extends Usuarios {
  constructor(
    nombreUsuario: string,
    nombre: string,
    apellido: string,
    contrasena: string,
    correo: string,
    telefono: number,
    rol: string,
    fechaNacimiento: Date,
  ) {
    // Llamamos al constructor de la clase padre (Usuarios)
    super(
      nombreUsuario,
      nombre,
      apellido,
      contrasena,
      correo,
      telefono,
      rol,
      fechaNacimiento,
    );
  }

  // Puedes agregar métodos adicionales específicos para Admin si lo deseas.
}
