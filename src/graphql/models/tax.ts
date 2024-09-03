import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class Tax {
  @Field()
  taxType: string;

  @Field()
  taxId: string;

  @Field(() => Float)
  rate: number;
}
