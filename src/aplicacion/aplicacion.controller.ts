import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AplicacionService } from './aplicacion.service';
import { CreateAplicacionDto } from './dto/create-aplicacion.dto';
import { UpdateAplicacionDto } from './dto/update-aplicacion.dto';

@Controller('aplicacion')
export class AplicacionController {
  constructor(private readonly aplicacionService: AplicacionService) {}

  @Post()
  create(@Body() createAplicacionDto: CreateAplicacionDto) {
    return this.aplicacionService.create(createAplicacionDto);
  }

  @Get()
  findAll() {
    return this.aplicacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aplicacionService.findOne(+id);
  }

  // Nueva ruta: Obtiene los pacientes por ID de aplicación
  @Get(':aplicacionID/pacientes')
  async getPacientesPorAplicacion(@Param('aplicacionID') aplicacionID: number) {
    return this.aplicacionService.findPacientesPorAplicacion(aplicacionID);
  }

  @Get(':aplicacionID/usuarios')
  async getUsuariosAplicacion(@Param('aplicacionID') aplicacionID: number) {
    return this.aplicacionService.findUsuariosAplicacion(aplicacionID);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAplicacionDto: UpdateAplicacionDto) {
    return this.aplicacionService.update(+id, updateAplicacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aplicacionService.remove(+id);
  }
}
