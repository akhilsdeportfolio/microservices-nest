import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop({ default: new Date().toISOString() })
  breed: string;

  @Prop({ type: Object })
  objData: object;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
