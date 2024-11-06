import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';
import { AplicacionModule } from 'src/aplicacion/aplicacion.module';
import { Usuarios } from 'src/usuarios/entities/usuario.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Analisi, AnalisisSchema } from 'src/schemas/analisis.schema';
import { AnalisisService } from 'src/analisis/analisis.service';
import { Contador, ContadorSchema } from 'src/schemas/contador.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Analisi.name, schema: AnalisisSchema },
      { name: Contador.name, schema: ContadorSchema },
    ]),
    TypeOrmModule.forFeature([Paciente, Usuarios]),
    AplicacionModule,
  ],
  controllers: [PacienteController],
  providers: [PacienteService, AnalisisService],
  exports: [PacienteService],
})
export class PacienteModule {}
