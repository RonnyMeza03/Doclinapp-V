import { Module } from '@nestjs/common';
import { PaypalService } from './paypal.service';
import { PaypalController } from './paypal.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PaypalOrderSchema,
  PaypalOrder,
} from 'src/schemas/IPaypalOrder.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contador, ContadorSchema } from 'src/schemas/contador.schema';
import { Usuarios } from 'src/usuarios/entities/usuario.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PaypalOrder.name, schema: PaypalOrderSchema },
      { name: Contador.name, schema: ContadorSchema },
    ]),
    TypeOrmModule.forFeature([Usuarios]),
  ],
  controllers: [PaypalController],
  providers: [PaypalService],
})
export class PaypalModule {}
