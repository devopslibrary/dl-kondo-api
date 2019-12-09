import { DynamicModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrgsModule } from './orgs/orgs.module';
import { ConfigModule } from './config/config.module';
import { Connection } from 'typeorm';
import * as ormconfig from './ormconfig';
import { SettingsModule } from './settings/settings.module';

export function DatabaseOrmModule(): DynamicModule {
  return TypeOrmModule.forRoot(ormconfig);
}

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    OrgsModule,
    ConfigModule,
    SettingsModule,
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql' }),
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
