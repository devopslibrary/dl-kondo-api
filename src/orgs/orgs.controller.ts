import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { Request } from 'express';
import { Org } from './interfaces/org.interface';
import { OrgsService } from './orgs.service';
import { CreateOrgDto } from './dto/create-org.dto';

@Controller('orgs')
export class OrgsController {
  constructor(private readonly orgsService: OrgsService) {}

  @Get()
  async findAll(@Req() request: Request): Promise<Org[]> {
    return this.orgsService.findAll();
  }

  @Post()
  async create(@Body() createOrgDto: CreateOrgDto) {
    this.orgsService.create(createOrgDto);
  }
}
