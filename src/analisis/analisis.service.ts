import { PacienteService } from './../paciente/paciente.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAnalisiDto } from './dto/create-analisi.dto';
import { UpdateAnalisiDto } from './dto/update-analisi.dto';
import { Analisi } from 'src/schemas/analisis.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contador, ContadorDocument } from 'src/schemas/contador.schema';

@Injectable()
export class AnalisisService {
  constructor(
    @InjectModel(Analisi.name) private analisisModel: Model<Analisi>,
    @InjectModel(Contador.name) private contadorModel: Model<ContadorDocument>,
    private pacienteService: PacienteService,
  ) {}

  async create(createAnalisiDto: CreateAnalisiDto) {
    //Verificamos si el paciente existe
    const pacienteEncontrado = await this.pacienteService.findOne(
      createAnalisiDto.pacienteID,
    );
    if (!pacienteEncontrado || pacienteEncontrado instanceof HttpException) {
      return new HttpException(
        'No se encontro al paciente',
        HttpStatus.NOT_FOUND,
      );
    }

    console.log(pacienteEncontrado.getNombre);

    // Accede a los atributos de createAnalisiDto
    const nuevoAnalisis = new Analisi(
      createAnalisiDto.sistolica,
      createAnalisiDto.ldl,
      createAnalisiDto.hdl,
      createAnalisiDto.triglicerios,
      createAnalisiDto.familiar,
      createAnalisiDto.enfermedades,
      createAnalisiDto.habitoFumar,
      createAnalisiDto.habitoAlcohol,
      createAnalisiDto.habitoDieta,
      createAnalisiDto.horasActividadSemanal,
      createAnalisiDto.masaCorporalKg,
      createAnalisiDto.glucosa,
      createAnalisiDto.colesterol,
      createAnalisiDto.diastolica,
      createAnalisiDto.cmAltura,
      0,
      createAnalisiDto.pacienteID,
      0, //createAnalisiDto.analisisHipertension,
      0, //createAnalisiDto.analisisHiperlipidemia,
      0, //createAnalisiDto.analisisCoronaria,
      0, //createAnalisiDto.analsisCongenita,
      0, //createAnalisiDto.analisisCerebrovascular,
      0, //createAnalisiDto.analisisDiabetes2,
      0, //createAnalisiDto.analisisArterial
    );

    nuevoAnalisis.setEdad(
      nuevoAnalisis.calcularEdadPaciente(
        pacienteEncontrado.getFechaNacimiento(),
      ),
    );
    nuevoAnalisis.setAnalisisHipertension(nuevoAnalisis.analizarHipertension());
    nuevoAnalisis.setAnalisisHiperlipidemia(
      nuevoAnalisis.analizarHiperlipidemia(),
    );
    nuevoAnalisis.setAnalisisCoronaria(nuevoAnalisis.analizarCoronaria());
    nuevoAnalisis.setAnalisisCongenita(nuevoAnalisis.analizarCongenita());
    nuevoAnalisis.setAnalisisCerebrovascular(
      nuevoAnalisis.analizarCerebrovascular(),
    );
    nuevoAnalisis.setAnalisisDiabetes2(nuevoAnalisis.analizarDiabetes2());
    nuevoAnalisis.setAnalisisArterial(
      nuevoAnalisis.analizarArterial(pacienteEncontrado.getFechaNacimiento()),
    );

    const nuevoId = await this.getNextSequenceValue('analisis');
    console.log(nuevoId);
    const nuevoAnalisisPaciente = new this.analisisModel({
      ...nuevoAnalisis,
      id: nuevoId,
    });
    return nuevoAnalisisPaciente.save();
  }

  findAll() {
    return this.analisisModel.find();
  }

  async findAllAnalisis(id: number) {
    const analisisEncontrado = await this.analisisModel.find({
      pacienteID: id,
    });
    console.log(analisisEncontrado);
    return analisisEncontrado;
  }

  async getNextSequenceValue(sequenceName: string): Promise<number> {
    try {
      // Obtener y actualizar el contador en una sola operación atómica
      const contador = await this.contadorModel.findOneAndUpdate(
        { sequenceName },
        { $inc: { seq: 1 } },
        {
          new: true,
          upsert: true,
          setDefaultsOnInsert: true,
        },
      );

      // Verificar si el ID ya existe en análisis
      const existeAnalisis = await this.analisisModel.findOne({
        id: contador.seq,
      });
      if (existeAnalisis) {
        // Si existe, recursivamente buscar el siguiente ID disponible
        return this.getNextSequenceValue(sequenceName);
      }

      return contador.seq;
    } catch (error) {
      console.error('Error al generar ID secuencial:', error);
      throw new Error(`Error al generar ID secuencial: ${error.message}`);
    }
  }

  async findOne(id: number) {
    const analisisEncontrado = await this.analisisModel.findOne({
      pacienteID: id,
    });
    if (!analisisEncontrado) {
      return new HttpException(
        'No se encontro el analisis',
        HttpStatus.NOT_FOUND,
      );
    }

    console.log(analisisEncontrado);

    return analisisEncontrado;
  }

