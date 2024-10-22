import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';
import { AplicacionModule } from 'src/aplicacion/aplicacion.module';
import { Usuarios } from 'src/usuarios/entities/usuario.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Analisi, AnalisisSchema } from 'src/schemas/analisis.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Analisi.name, schema: AnalisisSchema }]),
    TypeOrmModule.forFeature([Paciente, Usuarios]),
    AplicacionModule,
  ],
  controllers: [PacienteController],
  providers: [PacienteService],
  exports: [PacienteService],
})
export class PacienteModule {}
