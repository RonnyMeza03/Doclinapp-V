import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { scriptPacienteDto } from './dto/script-paciente.dto';
import { AnalisisService } from 'src/analisis/analisis.service';

@Controller('paciente')
export class PacienteController {
  constructor(
    private readonly pacienteService: PacienteService,
    private readonly analisisService: AnalisisService,
  ) {}

  @Post()
  create(@Body() createPacienteDto: CreatePacienteDto) {
    return this.pacienteService.create(createPacienteDto);
  }

  @Get()
  findAll() {
    return this.pacienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pacienteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePacienteDto: UpdatePacienteDto,
  ) {
    return this.pacienteService.update(+id, updatePacienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pacienteService.remove(+id);
  }
  //http://localhost:4000/paciente/:id/analisis
  @Get(':pacienteID/analisis')
  async getPacienteAnalisis(@Param('pacienteID') pacienteID: number) {
    return this.pacienteService.findAnalisisPaciente(pacienteID);
  }

  @Post('/script')
  async createPacienteScript(@Body() script: scriptPacienteDto) {
    let i: number = 0;
    while (i < script.totalPacientes) {
      const nuevoPaciente = await this.pacienteService.createPacienteScript(
        script.fecha,
        script.idAuth0,
      );

      console.log(nuevoPaciente.id, script.fecha);

      // Ahora podemos usar el id directamente
      await this.analisisService.createAnalisisScript(
        nuevoPaciente.id,
        script.fecha,
      );
      i++;
    }

    return {
      message: `${script.totalPacientes} pacientes y análisis creados con éxito.`,
    };
  }
}
