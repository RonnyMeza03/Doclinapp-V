import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContadorDocument = Contador & Document;

@Schema()
export class Contador {
  @Prop({ required: true, unique: true })
  sequenceName: string;

  @Prop({ required: true })
  seq: number;
}

export const ContadorSchema = SchemaFactory.createForClass(Contador);
