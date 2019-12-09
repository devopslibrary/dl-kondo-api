import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Org } from './orgs.entity';
import { Setting } from '../settings/settings.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrgsService {
  constructor(
    @InjectRepository(Org)
    private readonly orgRepository: Repository<Org>,
    @InjectRepository(Setting)
    private readonly settingRepository: Repository<Setting>,
  ) {}

  async upsertOrg(org: Org) {
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
