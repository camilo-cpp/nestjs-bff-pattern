import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { AppService } from 'src/app.service';
import { Client, Item, Portfolio, ResponseApiClient } from './graphql/models';
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

  @ResolveField(() => Portfolio, { nullable: true })
  async getClientPortfolio(@Parent() client: Client): Promise<Portfolio> {
    return await this.appService.getClientPortfolio(client.id);
  }
}

@Resolver(() => Portfolio)
export class PortfolioResolver {
  constructor(private readonly appService: AppService) {}
  @ResolveField(() => [Item], { nullable: true })
  async getItems(
    @Parent() portfolio: Portfolio,
    @Args('pageSize', { type: () => Number, nullable: false })
    pageSize: number,
    @Args('currentPage', {
      type: () => Number,
      nullable: true,
    })
    currentPage: number,
  ) {
    return await this.appService.getPortfolioItems(
      portfolio.portfolioId,
      pageSize,
      currentPage,
    );
  }
}
