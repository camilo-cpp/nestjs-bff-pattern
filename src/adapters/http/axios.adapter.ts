import { ConfigService } from '@nestjs/config';

import axios from 'axios';

import { Client, Pagination, Portfolio } from 'src/graphql/models';
import { HttpAdapterPort } from 'src/interfaces/http.port';
import { ResponseApi } from 'src/interfaces/response.interface';

export class AxiosAdapter implements HttpAdapterPort {
  private readonly apiClientUrl: string;
  private readonly apiPortfolioUrl: string;

  constructor(private readonly configService: ConfigService) {
    this.apiClientUrl = this.configService.get<string>('API_CLIENT');
    this.apiPortfolioUrl = this.configService.get<string>('API_PORTFOLIO');
  }

  async getClient(id: string): Promise<ResponseApi<Client>> {
    const response = await axios.get<ResponseApi<Client>>(
      `${this.apiClientUrl}/client/${id}`,
    );

    return response.data;
  }

  async getClientPortfolio(
    pageSize: number,
    currentPage: number,
    clientId: string,
  ): Promise<{ data: Portfolio[]; pagination: Pagination }> {
    const response = await axios.get(
      `${this.apiPortfolioUrl}/portfolio/client/${clientId}/?pageSize=${pageSize}&currentPage=${currentPage}`,
    );
    return response.data;
  }
}
