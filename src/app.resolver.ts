import { Args, Query, Resolver } from '@nestjs/graphql';

import { AppService } from 'src/app.service';
import { Client } from './graphql/models';

@Resolver(() => Client)
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => Client, { name: 'client' })
  async getCustomer(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Client> {
    return await this.appService.getClient(id);
  }
}
