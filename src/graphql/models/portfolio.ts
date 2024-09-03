import { ObjectType, Field, ID } from '@nestjs/graphql';

import { Item } from './item';

@ObjectType()
export class Portfolio {
  @Field(() => ID)
  _id: string;

  @Field()
  channel: string;

  @Field()
  country: string;

  @Field()
  createdDate: string;

  @Field()
  customerCode: string;

  @Field(() => [Item])
  items: Item[];
}
