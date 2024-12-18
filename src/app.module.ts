import { Module } from '@nestjs/common';
import { AplicacionModule } from './aplicacion/aplicacion.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { DoctorModule } from './doctor/doctor.module';
import { AdminModule } from './admin/admin.module';
import { PacienteModule } from './paciente/paciente.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalisisModule } from './analisis/analisis.module';
import { PerfilModule } from './perfil/perfil.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PaypalModule } from './paypal/paypal.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Doclinapp'),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'contraseñadoclinapp',
      database: 'doclinappnestjs',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AplicacionModule,
    UsuariosModule,
    DoctorModule,
    AdminModule,
    PacienteModule,
    AnalisisModule,
    PerfilModule,
    PaypalModule,
  ],
})
export class AppModule {}
