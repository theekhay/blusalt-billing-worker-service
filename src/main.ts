import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://guest:guest@localhost:5672/hello'],
        queue: 'billing',
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  await app.listen();
  //await app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
