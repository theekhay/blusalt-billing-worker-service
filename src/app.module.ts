import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillingWorkerModule } from './modules/billing-worker/billing-worker.module';

@Module({
  imports: [BillingWorkerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
