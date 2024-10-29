import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuarios } from './entities/usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  //@Body= datos que vienen desde el cliente
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    console.log(createUsuarioDto);
    return this.usuariosService.createUsuario(createUsuarioDto);
  }

  @Get()
  //Promise es para especificar que tipo de dato espera
  findAll(): Promise<Usuarios[]> {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  //             para convertirlo en number
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Patch()
  updateGrupoUsuario(@Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.updateGrupoUsuario(updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.remove(+id);
  }

  @Get(':usuarioId/pacientes')
  async findUsuarioPacientes(@Param('usuarioId') usuarioId: string) {
    return this.usuariosService.findUsuarioPacientesById(usuarioId);
  }

  @Get(':idAuth0/perfil')
  async findUsuarioPerfil(@Param('idAuth0') idAuth0: string) {
    return this.usuariosService.findOneUsuarioIdAuth0(idAuth0);
  }
}
