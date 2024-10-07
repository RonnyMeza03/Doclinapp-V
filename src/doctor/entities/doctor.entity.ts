import { Usuarios } from 'src/usuarios/entities/usuario.entity';
import { Entity, ChildEntity, Column } from 'typeorm';

@Entity({ name: 'Doctores' })
@ChildEntity()
export class Doctor extends Usuarios {
  @Column()
  private especialidad: string;

  @Column()
  private clinicaAfiliada: string;

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
    especialidad: string,
    clinicaAfiliada: string,
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
    this.especialidad = especialidad;
    this.clinicaAfiliada = clinicaAfiliada;
  }

  // Métodos GET para los atributos propios
  public getEspecialidad(): string {
    return this.especialidad;
  }

  public getClinicaAfiliada(): string {
    return this.clinicaAfiliada;
  }

  // Métodos SET para los atributos propios
  public setEspecialidad(especialidad: string): void {
    this.especialidad = especialidad;
  }

  public setClinicaAfiliada(clinicaAfiliada: string): void {
    this.clinicaAfiliada = clinicaAfiliada;
  }
}
