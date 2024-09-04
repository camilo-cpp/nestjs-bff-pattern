import { ConfigService } from '@nestjs/config';

import axios from 'axios';

import { Client, Item, Portfolio } from 'src/graphql/models';
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

  async getClientPortfolio(clientId: string): Promise<Portfolio> {
    const response = await axios.get(
      `${this.apiPortfolioUrl}/portfolio/client/${clientId}`,
    );
    return response.data;
  }

  async getPortfolioItems(
    portfolioId: string,
    pageSize: number,
    currentPage: number,
  ): Promise<Item[]> {
    const response = await axios.get(
      `${this.apiPortfolioUrl}/portfolio/items/client/${portfolioId}?pageSize=${pageSize}&currentPage=${currentPage}`,
    );
    return response.data;
  }
}
