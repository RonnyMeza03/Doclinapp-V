import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { Perfil } from './entities/perfil.entity';
import { Repository } from 'typeorm';
import { Usuarios } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class PerfilService {
  constructor(
    @InjectRepository(Perfil) private perfilRepository: Repository<Perfil>,
    @InjectRepository(Usuarios) private usuarioRepository: Repository<Usuarios>,
  ) {}

  async create(perfil: CreatePerfilDto) {
    const usuarioIdEncontrado = await this.usuarioRepository.findOne({
      select: ['id'],
      where: { sub: perfil.idAuth0 },
    });

    if (!usuarioIdEncontrado) {
      return new HttpException(
        'No se encontro al usuario',
        HttpStatus.NOT_FOUND,
      );
    }

    perfil.usuarioId = usuarioIdEncontrado.id;

    const nuevoPerfil = this.perfilRepository.create(perfil);
    return this.perfilRepository.save(nuevoPerfil);
  }

  findAll() {
    return this.perfilRepository.find({
      relations: ['nombreUsuario'],
    });
  }

  async findOne(id: number) {
    const perfilEncontrado = await this.perfilRepository.findOne({
      where: {
        id,
      },
    });
    if (!perfilEncontrado) {
      return new HttpException(
        'No se encontro el perfil',
        HttpStatus.NOT_FOUND,
      );
    }
    return perfilEncontrado;
  }

  async update(id: number, updatePerfilDto: UpdatePerfilDto) {
    const perfilEncontrado = await this.perfilRepository.findOne({
      where: {
        id,
      },
    });
    if (!perfilEncontrado) {
      return new HttpException(
        'No se encontro al paciente',
        HttpStatus.NOT_FOUND,
      );
    }
    const actualizarPerfil = Object.assign(perfilEncontrado, updatePerfilDto);
    return this.perfilRepository.save(actualizarPerfil);
  }

  remove(id: number) {
    return `This action removes a #${id} perfil`;
  }
}
