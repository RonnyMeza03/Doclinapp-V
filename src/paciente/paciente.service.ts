import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AplicacionService } from 'src/aplicacion/aplicacion.service';
import { Usuarios } from 'src/usuarios/entities/usuario.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Analisi } from 'src/schemas/analisis.schema';
import { Model } from 'mongoose';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
    @InjectRepository(Usuarios)
    private usuariosRepository: Repository<Usuarios>,
    @InjectModel(Analisi.name)
    private analisisRepository: Model<Analisi>,
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

    const usuario = await this.usuariosRepository.findOne({
      where: { sub: createPacienteDto.idAuth0 },
    });

    createPacienteDto.usuarioID = usuario.id;
    createPacienteDto.aplicacionID = usuario.aplicacionID;

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

  async update(id: number, updatePacienteDto: UpdatePacienteDto) {
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

  async findAnalisisPaciente(idPaciente: number) {
    const pacienteAnalisis = await this.analisisRepository.findOne({
      pacienteID: idPaciente,
    });
    if (!pacienteAnalisis) {
      return new HttpException(
        'No se encontro el analisis del paciente',
        HttpStatus.NOT_FOUND,
      );
    }
    console.log(pacienteAnalisis);
    return pacienteAnalisis;
  }
}
