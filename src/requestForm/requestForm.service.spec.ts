import { Test, TestingModule } from '@nestjs/testing';
import { RequestFormService } from './requestForm.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from '../ormconfig';
import { RequestFormModule } from './requestForm.module';

describe('OrgsService', () => {
  let service: RequestFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RequestFormModule, TypeOrmModule.forRoot(ormconfig)],
    }).compile();

    service = module.get<RequestFormService>(RequestFormService);
  });

  it('should be defined', async () => {
    await expect(service.findAllForms).toBeDefined();
  });
});
