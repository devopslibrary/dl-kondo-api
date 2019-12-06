import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { Request } from 'express';
import { Org } from './orgs.entity';
import { OrgsService } from './orgs.service';

@Controller('orgs')
export class OrgsController {
  constructor(private readonly orgsService: OrgsService) {}

  @Get()
  async findAll(@Req() request: Request): Promise<Org[]> {
    return this.orgsService.findAll();
  }

  @Post()
  async create(@Body() org: Org) {
    this.orgsService.createOrg(org);
  }
}
