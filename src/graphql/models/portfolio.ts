import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Portfolio {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  portfolioId: string;

  @Field({ nullable: true })
  channel: string;

  @Field({ nullable: true })
  country: string;

  @Field({ nullable: true })
  createdDate: string;

  @Field({ nullable: true })
  customerCode: string;
}
