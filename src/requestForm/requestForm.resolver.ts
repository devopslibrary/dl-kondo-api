import { RequestFormService } from './requestForm.service';
import { RequestForm } from '../models/requestForm.entity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards, Request } from '@nestjs/common';
import { TrainingSession } from '../models/trainingSession.entity';

@Resolver('RequestForm')
export class RequestFormResolver {
  constructor(private readonly requestFormService: RequestFormService) {}

  @Mutation(returns => RequestForm)
  async createForm(@Args('formName') formName: string) {
    return this.requestFormService.createForm(formName);
  }

  @Query(returns => [RequestForm])
  async findAllForms(@Request() req): Promise<RequestForm[]> {
    return this.requestFormService.findAllForms();
  }
}
