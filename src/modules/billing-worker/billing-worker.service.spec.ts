import { Test, TestingModule } from '@nestjs/testing';
import { BillingWorkerService } from './billing-worker.service';

describe('BillingWorkerService', () => {
  let service: BillingWorkerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillingWorkerService],
    }).compile();

    service = module.get<BillingWorkerService>(BillingWorkerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
