import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuarios } from './entities/usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  //@Body= datos que vienen desde el cliente
  create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<Usuarios> {
    return this.usuariosService.createUsuario(createUsuarioDto);
  }

  @Get()
  //Promise es para especificar que tipo de dato espera
  findAll(): Promise<Usuarios[]> {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  //             para convertirlo en number
  findOne(@Param('id', ParseIntPipe) id:number ): Promise<Usuarios>{
    return this.usuariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
