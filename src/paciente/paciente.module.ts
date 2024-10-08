import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';
import { AplicacionModule } from 'src/aplicacion/aplicacion.module';
import { Analisi } from 'src/analisis/entities/analisi.entity';
import { Usuarios } from 'src/usuarios/entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Paciente, Analisi, Usuarios]),
    AplicacionModule,
  ],
  controllers: [PacienteController],
  providers: [PacienteService],
  exports: [PacienteService],
})
export class PacienteModule {}
