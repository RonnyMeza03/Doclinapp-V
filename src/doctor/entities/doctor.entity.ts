import { Aplicacion } from "src/aplicacion/entities/aplicacion.entity";
import { Usuarios } from "src/usuarios/entities/usuario.entity";
import { Entity, ChildEntity, Column } from "typeorm";

@Entity({name: 'Doctores'})
@ChildEntity()
export class Doctor extends Usuarios {
    @Column()
    private especialidad: string;

    @Column()
    private clinicaAfiliada: string;
  
    constructor(
      nombreUsuario: string,
      nombre: string,
      apellido: string,
      contrasena: string,
      correo: string,
      telefono: number,
      rol: string,
      fechaNacimiento: Date,
      aplicacionID: Aplicacion,
      especialidad: string,
      clinicaAfiliada: string
    ) {
      // Llamamos al constructor de la clase padre (Usuarios)
      super(nombreUsuario, nombre, apellido, contrasena, correo, telefono, rol, fechaNacimiento, aplicacionID);
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
  
