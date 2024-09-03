import { Client, Pagination, Portfolio } from 'src/graphql/models';
import { ResponseApi } from './response.interface';

export interface HttpAdapterPort {
  getClient(id: string): Promise<ResponseApi<Client>>;
  getClientPortfolio(
    pageSize: number,
    currentPage: number,
    clientId: string,
  ): Promise<{ data: Portfolio[]; pagination: Pagination }>;
}
