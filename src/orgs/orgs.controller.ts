import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { Request } from 'express';
import { Org } from './orgs.entity';
import { OrgsService } from './orgs.service';

@Controller('orgs')
export class OrgsController {
  constructor(private readonly orgsService: OrgsService) {}

  @Get()
  async findAllOrgs(@Req() request: Request): Promise<Org[]> {
    return this.orgsService.findAllOrgs();
  }

  @Post()
  async createOrg(@Body() org: Org) {
    this.orgsService.upsertOrg(org);
  }
}
