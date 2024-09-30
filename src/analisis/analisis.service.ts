import { PacienteService } from './../paciente/paciente.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAnalisiDto } from './dto/create-analisi.dto';
import { UpdateAnalisiDto } from './dto/update-analisi.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Analisi } from './entities/analisi.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnalisisService {
  constructor(
    @InjectRepository(Analisi) private analisisRepository: Repository<Analisi>,
    private pacienteService: PacienteService,
  ) {}

  async create(createAnalisiDto: CreateAnalisiDto) {
    //Verificamos si el paciente existe
    const pacienteEncontrado = await this.pacienteService.findOne(
      createAnalisiDto.pacienteID,
    );
    if (!pacienteEncontrado) {
      return new HttpException(
        'No se encontro al paciente',
        HttpStatus.NOT_FOUND,
      );
    }

    console.log(createAnalisiDto);

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
      createAnalisiDto.pacienteID,
      0, //createAnalisiDto.analisisHipertension,
      0, //createAnalisiDto.analisisHiperlipidemia,
      0, //createAnalisiDto.analisisCoronaria,
      0, //createAnalisiDto.analsisCongenita,
      0, //createAnalisiDto.analisisCerebrovascular,
      0, //createAnalisiDto.analisisDiabetes2,
      0, //createAnalisiDto.analisisArterial
    );

    //nuevoAnalisis.setAnalisisHipertension(nuevoAnalisis.analizarHipertension())
    //nuevoAnalisis.setAnalisisHiperlipidemia(nuevoAnalisis.analizarHiperlipidemia())
    //nuevoAnalisis.setAnalisisCoronaria(nuevoAnalisis.analizarCoronaria())
    //nuevoAnalisis.setAnalsisCongenita(nuevoAnalisis.analizarCongenita())
    //nuevoAnalisis.setAnalisisCerebrovascular(nuevoAnalisis.analizarCerebrovascular())
    //nuevoAnalisis.setAnalisisDiabetes2(nuevoAnalisis.analizarDiabetes2())
    //nuevoAnalisis.setAnalisisArterial(nuevoAnalisis.analizarAreterial())

    // Guarda el nuevo análisis en el repositorio
    const nuevoAnalisisPaciente = this.analisisRepository.create(nuevoAnalisis);
    return this.analisisRepository.save(nuevoAnalisisPaciente);
  }

  findAll() {
    return this.analisisRepository.find({
      relations: ['paciente'],
    });
  }

  async findOne(id: number) {
    const analisisEncontrado = await this.analisisRepository.findOne({
      where: {
        id,
      },
    });
    if (!analisisEncontrado) {
      return new HttpException(
        'No se encontro el analisis',
        HttpStatus.NOT_FOUND,
      );
    }
    return analisisEncontrado;
  }

  update(id: number, updateAnalisiDto: UpdateAnalisiDto) {
    return `This action updates a #${id} analisi`;
  }

  remove(id: number) {
    return `This action removes a #${id} analisi`;
  }
}
