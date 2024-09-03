import { Injectable } from '@nestjs/common';

import { Client } from './graphql/types/types';

@Injectable()
export class AppService {
  async getClient(id: string): Promise<Client> {
    //TODO implement
    throw new Error('Method not implemented.');
  }
}
