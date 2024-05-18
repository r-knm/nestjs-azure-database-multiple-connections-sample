import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';
import { AzureCosmosDbModule } from '@nestjs/azure-database';
import { TenantEntity } from './entities/tenant.entity';
import { UserEntity } from './entities/user.entity';

const TENANT_DB_CONNECTION = 'tenant';
const USER_DB_CONNECTION = 'user';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: false,
      isGlobal: true,
      load: [configuration],
    }),
    AzureCosmosDbModule.forRootAsync({
      connectionName: TENANT_DB_CONNECTION, // Specify the connection name
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        endpoint: configService.get<string>('azCosmos.endpoint'),
        key: configService.get<string>('azCosmos.key'),
        dbName: configService.get<string>('azCosmos.dbId4Tenant'),
      }),
      inject: [ConfigService],
    }),
    AzureCosmosDbModule.forRootAsync({
      connectionName: USER_DB_CONNECTION, // Specify the connection name
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        endpoint: configService.get<string>('azCosmos.endpoint'),
        key: configService.get<string>('azCosmos.key'),
        dbName: configService.get<string>('azCosmos.dbIdr4User'),
      }),
      inject: [ConfigService],
    }),
    AzureCosmosDbModule.forFeature(
      [{ collection: 'Tenants', dto: TenantEntity }],
      TENANT_DB_CONNECTION, // Specify the connection name
    ),
    AzureCosmosDbModule.forFeature(
      [{ collection: 'Users', dto: UserEntity }],
      USER_DB_CONNECTION, // Specify the connection name
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
