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
    const contador = await this.contadorModel.findOneAndUpdate(
      { sequenceName },
      { $inc: { seq: 1 } },
      { new: true, upsert: true },
    );
    return contador.seq;
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

  update(id: number, updateAnalisiDto: UpdateAnalisiDto) {
    return `This action updates a #${id} analisi`;
  }

  remove(id: number) {
    return `This action removes a #${id} analisi`;
  }
}
