import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';


@InputType()
export class ListProductInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  brand: string;

  @Field(() => String)
  description: string;

  @Field(() => Number)
  price: number;

}
