import { Module } from '@nestjs/common';
import { AplicacionService } from './aplicacion.service';
import { AplicacionController } from './aplicacion.controller';

@Module({
  controllers: [AplicacionController],
  providers: [AplicacionService],
})
export class AplicacionModule {}
