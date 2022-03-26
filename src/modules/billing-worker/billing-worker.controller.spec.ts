import { Test, TestingModule } from '@nestjs/testing';
import { BillingWorkerController } from './billing-worker.controller';
import { BillingWorkerService } from './billing-worker.service';

describe('BillingWorkerController', () => {
  let controller: BillingWorkerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillingWorkerController],
      providers: [BillingWorkerService],
    }).compile();

    controller = module.get<BillingWorkerController>(BillingWorkerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
