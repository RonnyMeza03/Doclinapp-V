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

  // false= 0 true= 1
  @Column('tinyint', { width: 1, default: 0 })
  private premium: boolean;

  @OneToOne(() => Usuarios, (usuario) => usuario.perfil, {
    eager: true,
    nullable: false,
  })
  @JoinColumn({ name: 'usuarioId' })
  public usuario: Usuarios;

  constructor(rol: string, premium: boolean, usuario: Usuarios) {
    this.rol = rol;
    this.premium = premium;
    this.usuario = usuario;
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

  // Getter and Setter for usuario
  public getUsuario(): Usuarios {
    return this.usuario;
  }

  public setUsuario(usuario: Usuarios): void {
    this.usuario = usuario;
  }
}
