# r-knm/nestjs-azure-database-multiple-connections-sample

下記の技術記事に関連するコードをアップしたリポジトリです。

[NestJSアプリケーションから複数のAzure Cosmos DBへ接続する](https://zenn.dev/logbuild/articles/138820629db049)

## 起動方法

- Node: v20.11.1
  - (Pinned to Package.json by Volta.)
- NestJS: v10

下記のコマンドを実施してください。

1. `npm install`
2. `npm run start:dev`

## アーキテクチャ図

<img width="1776" alt="240519-NestJS-複数CosmosoDB接続" src="https://github.com/r-knm/nestjs-azure-database-multiple-connections-sample/assets/102338067/66229482-5136-4d28-8b9d-7311ad76fb79">

## 動作確認

```
npm run start:dev
[5:10:29 PM] Starting compilation in watch mode...

[5:10:30 PM] Found 0 errors. Watching for file changes.

[Nest] 59293  - 05/19/2024, 5:10:31 PM     LOG [NestFactory] Starting Nest application...
[Nest] 59293  - 05/19/2024, 5:10:31 PM     LOG [InstanceLoader] AzureCosmosDbModule dependencies initialized +7ms
[Nest] 59293  - 05/19/2024, 5:10:31 PM     LOG [InstanceLoader] AzureCosmosDbModule dependencies initialized +0ms
[Nest] 59293  - 05/19/2024, 5:10:31 PM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +0ms
[Nest] 59293  - 05/19/2024, 5:10:31 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +0ms
[Nest] 59293  - 05/19/2024, 5:10:31 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +0ms
[Nest] 59293  - 05/19/2024, 5:10:31 PM     LOG [InstanceLoader] AzureCosmosDbCoreModule dependencies initialized +294ms
[Nest] 59293  - 05/19/2024, 5:10:31 PM     LOG [InstanceLoader] AzureCosmosDbCoreModule dependencies initialized +3ms
[Nest] 59293  - 05/19/2024, 5:10:31 PM     LOG [InstanceLoader] AzureCosmosDbModule dependencies initialized +40ms
[Nest] 59293  - 05/19/2024, 5:10:31 PM     LOG [InstanceLoader] AzureCosmosDbModule dependencies initialized +10ms
[Nest] 59293  - 05/19/2024, 5:10:31 PM     LOG [InstanceLoader] AppModule dependencies initialized +0ms
[Nest] 59293  - 05/19/2024, 5:10:31 PM     LOG [RoutesResolver] AppController {/}: +5ms
[Nest] 59293  - 05/19/2024, 5:10:31 PM     LOG [RouterExplorer] Mapped {/tenants, POST} route +2ms
[Nest] 59293  - 05/19/2024, 5:10:31 PM     LOG [RouterExplorer] Mapped {/users, POST} route +0ms
[Nest] 59293  - 05/19/2024, 5:10:31 PM     LOG [NestApplication] Nest application successfully started +3ms

```

![スクリーンショット 2024-05-18 11 44 13](https://github.com/r-knm/nestjs-azure-database-multiple-connections-sample/assets/102338067/a614eb77-ef6e-4d8f-8025-44834a6c4a94)

![スクリーンショット 2024-05-18 11 44 34](https://github.com/r-knm/nestjs-azure-database-multiple-connections-sample/assets/102338067/a5f6770f-538d-4363-8a45-9ba94a67b13f)
