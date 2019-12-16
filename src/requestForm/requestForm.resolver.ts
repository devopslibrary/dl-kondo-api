import { RequestFormService } from './requestForm.service';
import { RequestForm } from '../models/requestForm.entity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver('RequestForm')
export class RequestFormResolver {
  constructor(private readonly requestFormService: RequestFormService) {}

  @Mutation(returns => RequestForm)
  async createForm(@Args('formName') formName: string) {
    return this.requestFormService.createForm(formName);
  }

  @Query(returns => [RequestForm])
  async findAllForms(): Promise<RequestForm[]> {
    return this.requestFormService.findAllForms();
  }

  @Query(returns => RequestForm)
  async getForm(@Args('formId') formId: number) {
    return this.requestFormService.getForm(formId);
  }

  @Mutation(returns => RequestForm)
  async updateForm(@Args('requestForm') requestForm: RequestForm) {
    return this.requestFormService.updateForm(requestForm);
  }

  @Mutation(returns => RequestForm)
  async deleteForm(@Args('formId') formId: number) {
    return this.requestFormService.deleteForm(formId);
  }
}
