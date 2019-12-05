import { Module } from '@nestjs/common';
import { OrgController } from '../../../dl-web-api/src/controller/org';
import { OrgsService } from './orgs.service';

@Module({
  controllers: [OrgController],
  providers: [OrgsService],
  exports: [OrgsModule],
})
export class OrgsModule {}
