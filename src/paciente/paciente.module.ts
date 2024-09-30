import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';
import { AplicacionModule } from 'src/aplicacion/aplicacion.module';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente]), AplicacionModule],
  controllers: [PacienteController],
  providers: [PacienteService],
  exports: [PacienteService],
})
export class PacienteModule {}
