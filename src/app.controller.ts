import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TenantEntity } from './entities/tenant.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('tenants')
  async createTenant(): Promise<TenantEntity> {
    return await this.appService.createTenant();
  }

  @Post('users')
  async createUser(): Promise<UserEntity> {
    return await this.appService.createUser();
  }
}
