import { Injectable } from '@nestjs/common';
import { Org } from './orgs.entity';

@Injectable()
export class OrgsService {
  private readonly orgs: Org[] = [];

  create(org: Org) {
    this.orgs.push(org);
  }

  findAll(): Org[] {
    return this.orgs;
  }
}
