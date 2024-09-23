import { Aplicacion } from 'src/aplicacion/entities/aplicacion.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'Pacientes' })
export class Paciente {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  private nombre: string;

  @Column()
  private apellido: string;

  @Column()
  private edad: number;

  @Column()
  private sexo: string;

  @Column()
  private sistolica: number;

  @Column()
  private ldl: number;

  @Column()
  private hdl: number;

  @Column()
  private trigliceridos: number;

  @Column()
  private familiares: string;

  @Column()
  private enfermedades: string;

  @Column()
  private fumar: string;

  @Column()
  private alcohol: string;

  @Column()
  private dieta: string;

  @Column()
  private actividad: number;

  @Column()
  private masa: number;

  @Column()
  private glucosa: number;

  @Column()
  private colesterol: number;

  @Column()
  private diastolica: number;

  @Column()
  private altura: number;

  @ManyToOne(() => Aplicacion, Aplicacion => Aplicacion.getNombre, { eager: true })
  @JoinColumn({ name: 'aplicacionID' })
  public nombreAplicacion: Aplicacion;


  @Column()
  aplicacionID: number;

  constructor(
    nombre: string,
    apellido: string,
    edad: number,
    sexo: string,
    sistolica: number,
    ldl: number,
    hdl: number,
    trigliceridos: number,
    familiares: string,
    enfermedades: string,
    fumar: string,
    alcohol: string,
    dieta: string,
    actividad: number,
    masa: number,
    glucosa: number,
    colesterol: number,
    diastolica: number,
    altura: number
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.sexo = sexo;
    this.sistolica = sistolica;
    this.ldl = ldl;
    this.hdl = hdl;
    this.trigliceridos = trigliceridos;
    this.familiares = familiares;
    this.enfermedades = enfermedades;
    this.fumar = fumar;
    this.alcohol = alcohol;
    this.dieta = dieta;
    this.actividad = actividad;
    this.masa = masa;
    this.glucosa = glucosa;
    this.colesterol = colesterol;
    this.diastolica = diastolica;
    this.altura = altura;
  }

  // Métodos get
  getId(): number {
    return this.id;
  }

  getNombre(): string {
    return this.nombre;
  }

  getApellido(): string {
    return this.apellido;
  }

  getEdad(): number {
    return this.edad;
  }

  getSexo(): string {
    return this.sexo;
  }

  getSistolica(): number {
    return this.sistolica;
  }

  getLdl(): number {
    return this.ldl;
  }

  getHdl(): number {
    return this.hdl;
  }

  getTrigliceridos(): number {
    return this.trigliceridos;
  }

  getFamiliares(): string {
    return this.familiares;
  }

  getEnfermedades(): string {
    return this.enfermedades;
  }

  getFumar(): string {
    return this.fumar;
  }

  getAlcohol(): string {
    return this.alcohol;
  }

  getDieta(): string {
    return this.dieta;
  }

  getActividad(): number {
    return this.actividad;
  }

  getMasa(): number {
    return this.masa;
  }

  getGlucosa(): number {
    return this.glucosa;
  }

  getColesterol(): number {
    return this.colesterol;
  }

  getDiastolica(): number {
    return this.diastolica;
  }

  getAltura(): number {
    return this.altura;
  }

  // Métodos set
  setAltura(altura: number) {
    this.altura = altura;
  }

  setNombre(nombre: string) {
    this.nombre = nombre;
  }

  setApellido(apellido: string) {
    this.apellido = apellido;
  }

  setEdad(edad: number) {
    this.edad = edad;
  }

  setSexo(sexo: string) {
    this.sexo = sexo;
  }

  setSistolica(sistolica: number) {
    this.sistolica = sistolica;
  }

  setLdl(ldl: number) {
    this.ldl = ldl;
  }

  setHdl(hdl: number) {
    this.hdl = hdl;
  }

  setTrigliceridos(trigliceridos: number) {
    this.trigliceridos = trigliceridos;
  }

  setFamiliares(familiares: string) {
    this.familiares = familiares;
  }

  setEnfermedades(enfermedades: string) {
    this.enfermedades = enfermedades;
  }

  setFumar(fumar: string) {
    this.fumar = fumar;
  }

  setAlcohol(alcohol: string) {
    this.alcohol = alcohol;
  }

  setDieta(dieta: string) {
    this.dieta = dieta;
  }

  setActividad(actividad: number) {
    this.actividad = actividad;
  }

  setMasa(masa: number) {
    this.masa = masa;
  }

  setGlucosa(glucosa: number) {
    this.glucosa = glucosa;
  }

  setColesterol(colesterol: number) {
    this.colesterol = colesterol;
  }

  setDiastolica(diastolica: number) {
    this.diastolica = diastolica;
  }
}
