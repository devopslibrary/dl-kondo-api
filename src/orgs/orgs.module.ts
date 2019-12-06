import { Module } from '@nestjs/common';
import { OrgsController } from './orgs.controller';
import { OrgsService } from './orgs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Org } from './orgs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Org])],
  controllers: [OrgsController],
  providers: [OrgsService],
  exports: [OrgsModule],
})
export class OrgsModule {}
