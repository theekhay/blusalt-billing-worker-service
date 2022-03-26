// import { RabbitRPC } from '@golevelup/nestjs-rabbitmq/lib/rabbitmq.decorators';
import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { Controller, Inject } from '@nestjs/common';
import {
  ClientProxy,
  EventPattern,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { BlusaltResponseStatus } from '../../enums/blusalt.response.enum';
import { Container } from '../../enums/container.enum';
import { ResponseModel } from '../../models/response-model';
import { BillingWorkerService } from './billing-worker.service';
import { CreateBillingWorkerDto } from './dto/create-billing-worker.dto';

@Controller()
export class BillingWorkerController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // @Inject(Container.PUBLISHER) private client: ClientProxy,){}

  // async onApplicationBootstrap() {
  //   try {
  //     await this.client.connect();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // @MessagePattern({ cmd: 'billing.exchange' })
  // processFund(@Payload() createBillingWorkerDto: any) {
  //   console.log('createBillingWorkerDto');
  //   console.log(createBillingWorkerDto);
  //   return this.billingWorkerService.create(createBillingWorkerDto);
  // }

  @RabbitRPC({
    exchange: 'billing.exchange',
    routingKey: 'billing.service',
    queue: 'billing',
  })
  processFundNew(@Payload() createBillingWorkerDto: any) {
    console.log('createBillingWorkerDto');
    console.log(createBillingWorkerDto);
    //return this.billingWorkerService.create(createBillingWorkerDto);
  }

  // @EventPattern('billing.exchange')
  // processFunds(@Payload() createBillingWorkerDto: any) {
  //   console.log('createBillingWorkerDto');
  //   console.log(createBillingWorkerDto);
  //   return this.billingWorkerService.create(createBillingWorkerDto);
  // }

  // async pusblishFundStatus(transactionId: string) {
  //   await sleep(100);
  //   const message = this.client.send(
  //     { cmd: 'funding_processing_status' },
  //     new ResponseModel(BlusaltResponseStatus.SUCCESS, 'operation successful', {
  //       transactionId,
  //     }),
  //   );
  //   return message;
  // }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
