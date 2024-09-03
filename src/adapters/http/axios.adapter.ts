import { ConfigService } from '@nestjs/config';

import axios from 'axios';

import { Client } from 'src/graphql/models';
import { HttpAdapterPort } from 'src/interfaces/http.port';

export class AxiosAdapter implements HttpAdapterPort {
  private readonly apiClientUrl: string;

  constructor(private readonly configService: ConfigService) {
    this.apiClientUrl = this.configService.get<string>('API_CLIENT');
  }

  async getClient(id: string): Promise<Client> {
    const response = await axios.get(`${this.apiClientUrl}/client/${id}`);
    return response.data;
  }
}
