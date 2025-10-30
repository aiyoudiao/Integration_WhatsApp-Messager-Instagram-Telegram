import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import bull from 'bull';

@Injectable()
export class QueueService {
  constructor(
    @InjectQueue('receive-message') private receiveMessageQueue: bull.Queue,
  ) {}

  async addReceiveMessageJob(data: any) {
    const job = await this.receiveMessageQueue.add('processMessage', data, {
      attempts: 3, // 最多重试 3 次
      backoff: { type: 'exponential', delay: 5000 }, // 5s 指数回退
      removeOnComplete: true, // 成功后删除
      removeOnFail: false, // 失败保留以供排查
    });

    console.log(`[Bull] 任务添加成功: ${job.id}`);
    return job;
  }
}
