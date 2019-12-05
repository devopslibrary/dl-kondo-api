import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrgsModule } from './orgs/orgs.module';
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';
import * as ormconfig from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), OrgsModule, ConfigModule],
  providers: [ConfigService],
})
export class AppModule {}
