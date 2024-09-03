import { Client } from 'src/graphql/types/types';

export interface HttpAdapterPort {
  getClient(id: string): Promise<Client>;
}
