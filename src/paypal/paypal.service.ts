import { Injectable } from '@nestjs/common';
import { PaypalOrder } from 'src/schemas/IPaypalOrder.schema';
import { Model } from 'mongoose';
import { Contador, ContadorDocument } from 'src/schemas/contador.schema';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class PaypalService {
  constructor(
    @InjectModel(PaypalOrder.name) private paypalOrderModel: Model<PaypalOrder>,
    @InjectModel(Contador.name) private contadorModel: Model<ContadorDocument>,
    @InjectRepository(Usuarios) private usuarioRepository: Repository<Usuarios>,
  ) {}

  async create(
    idAuth0: string,
    paypalOrder: PaypalOrder,
    itemComprado: string,
  ) {
    const usuarioEncontrado = await this.usuarioRepository.findOne({
      where: { sub: idAuth0 },
    });

    if (!usuarioEncontrado) {
      throw new Error('Usuario no encontrado');
    }

    paypalOrder.usuarioId = usuarioEncontrado.id;
    paypalOrder.suscripcionComprada = itemComprado;

    const paypalOrderUsuario = new this.paypalOrderModel(paypalOrder);

    return paypalOrderUsuario.save();
  }

  findAll() {
    return `This action returns all paypal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paypal`;
  }

  remove(id: number) {
    return `This action removes a #${id} paypal`;
  }
}