  async createAnalisisScript(pacienteId: number) {
    const analisis: CreateAnalisiDto = {
      sistolica: 0,
      ldl: 0,
      hdl: 0,
      triglicerios: 0,
      familiar: '',
      enfermedades: [''],
      habitoFumar: '',
      habitoAlcohol: '',
      habitoDieta: '',
      horasActividadSemanal: 0,
      masaCorporalKg: 0,
      glucosa: 0,
      colesterol: 0,
      diastolica: 0,
      cmAltura: 0,
      pacienteID: pacienteId,
    };

    analisis.sistolica = Math.floor(Math.random() * (120 - 70 + 1)) + 70;
    analisis.ldl = Math.floor(Math.random() * (120 - 70 + 1)) + 70;
    analisis.hdl = Math.floor(Math.random() * (120 - 70 + 1)) + 70;
    analisis.triglicerios = Math.floor(Math.random() * (120 - 90 + 1)) + 90;

    const familiares = ['Padres', 'Abuelos', 'Tios', 'Hermanos', 'Ninguno'];
    analisis.familiar =
      familiares[Math.floor(Math.random() * familiares.length)];

    const habitoFumar = ['Activo', 'Medio', 'Nada'];
    analisis.habitoFumar =
      habitoFumar[Math.floor(Math.random() * habitoFumar.length)];

    const habitoAlcohol = ['Alta', 'Moderada', 'Baja', 'Ninguna'];
    analisis.habitoAlcohol =
      habitoAlcohol[Math.floor(Math.random() * habitoAlcohol.length)];

    const habitoDieta = ['Alta', 'Baja'];
    analisis.habitoDieta =
      habitoDieta[Math.floor(Math.random() * habitoDieta.length)];

    analisis.horasActividadSemanal =
      Math.floor(Math.random() * (14 - 0 + 1)) + 0;

    analisis.cmAltura = Math.floor(Math.random() * (190 - 150 + 1)) + 150;

    analisis.masaCorporalKg =
      Math.floor(
        Math.random() * (analisis.cmAltura + 30 - (analisis.cmAltura - 10) + 1),
      ) +
      (analisis.cmAltura - 10) -
      100;

    analisis.glucosa = Math.floor(Math.random() * (120 - 90 + 1)) + 90;

    analisis.colesterol = Math.floor(Math.random() * (200 - 150 + 1)) + 150;

    analisis.diastolica = Math.floor(Math.random() * (80 - 60 + 1)) + 60;

    analisis.pacienteID = pacienteId;

    const pacienteEncontrado = await this.pacienteService.findOne(
      analisis.pacienteID,
    );
    if (!pacienteEncontrado || pacienteEncontrado instanceof HttpException) {
      return new HttpException(
        'No se encontro al paciente',
        HttpStatus.NOT_FOUND,
      );
    }

    const nuevoAnalisis = new Analisi(
      analisis.sistolica,
      analisis.ldl,
      analisis.hdl,
      analisis.triglicerios,
      analisis.familiar,
      analisis.enfermedades,
      analisis.habitoFumar,
      analisis.habitoAlcohol,
      analisis.habitoDieta,
      analisis.horasActividadSemanal,
      analisis.masaCorporalKg,
      analisis.glucosa,
      analisis.colesterol,
      analisis.diastolica,
      analisis.cmAltura,
      0,
      analisis.pacienteID,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    );

    nuevoAnalisis.setEdad(
      nuevoAnalisis.calcularEdadPaciente(
        pacienteEncontrado.getFechaNacimiento(),
      ),
    );
    nuevoAnalisis.setAnalisisHipertension(nuevoAnalisis.analizarHipertension());
    nuevoAnalisis.setAnalisisHiperlipidemia(
      nuevoAnalisis.analizarHiperlipidemia(),
    );
    nuevoAnalisis.setAnalisisCoronaria(nuevoAnalisis.analizarCoronaria());
    nuevoAnalisis.setAnalisisCongenita(nuevoAnalisis.analizarCongenita());
    nuevoAnalisis.setAnalisisCerebrovascular(
      nuevoAnalisis.analizarCerebrovascular(),
    );
    nuevoAnalisis.setAnalisisDiabetes2(nuevoAnalisis.analizarDiabetes2());
    nuevoAnalisis.setAnalisisArterial(
      nuevoAnalisis.analizarArterial(pacienteEncontrado.getFechaNacimiento()),
    );

    const nuevoId = await this.getNextSequenceValue('analisis');
    console.log(nuevoId);
    const nuevoAnalisisPaciente = new this.analisisModel({
      ...nuevoAnalisis,
      id: nuevoId,
    });
    return await nuevoAnalisisPaciente.save();
  }

  update(id: number, updateAnalisiDto: UpdateAnalisiDto) {
    return `This action updates a #${id} analisi`;
  }

  remove(id: number) {
    return `This action removes a #${id} analisi`;
  }
}
