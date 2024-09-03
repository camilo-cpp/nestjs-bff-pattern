import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class CustomerGroup {
  @Field()
  group: string;

  @Field()
  group1: string;

  @Field()
  group2: string;

  @Field()
  group3: string;

  @Field()
  group4: string;

  @Field()
  group5: string;
}
