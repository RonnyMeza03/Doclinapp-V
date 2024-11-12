import { Paciente } from 'src/paciente/entities/paciente.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AplicacionService } from 'src/aplicacion/aplicacion.service';
import { Usuarios } from 'src/usuarios/entities/usuario.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Analisi } from 'src/schemas/analisis.schema';
import { Model } from 'mongoose';
import { Perfil } from 'src/perfil/entities/perfil.entity';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
    @InjectRepository(Usuarios)
    private usuariosRepository: Repository<Usuarios>,
    @InjectRepository(Perfil)
    private perfilRepository: Repository<Perfil>,
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

  async createPacienteScript(
    fecha: number,
    idAuth0: string,
  ): Promise<Paciente> {
    const createPacienteDto: CreatePacienteDto = {
      nombre: '',
      apellido: '',
      fechaNacimiento: new Date(),
      sexo: '',
      direccion: '',
      telefono: '',
      correo: '',
      aplicacionID: 0,
      idAuth0: '',
      usuarioID: 0,
      createdAt: `${fecha}-11-06 19:45:50`,
    };
    const nombresHombres = [
      'Carlos',
      'Juan',
      'Luis',
      'Miguel',
      'José',
      'Andrés',
      'Pedro',
      'Santiago',
      'Fernando',
      'Javier',
      'Ricardo',
      'Alejandro',
      'Hugo',
      'Gabriel',
      'Manuel',
      'Roberto',
      'Diego',
      'Pablo',
      'Sebastián',
      'Enrique',
    ];

    const nombresMujeres = [
      'María',
      'Ana',
      'Laura',
      'Isabel',
      'Sofía',
      'Lucía',
      'Carla',
      'Marta',
      'Paula',
      'Elena',
      'Rosa',
      'Patricia',
      'Verónica',
      'Teresa',
      'Gabriela',
      'Sara',
      'Lorena',
      'Claudia',
      'Beatriz',
      'Carolina',
    ];

    const apellidos = [
      'García',
      'Martínez',
      'López',
      'Hernández',
      'González',
      'Pérez',
      'Rodríguez',
      'Sánchez',
      'Ramírez',
      'Cruz',
      'Flores',
      'Jiménez',
      'Morales',
      'Ortiz',
      'Gómez',
      'Vargas',
      'Castro',
      'Díaz',
      'Torres',
      'Ramos',
    ];

    const genero = Math.floor(Math.random() * 2);

    const nombre =
      genero === 0
        ? nombresHombres[Math.floor(Math.random() * nombresHombres.length)]
        : nombresMujeres[Math.floor(Math.random() * nombresMujeres.length)];

    createPacienteDto.nombre = nombre;
    createPacienteDto.sexo = genero === 0 ? 'masculino' : 'femenino';

    const apellido = apellidos[Math.floor(Math.random() * apellidos.length)];

    createPacienteDto.apellido = apellido;

    // Definir el rango de la fecha de nacimiento
    const fechaMaxima = new Date();
    fechaMaxima.setFullYear(fechaMaxima.getFullYear() - 15); // Mínimo 15 años atrás

    const fechaMinima = new Date(fechaMaxima);
    fechaMinima.setFullYear(fechaMinima.getFullYear() - 85); // Máximo 85 años atrás

    // Generar una fecha aleatoria entre fechaMinima y fechaMaxima
    const fechaNacimientoTimestamp =
      Math.floor(
        Math.random() * (fechaMaxima.getTime() - fechaMinima.getTime()),
      ) + fechaMinima.getTime();

    const fechaNacimiento = new Date(fechaNacimientoTimestamp);

    // Asignar la fecha de nacimiento al DTO
    createPacienteDto.fechaNacimiento = fechaNacimiento;
    createPacienteDto.direccion = 'direccion de visualizacion';
    createPacienteDto.telefono = '123';
    createPacienteDto.correo = 'email de visualizacion';

    const usuarioId = await this.usuariosRepository.findOne({
      where: {
        sub: idAuth0,
      },
    });

    createPacienteDto.usuarioID = usuarioId.id;
    createPacienteDto.aplicacionID = usuarioId.aplicacionID;
    createPacienteDto.idAuth0 = idAuth0;

    const nuevoPaciente = await this.pacienteRepository.save(createPacienteDto);
    return nuevoPaciente;
  }

  async findUltimosPacientes(idPerfil: number) {
    const perfilEncontrado = await this.perfilRepository.findOne({
      where: {
        id: idPerfil,
      },
    });

    const usuarioEncontrado = await this.usuariosRepository.findOne({
      where: { id: perfilEncontrado.usuario.id },
    });
    const pacientesEncontrados = await this.pacienteRepository
      .createQueryBuilder('paciente')
      .select([
        'paciente.nombre',
        'paciente.apellido',
        'paciente.fechaNacimiento',
        'paciente.sexo',
        'paciente.direccion',
        'paciente.telefono',
        'paciente.correo',
        'paciente.aplicacionID',
        'paciente.id',
        'paciente.usuarioID',
        'paciente.createdAt',
      ])
      .where('paciente.usuarioID = :usuarioID', {
        usuarioID: usuarioEncontrado.id,
      })
      .orderBy('paciente.createdAt', 'DESC')
      .take(4)
      .getMany();
    return pacientesEncontrados;
  }
}
