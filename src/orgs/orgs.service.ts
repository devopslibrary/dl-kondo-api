import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Org } from './orgs.entity';
import { Setting } from '../settings/settings.entity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Repository } from 'typeorm';

@Resolver('Orgs')
@Injectable()
export class OrgsService {
  constructor(
    @InjectRepository(Org)
    private readonly orgRepository: Repository<Org>,
    @InjectRepository(Setting)
    private readonly settingRepository: Repository<Setting>,
  ) {}

  @Mutation(returns => Org)
  async upsertOrg(@Args('org') org: Org) {
    // Get Settings
    let _settings = await this.settingRepository.findOne({ id: org.id });
    if (!_settings) {
      _settings = {
        id: org.id,
        nukeStaleBranches: false,
        nukeStalePRs: false,
      };
    }
    await this.settingRepository.save(_settings);
    return this.orgRepository.save(org);
  }

  @Query(returns => [Org])
  async findAllOrgs(): Promise<Org[]> {
    const _orgs = await this.orgRepository.find();
    let orgArray: Org[] = [];
    for (let org of _orgs) {
      org.setting = await this.settingRepository.findOne({ id: org.id });
      orgArray.push(org);
    }
    return orgArray;
  }
}
