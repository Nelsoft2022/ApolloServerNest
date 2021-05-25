import {
  Args,
  Query,
  Resolver,
} from '@nestjs/graphql';

import { Product } from './product.model';
import { ProductService } from './product.service';
import {
  ListProductInput,
} from './product.inputs';
@Resolver(() => Product)
export class ProductResolver {
  constructor(private productService: ProductService) { }

  @Query(() => [Product])
  async products(
    // @Args('filters', { nullable: true }) filters?: ListProductInput,
  ) {
    return this.productService.list();
  }

}
