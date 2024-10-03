import { Analisi } from 'src/analisis/entities/analisi.entity';
import { Aplicacion } from 'src/aplicacion/entities/aplicacion.entity';
import { Usuarios } from 'src/usuarios/entities/usuario.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'Pacientes' })
export class Paciente {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  private nombre: string;

  @Column()
  private apellido: string;

  @Column({ nullable: true })
  private fechaNacimiento: Date | null;

  @Column()
  private sexo: string;

  @Column()
  private direccion: string;

  @Column()
  private telefono: string;

  @Column()
  private correo: string;

  @ManyToOne(() => Aplicacion, (Aplicacion) => Aplicacion.getNombre, {
    eager: true,
  })
  @JoinColumn({ name: 'aplicacionID' })
  public nombreAplicacion: Aplicacion;

  @Column()
  public aplicacionID: number;

  @ManyToOne(() => Usuarios, (usuario) => usuario.pacientes, { eager: true })
  @JoinColumn({ name: 'usuarioID' })
  public usuario: Usuarios;

  @Column()
  usuarioID: number;

  @OneToMany(() => Analisi, (Analisi) => Analisi.pacienteID)
  public analisis: Analisi[];

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: Date;

  constructor(
    nombre: string,
    apellido: string,
    fechaNacimiento: Date,
    sexo: string,
    direccion: string,
    telefono: string,
    correo: string,
    aplicacionID: number,
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.sexo = sexo;
    this.direccion = direccion;
    this.telefono = telefono;
    this.correo = correo;
    this.aplicacionID = aplicacionID;
  }

  // Métodos GET y SET

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public getApellido(): string {
    return this.apellido;
  }

  public setApellido(apellido: string): void {
    this.apellido = apellido;
  }

  public getFechaNacimiento(): Date {
    return this.fechaNacimiento;
  }

  public setFechaNacimiento(fechaNacimiento: Date): void {
    this.fechaNacimiento = fechaNacimiento;
  }

  public getSexo(): string {
    return this.sexo;
  }

  public setSexo(sexo: string): void {
    this.sexo = sexo;
  }

  public getDireccion(): string {
    return this.direccion;
  }

  public setDireccion(direccion: string): void {
    this.direccion = direccion;
  }

  public getTelefono(): string {
    return this.telefono;
  }

  public setTelefono(telefono: string): void {
    this.telefono = telefono;
  }

  public getCorreo(): string {
    return this.correo;
  }

  public setCorreo(correo: string): void {
    this.correo = correo;
  }

  public getAplicacionID(): number {
    return this.aplicacionID;
  }

  public setAplicacionID(aplicacionID: number): void {
    this.aplicacionID = aplicacionID;
  }
}
