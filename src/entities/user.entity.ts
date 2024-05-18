import { CosmosPartitionKey } from '@nestjs/azure-database';

@CosmosPartitionKey('id')
export class UserEntity {
  id: string;

  name: string;

  createdAt: Date;

  updatedAt: Date;
}
