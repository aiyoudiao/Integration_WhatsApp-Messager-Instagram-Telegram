// 队列模块定义
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ConfigService } from '@nestjs/config';
import { QueueService } from './queue.service';
import { ReceiveMessageProcessor } from './processors/receive-message.processor';

@Module({
  imports: [
    BullModule.registerQueueAsync({
      name: 'receive-message',
      useFactory: (config: ConfigService) => ({
        redis: {
          host: config.get('redis.host'),
          port: config.get('redis.port'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [QueueService, ReceiveMessageProcessor],
  exports: [QueueService],
})
export class QueueModule {}
