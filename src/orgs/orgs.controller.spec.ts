import { Test, TestingModule } from '@nestjs/testing';
import { OrgsController } from './orgs.controller';
import { OrgsModule } from './orgs.module';

describe('Orgs Controller', () => {
  let controller: OrgsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [OrgsModule],
    }).compile();

    controller = module.get<OrgsController>(OrgsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
