import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuarios } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  /*
  create(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }
  */

   //Importa la clase, lo convierte en un repositorio de typeORM para poder las consultas de DML (Insert, Delete, Select, Update)  
  constructor(@InjectRepository(Usuarios) private usuarioRepository: Repository<Usuarios>) {}

  createUsuario(usuario: CreateUsuarioDto){
    const nuevoUsuario = this.usuarioRepository.create(usuario)
    return this.usuarioRepository.save(nuevoUsuario)
  }

  findAll() {
    return this.usuarioRepository.find();
  }

  findOne(id: number) {
    return this.usuarioRepository.findOne({
      where: {
        id
      }
    });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
