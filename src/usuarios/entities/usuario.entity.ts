import { Aplicacion } from './../../aplicacion/entities/aplicacion.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, TableInheritance } from 'typeorm';

@Entity({name: 'Usuarios'})
@TableInheritance({
  column: {
    type: 'varchar',
    name: 'tipo',
  },
})
export abstract class Usuarios {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({unique: true})
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
  @ManyToOne(() => Aplicacion, Aplicacion => Aplicacion.getId)
  @JoinColumn({ name: 'aplicacion_id' }) 
  public aplicacionID: Aplicacion;

  @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
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
    aplicacionID: Aplicacion
  ) {
    this.nombreUsuario = nombreUsuario;
    this.nombre = nombre;
    this.apellido = apellido;
    this.contrasena = contrasena;
    this.correo = correo;
    this.telefono = telefono;
    this.rol = rol;
    this.fechaNacimiento = fechaNacimiento;
    this.aplicacionID = aplicacionID;
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

  public getAplicacionID(): Aplicacion {
    return this.aplicacionID;
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

  public setAplicacionID(aplicacionID: Aplicacion): void {
    this.aplicacionID = aplicacionID;
  }
}
