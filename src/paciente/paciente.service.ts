import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AplicacionService } from 'src/aplicacion/aplicacion.service';
import { Analisi } from 'src/analisis/entities/analisi.entity';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
    @InjectRepository(Analisi)
    private analalisisRepository: Repository<Analisi>,
    private aplicacionService: AplicacionService,
  ) {}

  async create(createPacienteDto: CreatePacienteDto) {
    //Verificamos que la aplicacion existe
    const aplicacacionEncontrada = this.aplicacionService.findOne(
      createPacienteDto.aplicacionID,
    );

    if (!aplicacacionEncontrada) {
      return new HttpException(
        'Aplicacion no encontrada',
        HttpStatus.NOT_FOUND,
      );
    }

    const nuevoPaciente = this.pacienteRepository.create(createPacienteDto);
    return this.pacienteRepository.save(nuevoPaciente);
  }

  findAll() {
    return this.pacienteRepository.find({
      relations: ['nombreAplicacion'],
    });
  }

  async findOne(id: number) {
    const pacienteEncontrado = await this.pacienteRepository.findOne({
      where: {
        id,
      },
    });
    if (!pacienteEncontrado) {
      return new HttpException(
        'No se encontro al paciente',
        HttpStatus.NOT_FOUND,
      );
    }
    return pacienteEncontrado;
  }

  update(id: number, updatePacienteDto: UpdatePacienteDto) {
    const pacienteEncontrado = this.pacienteRepository.findOne({
      where: {
        id,
      },
    });
    if (!pacienteEncontrado) {
      return new HttpException(
        'No se encontro al paciente',
        HttpStatus.NOT_FOUND,
      );
    }
    const actualizarPaciente = Object.assign(
      pacienteEncontrado,
      updatePacienteDto,
    );
    return this.pacienteRepository.save(actualizarPaciente);
  }

  remove(id: number) {
    const pacienteEncontrado = this.pacienteRepository.findOne({
      where: {
        id,
      },
    });
    if (!pacienteEncontrado) {
      return new HttpException(
        'No se encontro al paciente',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.pacienteRepository.delete({ id });
  }

  async findAnalisisPaciente(pacienteID: number) {
    const pacienteAnalisis = await this.analalisisRepository.find({
      where: { pacienteID },
      relations: ['paciente'],
    });
    if (pacienteAnalisis.length == 0) {
      return new HttpException(
        'No se encontro el analisis del paciente',
        HttpStatus.NOT_FOUND,
      );
    }
    console.log(pacienteAnalisis);
    return pacienteAnalisis;
  }
}
