import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Client } from './client';

@ObjectType()
export class Pagination {
  @Field(() => Int)
  currentPage: number;

  @Field(() => Int)
  pageSize: number;

  @Field(() => Int)
  totalItems: number;

  @Field(() => Int)
  totalPages: number;
}

@ObjectType()
export class ResponseApiClient {
  @Field(() => Int)
  code: number;

  @Field()
  message: string;

  @Field(() => Client)
  data: Client;
}
