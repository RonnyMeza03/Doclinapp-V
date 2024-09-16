import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity({name: 'Pacientes'})
export class Paciente {
    @PrimaryGeneratedColumn()
    private _id: number;

    @Column()
    private _nombre: string;

    @Column()
    private _apellido: string;

    @Column()
    private _edad: number;

    @Column()
    private _sexo: string;

    @Column()
    private _sistolica: number;
    
    @Column()
    private _ldl: number;
    
    @Column()
    private _hdl: number;
    
    @Column()
    private _trigliceridos: number;
    
    @Column()
    private _familiares: string;
    
    @Column()
    private _enfermedades: string;
    
    @Column()
    private _fumar: string;
    
    @Column()
    private _alcohol: string;
    
    @Column()
    private _dieta: string;
    
    @Column()
    private _actividad: number;
    
    @Column()
    private _masa: number;
    
    @Column()
    private _glucosa: number;
    
    @Column()
    private _colesterol: number;
    
    @Column()
    private _diastolica: number;
    
    @Column()
    private _altura: number;
  
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
      this._nombre = nombre;
      this._apellido = apellido;
      this._edad = edad;
      this._sexo = sexo;
      this._sistolica = sistolica;
      this._ldl = ldl;
      this._hdl = hdl;
      this._trigliceridos = trigliceridos;
      this._familiares = familiares;
      this._enfermedades = enfermedades;
      this._fumar = fumar;
      this._alcohol = alcohol;
      this._dieta = dieta;
      this._actividad = actividad;
      this._masa = masa;
      this._glucosa = glucosa;
      this._colesterol = colesterol;
      this._diastolica = diastolica;
      this._altura = altura;
    }
  
    // Métodos get
    get id(): number{
      return this._id;
    }

    get nombre(): string {
      return this._nombre;
    }
  
    get apellido(): string {
      return this._apellido;
    }
  
    get edad(): number {
      return this._edad;
    }
  
    get sexo(): string {
      return this._sexo;
    }
  
    get sistolica(): number {
      return this._sistolica;
    }
  
    get ldl(): number {
      return this._ldl;
    }
  
    get hdl(): number {
      return this._hdl;
    }
  
    get trigliceridos(): number {
      return this._trigliceridos;
    }
  
    get familiares(): string {
      return this._familiares;
    }
  
    get enfermedades(): string {
      return this._enfermedades;
    }
  
    get fumar(): string {
      return this._fumar;
    }
  
    get alcohol(): string {
      return this._alcohol;
    }
  
    get dieta(): string {
      return this._dieta;
    }
  
    get actividad(): number {
      return this._actividad;
    }
  
    get masa(): number {
      return this._masa;
    }
  
    get glucosa(): number {
      return this._glucosa;
    }
  
    get colesterol(): number {
      return this._colesterol;
    }
  
    get diastolica(): number {
      return this._diastolica;
    }
  
    get altura(): number {
      return this._altura;
    }
  
    // Métodos set
    set altura(altura: number) {
      this._altura = altura;
    }
  
    set nombre(nombre: string) {
      this._nombre = nombre;
    }
  
    set apellido(apellido: string) {
      this._apellido = apellido;
    }
  
    set edad(edad: number) {
      this._edad = edad;
    }
  
    set sexo(sexo: string) {
      this._sexo = sexo;
    }
  
    set sistolica(sistolica: number) {
      this._sistolica = sistolica;
    }
  
    set ldl(ldl: number) {
      this._ldl = ldl;
    }
  
    set hdl(hdl: number) {
      this._hdl = hdl;
    }
  
    set trigliceridos(trigliceridos: number) {
      this._trigliceridos = trigliceridos;
    }
  
    set familiares(familiares: string) {
      this._familiares = familiares;
    }
  
    set enfermedades(enfermedades: string) {
      this._enfermedades = enfermedades;
    }
  
    set fumar(fumar: string) {
      this._fumar = fumar;
    }
  
    set alcohol(alcohol: string) {
      this._alcohol = alcohol;
    }
  
    set dieta(dieta: string) {
      this._dieta = dieta;
    }
  
    set actividad(actividad: number) {
      this._actividad = actividad;
    }
  
    set masa(masa: number) {
      this._masa = masa;
    }
  
    set glucosa(glucosa: number) {
      this._glucosa = glucosa;
    }
  
    set colesterol(colesterol: number) {
      this._colesterol = colesterol;
    }
  
    set diastolica(diastolica: number) {
      this._diastolica = diastolica;
    }
  }
