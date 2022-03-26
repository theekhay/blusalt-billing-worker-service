import { AmqpConnection, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { BlusaltResponseStatus } from '../../enums/blusalt.response.enum';
import { ResponseModel } from '../../models/response-model';
import { CreateBillingWorkerDto } from './dto/create-billing-worker.dto';
import { UpdateBillingWorkerDto } from './dto/update-billing-worker.dto';

@Injectable()
export class BillingWorkerService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  @RabbitSubscribe({
    exchange: 'billing.worker.exchange',
    routingKey: 'billing.worker.service',
    queue: 'billing.worker',
  })
  async processFundNew(@Payload() transaction: any) {
    await sleep(1000);
    console.log('createBillingWorkerDto');
    console.log(transaction);

    const data = new ResponseModel(
      BlusaltResponseStatus.SUCCESS,
      'processing successful',
      transaction,
    );
    console.log(data);
    this.amqpConnection.publish('billing.exchange', 'billing.service', data);
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
