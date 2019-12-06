import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrgsModule } from './orgs/orgs.module';
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';
import * as ormconfig from './ormconfig';
import { Connection } from 'typeorm';

export function DatabaseOrmModule(): DynamicModule {
  // we could load the configuration from dotEnv here,
  // but typeORM cli would not be able to find the configuration file.

  return TypeOrmModule.forRoot(ormconfig);
}

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), OrgsModule, ConfigModule],
  providers: [ConfigService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
