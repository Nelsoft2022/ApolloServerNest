import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document, Schema as MongooseSchema } from 'mongoose';

@ObjectType()
@Schema()
export class Product {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  brand: string;

  @Field(() => String)
  @Prop()
  description: string;

  @Field(() => Number)
  @Prop()
  price: number;

}

export type ProductDocument = Product & Document;

export const ProductSchema = SchemaFactory.createForClass(Product);
