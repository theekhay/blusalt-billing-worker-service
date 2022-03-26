import { PartialType } from '@nestjs/mapped-types';
import { CreateBillingWorkerDto } from './create-billing-worker.dto';

export class UpdateBillingWorkerDto extends PartialType(CreateBillingWorkerDto) {
  id: number;
}
