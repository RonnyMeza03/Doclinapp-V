import { PartialType } from '@nestjs/mapped-types';
import { CreateAplicacionDto } from './create-aplicacion.dto';

export class UpdateAplicacionDto extends PartialType(CreateAplicacionDto) {}
