import { ObjectType, Field, Float, Int } from '@nestjs/graphql';

import { Price } from './price';

@ObjectType()
export class Item {
  @Field()
  sku: string;

  @Field()
  title: string;

  @Field()
  categoryId: string;

  @Field()
  category: string;

  @Field()
  brand: string;

  @Field()
  classification: string;

  @Field()
  unitsPerBox: string;

  @Field(() => Float)
  minOrderUnits: number;

  @Field()
  packageDescription: string;

  @Field()
  packageUnitDescription: string;

  @Field(() => Int)
  quantity_max_redeem: number;

  @Field()
  redeem_unit: string;

  @Field()
  order_reason_redeem: string;

  @Field()
  sku_redeem: boolean;

  @Field(() => Price)
  price: Price;

  @Field(() => Int)
  points: number;
}
