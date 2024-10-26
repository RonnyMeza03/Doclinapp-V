import { UpdateUsuarioDto } from './../usuarios/dto/update-usuario.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AplicacionService } from './aplicacion.service';
import { CreateAplicacionDto } from './dto/create-aplicacion.dto';
import { UpdateAplicacionDto } from './dto/update-aplicacion.dto';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Controller('aplicacion')
export class AplicacionController {
  constructor(
    private readonly aplicacionService: AplicacionService,
    private readonly usuariosService: UsuariosService,
  ) {}

  @Post()
  async create(
    @Body() createAplicacionDto: CreateAplicacionDto,
    updateUsuario: UpdateUsuarioDto = {},
  ) {
    await this.aplicacionService.create(createAplicacionDto);
    const listaAplicaciones = await this.aplicacionService.findAll();
    const ultimaAplicacionId = listaAplicaciones[listaAplicaciones.length - 1];
    console.log(ultimaAplicacionId);
    updateUsuario.aplicacionID = ultimaAplicacionId.id;
    updateUsuario.nombreAplicacion = ultimaAplicacionId;
    console.log(updateUsuario.aplicacionID);
    const usuario = await this.usuariosService.updateByAuth0(
      createAplicacionDto.idAuth0,
      updateUsuario,
    );
    return {
      message: 'Aplicación creada y usuario actualizado con éxito',
      ultimaAplicacionId,
      usuario,
    };
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
  update(
    @Param('id') id: string,
    @Body() updateAplicacionDto: UpdateAplicacionDto,
  ) {
    return this.aplicacionService.update(+id, updateAplicacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aplicacionService.remove(+id);
  }
}
