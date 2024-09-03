import { Inject, Injectable } from '@nestjs/common';

import { Client, Pagination, Portfolio } from './graphql/models';
import { HTTP_ADAPTER } from './constants/injections.constants';
import { HttpAdapterPort } from './interfaces/http.port';
import { ResponseApi } from './interfaces/response.interface';

@Injectable()
export class AppService {
  constructor(
    @Inject(HTTP_ADAPTER) private readonly httpAdapter: HttpAdapterPort,
  ) {}

  async getClient(id: string): Promise<ResponseApi<Client>> {
    return await this.httpAdapter.getClient(id);
  }

  async getClientPortfolio(
    pageSize: number,
    currentPage: number,
    clientId: string,
  ): Promise<{ data: Portfolio[]; pagination: Pagination }> {
    return await this.httpAdapter.getClientPortfolio(
      pageSize,
      currentPage,
      clientId,
    );
  }
}
