import { Module } from '@nestjs/common';
import { BillingWorkerService } from './billing-worker.service';
import { BillingWorkerController } from './billing-worker.controller';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  controllers: [BillingWorkerController],
  providers: [BillingWorkerService],
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'billing.worker.exchange',
          type: 'topic',
        },
      ],
      uri: 'amqp://guest:guest@127.0.0.1:5672',
    }),
    BillingWorkerModule,
  ],
})
export class BillingWorkerModule {}
