import { Module } from '@nestjs/common';
import { AplicacionService } from './aplicacion.service';
import { AplicacionController } from './aplicacion.controller';
import { Aplicacion } from './entities/aplicacion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Usuarios } from 'src/usuarios/entities/usuario.entity';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { PerfilModule } from 'src/perfil/perfil.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Aplicacion, Paciente, Usuarios]),
    PerfilModule,
  ],
  controllers: [AplicacionController],
  providers: [AplicacionService, UsuariosService],
  exports: [AplicacionService],
})
export class AplicacionModule {}
