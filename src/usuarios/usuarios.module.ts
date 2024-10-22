import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from './entities/usuario.entity';
import { AplicacionModule } from 'src/aplicacion/aplicacion.module';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { PerfilModule } from 'src/perfil/perfil.module';

@Module({
  //Indicarle a TypeORM que entidad vamos a estar usando en este modulo
  imports: [
    TypeOrmModule.forFeature([Usuarios, Paciente]),
    AplicacionModule,
    PerfilModule,
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
