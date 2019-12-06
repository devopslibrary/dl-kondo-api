import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Org } from './orgs.entity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Repository } from 'typeorm';

@Resolver('Orgs')
@Injectable()
export class OrgsService {
  constructor(
    @InjectRepository(Org)
    private readonly orgRepository: Repository<Org>,
  ) {}

  @Mutation(returns => Org)
  async upsertOrg(@Args('org') org: Org) {
    return await this.orgRepository.save(org);
  }

  @Query(returns => Org)
  async findAll(): Promise<Org[]> {
    return await this.orgRepository.find();
  }
}
