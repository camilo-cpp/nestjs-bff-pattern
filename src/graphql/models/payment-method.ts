import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PaymentMethod {
  @Field()
  clientId: string;

  @Field()
  typeCredit: string;

  @Field(() => Int)
  creditLimit: number;

  @Field(() => Int)
  creditUsed: number;

  @Field(() => Int)
  amountAvailable: number;
}
