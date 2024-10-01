import { Paciente } from 'src/paciente/entities/paciente.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Analisis' })
export class Analisi {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  private sistolica: number;

  @Column()
  private ldl: number;

  @Column()
  private hdl: number;

  @Column()
  private triglicerios: number;

  @Column()
  private familiar: string;

  // Usa simple-array o simple-json para almacenar arrays
  @Column('simple-array')
  private enfermedades: string[];

  @Column()
  private habitoFumar: string;

  @Column()
  private habitoAlcohol: string;

  @Column()
  private habitoDieta: string;

  @Column()
  private horasActividadSemanal: number;

  @Column()
  private masaCorporalKg: number;

  @Column()
  private glucosa: number;

  @Column()
  private colesterol: number;

  @Column()
  private diastolica: number;

  @Column()
  private cmAltura: number;

  @Column()
  private analisisHipertension: number;

  @Column()
  private analisisHiperlipidemia: number;

  @Column()
  private analisisCoronaria: number;

  @Column()
  private analisisCongenita: number;

  @Column()
  private analisisCerebrovascular: number;

  @Column()
  private analisisDiabetes2: number;

  @Column()
  private analisisArterial: number;

  @ManyToOne(() => Paciente, (Paciente) => Paciente.getNombre, { eager: true })
  @JoinColumn({ name: 'pacienteID' })
  public paciente: Paciente;

  @Column()
  public pacienteID: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  constructor(
    sistolica: number,
    ldl: number,
    hdl: number,
    triglicerios: number,
    familiar: string,
    enfermedades: Array<string>,
    habitoFumar: string,
    habitoAlcohol: string,
    habitoDieta: string,
    horasActividadSemanal: number,
    masaCorporalKg: number,
    glucosa: number,
    colesterol: number,
    diastolica: number,
    cmAltura: number,
    pacienteID: number,
    // el signo '?' indica que el parametro es opcional
    analisisHipertension?: number,
    analisisHiperlipidemia?: number,
    analisisCoronaria?: number,
    analsisCongenita?: number,
    analisisCerebrovascular?: number,
    analisisDiabetes2?: number,
    analisisArterial?: number,
  ) {
    this.sistolica = sistolica;
    this.ldl = ldl;
    this.hdl = hdl;
    this.triglicerios = triglicerios;
    this.familiar = familiar;
    this.enfermedades = enfermedades;
    this.habitoFumar = habitoFumar;
    this.habitoAlcohol = habitoAlcohol;
    this.habitoDieta = habitoDieta;
    this.horasActividadSemanal = horasActividadSemanal;
    this.masaCorporalKg = masaCorporalKg;
    this.glucosa = glucosa;
    this.colesterol = colesterol;
    this.diastolica = diastolica;
    this.cmAltura = cmAltura;
    this.pacienteID = pacienteID;
    //                                       Indica que el valor es = 0
    this.analisisHipertension = analisisHipertension ?? 0;
    this.analisisHiperlipidemia = analisisHiperlipidemia ?? 0;
    this.analisisCoronaria = analisisCoronaria ?? 0;
    this.analisisCongenita = analsisCongenita ?? 0;
    this.analisisCerebrovascular = analisisCerebrovascular ?? 0;
    this.analisisDiabetes2 = analisisDiabetes2 ?? 0;
    this.analisisArterial = analisisArterial ?? 0;
  }

  // Getters and Setters
  public getSistolica(): number {
    return this.sistolica;
  }

  public setSistolica(value: number): void {
    this.sistolica = value;
  }

  public getLdl(): number {
    return this.ldl;
  }

  public setLdl(value: number): void {
    this.ldl = value;
  }

  public getHdl(): number {
    return this.hdl;
  }

  public setHdl(value: number): void {
    this.hdl = value;
  }

  public getTriglicerios(): number {
    return this.triglicerios;
  }

  public setTriglicerios(value: number): void {
    this.triglicerios = value;
  }

  public getFamiliar(): string {
    return this.familiar;
  }

  public setFamiliar(value: string): void {
    this.familiar = value;
  }

  public getEnfermedades(): Array<string> {
    return this.enfermedades;
  }

  public setEnfermedades(value: Array<string>): void {
    this.enfermedades = value;
  }

  public getHabitoFumar(): string {
    return this.habitoFumar;
  }

  public setHabitoFumar(value: string): void {
    this.habitoFumar = value;
  }

  public getHabitoAlcohol(): string {
    return this.habitoAlcohol;
  }

  public setHabitoAlcohol(value: string): void {
    this.habitoAlcohol = value;
  }

  public getHabitoDieta(): string {
    return this.habitoDieta;
  }

  public setHabitoDieta(value: string): void {
    this.habitoDieta = value;
  }

  public getHorasActividadSemanal(): number {
    return this.horasActividadSemanal;
  }

  public setHorasActividadSemanal(value: number): void {
    this.horasActividadSemanal = value;
  }

  public getMasaCorporalKg(): number {
    return this.masaCorporalKg;
  }

  public setMasaCorporalKg(value: number): void {
    this.masaCorporalKg = value;
  }

  public getGlucosa(): number {
    return this.glucosa;
  }

  public setGlucosa(value: number): void {
    this.glucosa = value;
  }

  public getColesterol(): number {
    return this.colesterol;
  }

  public setColesterol(value: number): void {
    this.colesterol = value;
  }

  public getDiastolica(): number {
    return this.diastolica;
  }

  public setDiastolica(value: number): void {
    this.diastolica = value;
  }

  public getCmAltura(): number {
    return this.cmAltura;
  }

  public setCmAltura(value: number): void {
    this.cmAltura = value;
  }

  public getAnalisisHipertension(): number {
    return this.analisisHipertension;
  }

  public setAnalisisHipertension(value: number): void {
    this.analisisHipertension = value;
  }

  public getAnalisisHiperlipidemia(): number {
    return this.analisisHiperlipidemia;
  }

  public setAnalisisHiperlipidemia(value: number): void {
    this.analisisHiperlipidemia = value;
  }

  public getAnalisisCoronaria(): number {
    return this.analisisCoronaria;
  }

  public setAnalisisCoronaria(value: number): void {
    this.analisisCoronaria = value;
  }

  public getAnalisisCongenita(): number {
    return this.analisisCongenita;
  }

  public setAnalisisCongenita(value: number): void {
    this.analisisCongenita = value;
  }

  public getAnalisisCerebrovascular(): number {
    return this.analisisCerebrovascular;
  }

  public setAnalisisCerebrovascular(value: number): void {
    this.analisisCerebrovascular = value;
  }

  public getAnalisisDiabetes2(): number {
    return this.analisisDiabetes2;
  }

  public setAnalisisDiabetes2(value: number): void {
    this.analisisDiabetes2 = value;
  }

  public getAnalisisArterial(): number {
    return this.analisisArterial;
  }

  public setAnalisisArterial(value: number): void {
    this.analisisArterial = value;
  }

  public getPacienteId(): number {
    return this.pacienteID;
  }

  public setPacienteId(value: number): void {
    this.pacienteID = value;
  }
}
