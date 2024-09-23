import { Module } from '@nestjs/common';
import { AplicacionService } from './aplicacion.service';
import { AplicacionController } from './aplicacion.controller';
import { Aplicacion } from './entities/aplicacion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Usuarios } from 'src/usuarios/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Aplicacion, Paciente, Usuarios])],
  controllers: [AplicacionController],
  providers: [AplicacionService],
  exports: [AplicacionService]
})
export class AplicacionModule {}
