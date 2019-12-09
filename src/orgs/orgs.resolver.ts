import { OrgsService } from './orgs.service';
import { Org } from './orgs.entity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards, Request } from '@nestjs/common';
import { GraphqlPassportAuthGuard } from '../auth/auth.module';

@Resolver('Org')
export class OrgResolver {
  constructor(private readonly orgsService: OrgsService) {}

  @UseGuards(GraphqlPassportAuthGuard)
  @Mutation(returns => Org)
  async upsertOrg(@Args('org') org: Org) {
    return this.orgsService.upsertOrg(org);
  }

  @UseGuards(GraphqlPassportAuthGuard)
  @Query(returns => [Org])
  async findAllOrgs(@Request() req): Promise<Org[]> {
    return this.orgsService.findAllOrgs();
  }
}
