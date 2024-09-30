import { Module } from '@nestjs/common';
import { AnalisisService } from './analisis.service';
import { AnalisisController } from './analisis.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Analisi } from './entities/analisi.entity';
import { PacienteModule } from 'src/paciente/paciente.module';

@Module({
  imports: [TypeOrmModule.forFeature([Analisi]), PacienteModule],
  controllers: [AnalisisController],
  providers: [AnalisisService],
  exports: [AnalisisService],
})
export class AnalisisModule {}
