import { RequestFormService } from './request.service';
import { RequestForm } from '../models/requestForm.entity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards, Request } from '@nestjs/common';

@Resolver('RequestForm')
export class RequestFormResolver {
  constructor(private readonly requestFormService: RequestFormService) {}

  @Mutation(returns => RequestForm)
  async upsertForm(@Args('requestForm') requestForm: RequestForm) {
    return this.requestFormService.upsertForm(requestForm);
  }

  // @Mutation(returns => RequestForm)
  // async createForm(@Args('name'), name: string) {
  //   return this.requestFormService.createForm(name)
  // }

  /**
   * Returns all organizations that a user has access to.
   */
  @Query(returns => [RequestForm])
  async findAllOrgs(@Request() req): Promise<RequestForm[]> {
    return this.requestFormService.findAllForms();
  }
}
