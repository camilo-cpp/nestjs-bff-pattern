import { Client, Item, Portfolio } from 'src/graphql/models';
import { ResponseApi } from './response.interface';

export interface HttpAdapterPort {
  getClient(id: string): Promise<ResponseApi<Client>>;
  getClientPortfolio(clientId: string): Promise<Portfolio>;
  getPortfolioItems(
    portfolioId: string,
    pageSize: number,
    currentPage: number,
  ): Promise<Item[]>;
}
