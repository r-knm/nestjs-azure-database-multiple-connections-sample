import { CosmosPartitionKey } from '@nestjs/azure-database';

@CosmosPartitionKey('id')
export class TenantEntity {
  id: string;

  name: string;

  createdAt: Date;

  updatedAt: Date;
}
