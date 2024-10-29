import { PerfilService } from './../perfil/perfil.service';
import { AplicacionService } from 'src/aplicacion/aplicacion.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuarios } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { Paciente } from 'src/paciente/entities/paciente.entity';

@Injectable()
export class UsuariosService {
  /*
  create(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }
  */

  //Importa la clase, lo convierte en un repositorio de typeORM para poder las consultas de DML (Insert, Delete, Select, Update)
  constructor(
    @InjectRepository(Usuarios) private usuarioRepository: Repository<Usuarios>,
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
    private PerfilService: PerfilService,
    private aplicacionService: AplicacionService,
  ) {}

  async createUsuario(usuario: CreateUsuarioDto) {
    //Verificamos que la aplicacion existe
    const aplicacionEncontrada = this.aplicacionService.findOne(
      usuario.aplicacionID,
    );

    if (!aplicacionEncontrada) {
      return new HttpException(
        'Aplicacion no encontrada',
        HttpStatus.NOT_FOUND,
      );
    }
    // es asincrono porque necesita consultar a la base de datos para obtener el usuario encontrado
    const usuarioEncontrado = await this.usuarioRepository.findOne({
      where: {
        nickname: usuario.nickname,
      },
    });

    if (usuarioEncontrado) {
      return new HttpException('El usuario ya existe', HttpStatus.CONFLICT);
    }

    const nuevoUsuario = this.usuarioRepository.create(usuario);
    return this.usuarioRepository.save(nuevoUsuario);
  }

  findAll() {
    return this.usuarioRepository.find();
  }

  async findOne(id: number) {
    const usuarioEncontrado = await this.usuarioRepository.findOne({
      where: {
        id,
      },
    });

    if (!usuarioEncontrado) {
      return new HttpException(
        'No se encontro al Usuario',
        HttpStatus.NOT_FOUND,
      );
    }

    const perfil = this.PerfilService.findPerfilUsuario(usuarioEncontrado.id);

    if (!perfil) {
      return { error: 'no se encontro perfil' };
    }

    return [usuarioEncontrado, perfil];
  }

  async findOneUsuarioIdAuth0(idAuth0: string) {
    const usuarioEncontrado = await this.usuarioRepository.findOne({
      where: {
        sub: idAuth0,
      },
    });
    console.log(usuarioEncontrado);
    if (!usuarioEncontrado) {
      return new HttpException(
        'No se encotro al usuario',
        HttpStatus.NOT_FOUND,
      );
    }
    const perfilUsuario = await this.PerfilService.findPerfilUsuario(
      usuarioEncontrado.id,
    );
    return perfilUsuario;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioEncontrado = await this.usuarioRepository.findOne({
      where: {
        id,
      },
    });

    if (!usuarioEncontrado) {
      return new HttpException(
        'No se encontro al Usuario',
        HttpStatus.NOT_FOUND,
      );
    }
    const updateUsuario = Object.assign(usuarioEncontrado, updateUsuarioDto);
    return this.usuarioRepository.save(updateUsuario);
  }

  async updateGrupoUsuario(updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioEncontrado = await this.usuarioRepository.findOne({
      where: {
        email: updateUsuarioDto.email,
      },
    });

    console.log(usuarioEncontrado);

    if (!usuarioEncontrado) {
      throw new HttpException(
        'No se encontro al Usuario',
        HttpStatus.NOT_FOUND,
      );
    }

    const aplicacionEncontrada = await this.aplicacionService.findOne(
      updateUsuarioDto.aplicacionID,
    );

    usuarioEncontrado.aplicacionID = updateUsuarioDto.aplicacionID;
    usuarioEncontrado.nombreAplicacion = aplicacionEncontrada;

    const updateUsuario = Object.assign(usuarioEncontrado, updateUsuarioDto);
    return this.usuarioRepository.save(updateUsuario);
  }

  async remove(id: number) {
    const usuarioEncontrado = await this.usuarioRepository.findOne({
      where: {
        id,
      },
    });

    if (!usuarioEncontrado) {
      return new HttpException(
        'No se encontro al Usuario',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.usuarioRepository.delete({ id });
  }

  async findUsuarioPacientesById(usuarioId: string) {
    const usuario = await this.usuarioRepository.findOne({
      select: ['id'],
      where: {
        sub: usuarioId,
      },
    });

    if (!usuario) {
      return new HttpException(
        'No se encontro al usuario',
        HttpStatus.NOT_FOUND,
      );
    }

    const usuarioPacientes = await this.pacienteRepository.find({
      where: { usuario },
      relations: ['usuario'],
    });
    if (usuarioPacientes.length == 0) {
      return new HttpException(
        'No se encontraron pacientes de este usuario',
        HttpStatus.NOT_FOUND,
      );
    }
    return usuarioPacientes;
  }

  async updateByAuth0(idAuth0: string, updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioEncontrado = await this.usuarioRepository.findOne({
      where: {
        sub: idAuth0,
      },
    });

    if (!usuarioEncontrado) {
      return new HttpException(
        'No se encontro al Usuario',
        HttpStatus.NOT_FOUND,
      );
    }
    const updateUsuario = Object.assign(usuarioEncontrado, updateUsuarioDto);
    console.log(updateUsuario);
    return this.usuarioRepository.save(updateUsuario);
  }
}
