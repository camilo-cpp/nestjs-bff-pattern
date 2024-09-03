import { Controller } from '@nestjs/common';
import { Args, Query } from '@nestjs/graphql';

import { AppService } from 'src/app.service';
import { Client } from './graphql/types/types';

@Controller()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query('customer')
  async getCustomer(@Args('id') id: string): Promise<Client> {
    return this.appService.getClient(id);
  }
}
