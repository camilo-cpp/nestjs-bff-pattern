import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { AppService } from 'src/app.service';
import {
  Client,
  Pagination,
  Portfolio,
  ResponseApiClient,
} from './graphql/models';
import { ResponseApi } from './interfaces/response.interface';

@Resolver(() => Client)
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => ResponseApiClient, { name: 'client' })
  async getClient(
    @Args('id', { type: () => String }) id: string,
  ): Promise<ResponseApi<Client>> {
    return await this.appService.getClient(id);
  }

  @ResolveField(() => [Portfolio])
  async getClientPortfolio(
    @Parent() client: Client,
    @Args('pageSize', { type: () => Number, nullable: true }) pageSize: number,
    @Args('currentPage', { type: () => Number, nullable: true })
    currentPage: number,
  ): Promise<{ data: Portfolio[]; pagination: Pagination }> {
    return await this.appService.getClientPortfolio(
      pageSize,
      currentPage,
      client.id,
    );
  }
}
