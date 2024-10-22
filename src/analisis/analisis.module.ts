import { Module } from '@nestjs/common';
import { AnalisisService } from './analisis.service';
import { AnalisisController } from './analisis.controller';
import { PacienteModule } from 'src/paciente/paciente.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Analisi, AnalisisSchema } from 'src/schemas/analisis.schema';
import { Contador, ContadorSchema } from 'src/schemas/contador.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Analisi.name, schema: AnalisisSchema },
      { name: Contador.name, schema: ContadorSchema },
    ]),
    PacienteModule,
  ],
  controllers: [AnalisisController],
  providers: [AnalisisService],
  exports: [AnalisisService],
})
export class AnalisisModule {}
