import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Analisi {
  @Prop({ unique: true })
  public id: number;

  @Prop()
  private sistolica: number;

  @Prop()
  private ldl: number;

  @Prop()
  private hdl: number;

  @Prop()
  private triglicerios: number;

  @Prop()
  private familiar: string;

  // Usa simple-array o simple-json para almacenar arrays
  @Prop()
  private enfermedades: string[];

  @Prop()
  private habitoFumar: string;

  @Prop()
  private habitoAlcohol: string;

  @Prop()
  private habitoDieta: string;

  @Prop()
  private horasActividadSemanal: number;

  @Prop()
  private masaCorporalKg: number;

  @Prop()
  private glucosa: number;

  @Prop()
  private colesterol: number;

  @Prop()
  private diastolica: number;

  @Prop()
  private cmAltura: number;

  @Prop()
  private edad: number;

  @Prop()
  private analisisHipertension: number;

  @Prop()
  private analisisHiperlipidemia: number;

  @Prop()
  private analisisCoronaria: number;

  @Prop()
  private analisisCongenita: number;

  @Prop()
  private analisisCerebrovascular: number;

  @Prop()
  private analisisDiabetes2: number;

  @Prop()
  private analisisArterial: number;

  @Prop()
  public pacienteID: number;

  @Prop()
  cretaedAt: Date;

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
    edad: number,
    pacienteID: number,
    // el signo '?' indica que el parametro es opcional
    analisisHipertension?: number,
    analisisHiperlipidemia?: number,
    analisisCoronaria?: number,
    analsisCongenita?: number,
    analisisCerebrovascular?: number,
    analisisDiabetes2?: number,
    analisisArterial?: number,
    createdAt?: Date,
  ) {
    this.sistolica = sistolica;
    this.ldl = ldl; //entre 40 y 60
    this.hdl = hdl; //
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
    this.edad = edad;
    this.pacienteID = pacienteID;
    //                                       Indica que el valor es = 0
    this.analisisHipertension = analisisHipertension ?? 0;
    this.analisisHiperlipidemia = analisisHiperlipidemia ?? 0;
    this.analisisCoronaria = analisisCoronaria ?? 0;
    this.analisisCongenita = analsisCongenita ?? 0;
    this.analisisCerebrovascular = analisisCerebrovascular ?? 0;
    this.analisisDiabetes2 = analisisDiabetes2 ?? 0;
    this.analisisArterial = analisisArterial ?? 0;
    this.cretaedAt = createdAt;
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

  public getEdad(): number {
    return this.edad;
  }

  public setEdad(value: number): void {
    this.edad = value;
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

  public analizarHipertension(): number {
    const resultadoFumar = { resultado: 0 };
    const sistolica = { resultado: 0 };
    const alcohol = { resultado: 0 };
    const diabetes: number = this.analizarDiabetes2();

    if (this.sistolica < 140) {
      const x = ((140 - this.sistolica) * 100) / 140;
      sistolica.resultado = 100 - parseFloat(x.toFixed(2));
    } else {
      sistolica.resultado = 100;
    }

    switch (this.habitoAlcohol) {
      case 'Alta':
        alcohol.resultado = 100;
        break;
      case 'Moderada':
        alcohol.resultado = 60;
        break;
      case 'Baja':
        alcohol.resultado = 30;
        break;
      case 'Ninguna':
        alcohol.resultado = 0;
        break;
      default:
        alcohol.resultado = 0;
        break;
    }

    switch (this.habitoFumar) {
      case 'Activo':
        resultadoFumar.resultado = 100;
        break;
      case 'Medio':
        resultadoFumar.resultado = 50;
        break;
      case 'Nada':
        resultadoFumar.resultado = 0;
        break;
      default:
        resultadoFumar.resultado = 0;
        break;
    }

    const resultado: number =
      diabetes * 0.2 +
      sistolica.resultado * 0.3 +
      alcohol.resultado * 0.3 +
      resultadoFumar.resultado * 0.2;

    return parseFloat(resultado.toFixed(2));
  }

  public analizarDiabetes2(): number {
    const imc = { imc: 0, resultado: '' };
    const probActividad = { calculo: 0 };
    const familiar = { calculo: 0 };
    const probIMC = { calculo: 0 };

    if (this.horasActividadSemanal < 7) {
      probActividad.calculo = ((7 - this.horasActividadSemanal) * 100) / 7;
    }

    if (this.enfermedades[0] === 'diabetes') {
      switch (this.familiar) {
        case 'Abuelos':
          familiar.calculo = 50;
          break;
        case 'Padres':
          familiar.calculo = 70;
          break;
        case 'Tios':
          familiar.calculo = 30;
          break;
        case 'Hermanos':
          familiar.calculo = 40;
          break;
        default:
          familiar.calculo = 0;
          break;
      }
    }

    const alturaMetros = this.cmAltura / 100;
    const calcularImc = this.masaCorporalKg / (alturaMetros * alturaMetros);

    if (calcularImc < 18.5) {
      imc.resultado = 'Bajo peso';
    } else if (calcularImc >= 18.5 && calcularImc < 24.9) {
      imc.resultado = 'Normal';
    } else if (calcularImc >= 24.9 && calcularImc < 29.9) {
      imc.resultado = 'Sobrepeso';
    } else {
      imc.resultado = 'Obeso';
    }

    if (calcularImc < 30) {
      const x = ((30 - calcularImc) * 100) / 30;
      probIMC.calculo = 100 - parseFloat(x.toFixed(2));
    } else {
      probIMC.calculo = 100;
    }

    const resultado =
      probActividad.calculo * 0.3 +
      probIMC.calculo * 0.6 +
      familiar.calculo * 0.1;

    return parseFloat(resultado.toFixed(2));
  }

  public analizarHiperlipidemia(): number {
    const colesterol = { resultado: 0 };
    const ldl = { resultado: 0 };
    const trigliceridos = { resultado: 0 };

    if (this.colesterol < 200) {
      const x = ((200 - this.colesterol) * 100) / 200;
      colesterol.resultado = 100 - parseFloat(x.toFixed(2));
    } else {
      colesterol.resultado = 100;
    }

    if (this.ldl < 130) {
      const y = ((130 - this.ldl) * 100) / 130;
      ldl.resultado = 100 - parseFloat(y.toFixed(2));
    } else {
      ldl.resultado = 100;
    }

    if (this.triglicerios < 150) {
      const z = ((150 - this.triglicerios) * 100) / 150;
      trigliceridos.resultado = 100 - parseFloat(z.toFixed(2));
    } else {
      trigliceridos.resultado = 100;
    }

    const hdl = ((40 - this.hdl) * 100) / 40;

    const resultado: number =
      colesterol.resultado * 0.5 +
      ldl.resultado * 0.2 +
      trigliceridos.resultado * 0.2 +
      hdl * 0.1;

    return parseFloat(resultado.toFixed(2));
  }
  public analizarCoronaria(): number {
    const colesterol = { resultado: 0 };
    const ldl = { resultado: 0 };
    const sistolica = { resultado: 0 };
    const diastolica = { resultado: 0 };
    const tabaquismo = { porcentaje: 0 };
    const probActividad = { resultado: 0 };
    const familiares: number = this.analizarCongenita();

    if (this.colesterol < 200) {
      const x = ((200 - this.colesterol) * 100) / 200;
      colesterol.resultado = 100 - parseFloat(x.toFixed(2));
    } else {
      colesterol.resultado = 100;
    }

    if (this.ldl < 130) {
      const y = ((130 - this.ldl) * 100) / 130;
      ldl.resultado = 100 - parseFloat(y.toFixed(2));
    } else {
      ldl.resultado = 100;
    }

    if (this.sistolica < 140) {
      const z = ((140 - this.sistolica) * 100) / 140;
      sistolica.resultado = 100 - parseFloat(z.toFixed(2));
    } else {
      sistolica.resultado = 100;
    }

    if (this.diastolica < 80) {
      const p = ((80 - this.diastolica) * 100) / 80;
      diastolica.resultado = 100 - parseFloat(p.toFixed(2));
    } else {
      diastolica.resultado = 100;
    }

    if (this.horasActividadSemanal < 7) {
      probActividad.resultado = ((7 - this.horasActividadSemanal) * 100) / 7;
    }

    const porPresionArterial: number =
      sistolica.resultado * 0.5 + diastolica.resultado * 0.5;

    switch (this.habitoFumar) {
      case 'Activo':
        tabaquismo.porcentaje = 100;
        break;
      case 'Medio':
        tabaquismo.porcentaje = 50;
        break;
      case 'Nada':
        tabaquismo.porcentaje = 0;
        break;
      default:
        tabaquismo.porcentaje = 0;
        break;
    }

    const resultadoAnalisis: number =
      porPresionArterial * 0.2 +
      familiares * 0.1 +
      tabaquismo.porcentaje * 0.1 +
      colesterol.resultado * 0.4 +
      ldl.resultado * 0.1 +
      probActividad.resultado * 0.1;

    return parseFloat(resultadoAnalisis.toFixed(2));
  }

  public analizarCongenita(): number {
    const resultadoAnalisis = { resultado: 0 };

    switch (this.familiar) {
      case 'Abuelos':
        resultadoAnalisis.resultado = 50;
        break;
      case 'Padres':
        resultadoAnalisis.resultado = 70;
        break;
      case 'Tios':
        resultadoAnalisis.resultado = 30;
        break;
      case 'Hermanos':
        resultadoAnalisis.resultado = 40;
        break;
      default:
        resultadoAnalisis.resultado = 0; // Asignar valor predeterminado en caso de que no coincida ningún caso
        break;
    }

    return resultadoAnalisis.resultado;
  }

  public analizarCerebrovascular(): number {
    const fumar = { calculo: 0 };
    const familiar = { calculo: 0 };
    const sistoDisto = { calculo: 0 };
    const colesterol = { calculo: 0 };
    const ldl = { calculo: 0 };

    if (this.diastolica < 80 && this.sistolica < 120) {
      const x = ((120 - this.sistolica) * 100) / 120;
      const xy = 100 - parseFloat(x.toFixed(2));
      const s = ((80 - this.sistolica) * 100) / 80;
      const sy = 100 - parseFloat(s.toFixed(2));
      sistoDisto.calculo = xy * 0.5 + sy * 0.5;
    } else {
      sistoDisto.calculo = 100;
    }

    if (this.colesterol < 200) {
      const x = ((200 - this.colesterol) * 100) / 200;
      colesterol.calculo = 100 - parseFloat(x.toFixed(2));
    } else {
      colesterol.calculo = 100;
    }

    if (this.ldl < 130) {
      const x = ((130 - this.ldl) * 100) / 130;
      ldl.calculo = 100 - parseFloat(x.toFixed(2));
    } else {
      ldl.calculo = 100;
    }

    switch (this.familiar) {
      case 'Abuelos':
        familiar.calculo = 50;
        break;
      case 'Padres':
        familiar.calculo = 70;
        break;
      case 'Tios':
        familiar.calculo = 30;
        break;
      case 'Hermanos':
        familiar.calculo = 40;
        break;
      default:
        familiar.calculo = 0; // Valor por defecto
        break;
    }

    switch (this.habitoFumar) {
      case 'Activo':
        fumar.calculo = 100;
        break;
      case 'Medio':
        fumar.calculo = 50;
        break;
      case 'Nada':
        fumar.calculo = 0;
        break;
      default:
        fumar.calculo = 0; // Valor por defecto
        break;
    }

    const diabetes = this.analizarDiabetes2();

    const resultado =
      diabetes * 0.1 +
      fumar.calculo * 0.1 +
      familiar.calculo * 0.1 +
      sistoDisto.calculo * 0.2 +
      colesterol.calculo * 0.4 +
      ldl.calculo * 0.1;

    return parseFloat(resultado.toFixed(2));
  }

  public analizarArterial(fechaNacimiento: Date): number {
    const diabetes = this.analizarDiabetes2();
    const edad = this.calcularEdadPaciente(fechaNacimiento);
    const edadCalculo = { calculo: 0 };
    if (edad < 65) {
      const x: number = ((65 - edad) * 100) / 65;
      edadCalculo.calculo = 100 - parseFloat(x.toFixed(2));
    } else {
      edadCalculo.calculo = 100;
    }
    const resultado = diabetes * 0.4 + edadCalculo.calculo * 0.6;
    return parseFloat(resultado.toFixed(2));
  }

  calcularEdadPaciente(fechaNacimiento: Date): number {
    const fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();
    const mesNacimiento = fechaNacimiento.getMonth();
    const diaNacimiento = fechaNacimiento.getDate();

    // Verificar si el paciente ya ha cumplido años en el año actual
    if (
      mesActual < mesNacimiento ||
      (mesActual === mesNacimiento && diaActual < diaNacimiento)
    ) {
      edad--;
    }

    return edad;
  }
}
export const AnalisisSchema = SchemaFactory.createForClass(Analisi);
