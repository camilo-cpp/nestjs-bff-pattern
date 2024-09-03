import { Client } from 'src/graphql/models';

export interface HttpAdapterPort {
  getClient(id: string): Promise<Client>;
}
