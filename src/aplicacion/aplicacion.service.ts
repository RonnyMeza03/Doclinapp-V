import { Injectable } from '@nestjs/common';
import { CreateAplicacionDto } from './dto/create-aplicacion.dto';
import { UpdateAplicacionDto } from './dto/update-aplicacion.dto';

@Injectable()
export class AplicacionService {
  create(createAplicacionDto: CreateAplicacionDto) {
    return 'This action adds a new aplicacion';
  }

  findAll() {
    return `This action returns all aplicacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aplicacion`;
  }

  update(id: number, updateAplicacionDto: UpdateAplicacionDto) {
    return `This action updates a #${id} aplicacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} aplicacion`;
  }
}
