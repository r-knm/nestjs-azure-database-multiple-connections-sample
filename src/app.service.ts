import { InjectModel } from '@nestjs/azure-database';
import { Injectable } from '@nestjs/common';
import { Container } from '@azure/cosmos';
import { v4 as uuidv4 } from 'uuid';
import { TenantEntity } from './entities/tenant.entity';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(TenantEntity)
    protected readonly tenantsContainer: Container,

    @InjectModel(UserEntity)
    protected readonly usersContainer: Container,
  ) {}

  async createTenant(): Promise<TenantEntity> {
    const now = new Date();
    const newTenant = {
      id: uuidv4(),
      name: 'Acme Corp',
      createdAt: now,
      updatedAt: now,
    };

    const { resource: tenantItem } =
      await this.tenantsContainer.items.create(newTenant);

    return tenantItem;
  }

  async createUser(): Promise<UserEntity> {
    const now = new Date();
    const user = {
      id: uuidv4(),
      name: 'John Doe',
      createdAt: now,
      updatedAt: now,
    };

    const { resource: userItem } = await this.usersContainer.items.create(user);

    return userItem;
  }
}
