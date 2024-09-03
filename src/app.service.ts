import { Inject, Injectable } from '@nestjs/common';

import { Client } from './graphql/models';
import { HTTP_ADAPTER } from './constants/injections.constants';
import { HttpAdapterPort } from './interfaces/http.port';

@Injectable()
export class AppService {
  constructor(
    @Inject(HTTP_ADAPTER) private readonly httpAdapter: HttpAdapterPort,
  ) {}

  async getClient(id: string): Promise<Client> {
    return await this.httpAdapter.getClient(id);
  }
}
