import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Aplicacion } from './../../aplicacion/entities/aplicacion.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  TableInheritance,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'Usuarios' })
@TableInheritance({
  column: {
    type: 'varchar',
    name: 'tipo',
  },
})
export abstract class Usuarios {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public nombreUsuario: string;

  @Column()
  public nombre: string;

  @Column()
  public apellido: string;

  @Column()
  public contrasena: string;

  @Column()
  public correo: string;

  @Column()
  public telefono: number;

  @Column()
  public rol: string;

  @Column()
  public fechaNacimiento: Date;

  // Relación ManyToOne con Aplicacion
  @ManyToOne(() => Aplicacion, (Aplicacion) => Aplicacion.getNombre, {
    eager: true,
  })
  @JoinColumn({ name: 'aplicacionID' })
  public nombreAplicacion: Aplicacion;

  @Column()
  public aplicacionID: number;

  @OneToMany(() => Paciente, (Paciente) => Paciente.usuarioID)
  public pacientes: Paciente[];

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: Date;

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
    this.nombreUsuario = nombreUsuario;
    this.nombre = nombre;
    this.apellido = apellido;
    this.contrasena = contrasena;
    this.correo = correo;
    this.telefono = telefono;
    this.rol = rol;
    this.fechaNacimiento = fechaNacimiento;
    this.nombreAplicacion = this.nombreAplicacion;
  }

  // Métodos GET
  public getId(): number {
    return this.id;
  }

  public getNombreUsuario(): string {
    return this.nombreUsuario;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getApellido(): string {
    return this.apellido;
  }

  public getContrasena(): string {
    return this.contrasena;
  }

  public getCorreo(): string {
    return this.correo;
  }

  public getTelefono(): number {
    return this.telefono;
  }

  public getRol(): string {
    return this.rol;
  }

  public getFechaNacimiento(): Date {
    return this.fechaNacimiento;
  }

  public getNombreAplicacion(): Aplicacion {
    return this.nombreAplicacion;
  }

  // Métodos SET
  public setId(id: number): void {
    this.id = id;
  }

  public setNombreUsuario(nombreUsuario: string): void {
    this.nombreUsuario = nombreUsuario;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public setApellido(apellido: string): void {
    this.apellido = apellido;
  }

  public setContrasena(contrasena: string): void {
    this.contrasena = contrasena;
  }

  public setCorreo(correo: string): void {
    this.correo = correo;
  }

  public setTelefono(telefono: number): void {
    this.telefono = telefono;
  }

  public setRol(rol: string): void {
    this.rol = rol;
  }

  public setFechaNacimiento(fechaNacimiento: Date): void {
    this.fechaNacimiento = fechaNacimiento;
  }

  public setNombreAplicacion(nombreAplicacion: Aplicacion): void {
    this.nombreAplicacion = nombreAplicacion;
  }
}
