import { ObjectType, Field, Float } from '@nestjs/graphql';

import { Tax } from './tax';

@ObjectType()
export class Price {
  @Field(() => Float)
  full_price: number;

  @Field(() => [Tax])
  taxes: Tax[];
}
