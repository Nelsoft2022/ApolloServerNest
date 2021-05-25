import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product, ProductDocument } from './product.model';
import {
  ListProductInput,
} from './product.inputs';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) { }


  //list(filters: ListProductInput) {
  list() {
    return this.productModel.find().exec();
  }

}
