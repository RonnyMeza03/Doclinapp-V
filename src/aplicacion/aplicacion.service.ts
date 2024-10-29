import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAplicacionDto } from './dto/create-aplicacion.dto';
import { UpdateAplicacionDto } from './dto/update-aplicacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aplicacion } from './entities/aplicacion.entity';
import { Repository } from 'typeorm';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Usuarios } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class AplicacionService {
  //Importa la clase, lo convierte en un repositorio de typeORM para poder las consultas de DML (Insert, Delete, Select, Update)
  constructor(
    @InjectRepository(Aplicacion)
    private readonly aplicacionRepository: Repository<Aplicacion>,

    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>, // Asegúrate de inyectar correctamente el repositorio

    @InjectRepository(Usuarios)
    private readonly usuarioRepository: Repository<Usuarios>,
  ) {}

  async create(aplicacion: CreateAplicacionDto) {
    const aplicacionEncontrada = await this.aplicacionRepository.findOne({
      where: {
        nombre: aplicacion.nombre,
      },
    });

    if (aplicacionEncontrada) {
      return new HttpException('Aplicacion Ya existente', HttpStatus.CONFLICT);
    }

    return this.aplicacionRepository.save(aplicacion);
  }

  findAll() {
    return this.aplicacionRepository.find();
  }

  async findOne(id: number) {
    const aplicacionEncontrada = await this.aplicacionRepository.findOne({
      where: {
        id,
      },
    });
    if (!aplicacionEncontrada) {
      throw new HttpException('Aplicacion no encontrada', HttpStatus.NOT_FOUND);
    }
    return aplicacionEncontrada;
  }

  async update(id: number, updateAplicacionDto: UpdateAplicacionDto) {
    const aplicacionEncontrada = await this.aplicacionRepository.findOne({
      where: {
        id,
      },
    });
    if (!aplicacionEncontrada) {
      return new HttpException(
        'Aplicacion no encontrada',
        HttpStatus.NOT_FOUND,
      );
    }
    const actualizarAplicacion = Object.assign(
      aplicacionEncontrada,
      updateAplicacionDto,
    );
    return this.aplicacionRepository.save(actualizarAplicacion);
  }

  async remove(id: number) {
    const aplicacionEncontrada = await this.aplicacionRepository.findOne({
      where: {
        id,
      },
    });
    if (!aplicacionEncontrada) {
      return new HttpException(
        'Aplicacion no encontrada',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.aplicacionRepository.delete({ id });
  }

  //http://localhost:4000/aplicacion/:id/pacientes
  async findPacientesPorAplicacion(aplicacionID: number) {
    const aplicacionPacientes = await this.pacienteRepository.find({
      where: { aplicacionID }, // Filtra por aplicacionID
      relations: ['nombreAplicacion'], // Carga la relación con Aplicacion si es necesario
    });
    if (aplicacionPacientes.length == 0) {
      return new HttpException(
        'Esta Aplicacion no tiene pacientes guardados',
        HttpStatus.NOT_FOUND,
      );
    }
    console.log(aplicacionPacientes);
    return aplicacionPacientes;
  }

  //http://localhost:4000/aplicacion/:id/usuarios
  async findUsuariosAplicacion(aplicacionID: number) {
    const aplicacionUsuarios = await this.usuarioRepository.find({
      where: {
        aplicacionID,
      },
      relations: ['nombreAplicacion'],
    });
    if (aplicacionUsuarios.length == 0) {
      return new HttpException(
        'Esta Aplicacion no tiene usuarios guardados',
        HttpStatus.NOT_FOUND,
      );
    }
    console.log(aplicacionUsuarios);
    return aplicacionUsuarios;
  }
}
