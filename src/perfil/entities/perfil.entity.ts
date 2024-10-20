import { Usuarios } from 'src/usuarios/entities/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'perfil' })
export class Perfil {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true })
  private rol: string;

  @Column()
  private premium: boolean;

  @OneToOne(() => Usuarios, (usuario) => usuario.name, {
    eager: true,
  })
  @JoinColumn()
  public nombreUsuario: Usuarios;

  @Column()
  public usuarioId: number;

  constructor(
    rol: string,
    premium: boolean,
    nombreUsuario: Usuarios,
    usuarioId: number,
  ) {
    this.rol = rol;
    this.premium = premium;
    this.nombreUsuario = nombreUsuario;
    this.usuarioId = usuarioId;
  }

  // Getter and Setter for rol
  public getRol(): string {
    return this.rol;
  }

  public setRol(rol: string): void {
    this.rol = rol;
  }

  // Getter and Setter for premium
  public isPremium(): boolean {
    return this.premium;
  }

  public setPremium(premium: boolean): void {
    this.premium = premium;
  }

  // Getter and Setter for nombreUsuario
  public getNombreUsuario(): Usuarios {
    return this.nombreUsuario;
  }

  public setNombreUsuario(nombreUsuario: Usuarios): void {
    this.nombreUsuario = nombreUsuario;
  }

  // Getter and Setter for usuarioId
  public getUsuarioId(): number {
    return this.usuarioId;
  }

  public setUsuarioId(usuarioId: number): void {
    this.usuarioId = usuarioId;
  }
}
