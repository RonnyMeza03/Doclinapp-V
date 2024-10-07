import { Aplicacion } from 'src/aplicacion/entities/aplicacion.entity';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  TableInheritance,
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
  id: number;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @Column()
  sub: string;

  @Column()
  email: string;

  @Column()
  email_verified: boolean;

  @Column()
  family_name: string;

  @Column()
  given_name: string;

  @Column()
  picture: string;

  // Relación ManyToOne con Aplicacion
  @ManyToOne(() => Aplicacion, (aplicacion) => aplicacion.getNombre, {
    eager: true,
  })
  @JoinColumn({ name: 'aplicacionID' })
  public nombreAplicacion: Aplicacion;

  @Column()
  public aplicacionID: number;

  // Relación OneToMany con Paciente
  @OneToMany(() => Paciente, (paciente) => paciente.usuarioID)
  public pacientes: Paciente[];

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: Date;

  // Constructor
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
    this.name = name;
    this.nickname = nickname;
    this.sub = sub;
    this.email = email;
    this.email_verified = email_verified;
    this.family_name = family_name;
    this.given_name = given_name;
    this.picture = picture;
    this.aplicacionID = aplicacionID;
  }

  // Getters y setters
  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getNickname(): string {
    return this.nickname;
  }

  public setNickname(nickname: string): void {
    this.nickname = nickname;
  }

  public getSub(): string {
    return this.sub;
  }

  public setSub(sub: string): void {
    this.sub = sub;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getEmailVerified(): boolean {
    return this.email_verified;
  }

  public setEmailVerified(email_verified: boolean): void {
    this.email_verified = email_verified;
  }

  public getFamilyName(): string {
    return this.family_name;
  }

  public setFamilyName(family_name: string): void {
    this.family_name = family_name;
  }

  public getGivenName(): string {
    return this.given_name;
  }

  public setGivenName(given_name: string): void {
    this.given_name = given_name;
  }

  public getPicture(): string {
    return this.picture;
  }

  public setPicture(picture: string): void {
    this.picture = picture;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }
}
