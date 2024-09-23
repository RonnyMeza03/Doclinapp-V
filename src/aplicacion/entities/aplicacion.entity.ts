import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Usuarios } from 'src/usuarios/entities/usuario.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({name:'Aplicacion'})
export class Aplicacion {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public nombre: string;

    @Column({unique:true})
    private nombreClinica: string;

    @Column()
    private correo: string;

    @Column()
    private direccion: string;

    @Column()
    private pais: string;

    @OneToMany(() => Usuarios, Usuarios => Usuarios.getNombreUsuario)
    usuarios: Usuarios[]

    @OneToMany(() => Paciente, Paciente => Paciente.aplicacionID)
    paciente: Paciente[]

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
  
    constructor(
      nombre: string,
      nombreClinica: string,
      correo: string,
      direccion: string,
      pais: string
    ) {
      this.nombre = nombre;
      this.nombreClinica = nombreClinica;
      this.correo = correo;
      this.direccion = direccion;
      this.pais = pais;
    }
  
    // Métodos GET
    public getId(): number {
      return this.id;
    }
  
    public getNombre(): string {
      return this.nombre;
    }
  
    public getNombreClinica(): string {
      return this.nombreClinica;
    }
  
    public getCorreo(): string {
      return this.correo;
    }
  
    public getDireccion(): string {
      return this.direccion;
    }
  
    public getPais(): string {
      return this.pais;
    }
  
    // Métodos SET
    public setId(id: number): void {
      this.id = id;
    }
  
    public setNombre(nombre: string): void {
      this.nombre = nombre;
    }
  
    public setNombreClinica(nombreClinica: string): void {
      this.nombreClinica = nombreClinica;
    }
  
    public setCorreo(correo: string): void {
      this.correo = correo;
    }
  
    public setDireccion(direccion: string): void {
      this.direccion = direccion;
    }
  
    public setPais(pais: string): void {
      this.pais = pais;
    }
  }
  