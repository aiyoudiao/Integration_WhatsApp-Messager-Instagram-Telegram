import { Processor, Process } from '@nestjs/bull';
import bull from 'bull';

@Processor('receive-message')
export class ReceiveMessageProcessor {
  @Process('processMessage')
  async handle(job: bull.Job) {
    console.log('👷 正在处理消息任务:', job.id, job.data);
    await new Promise((res) => setTimeout(res, 1000));
    console.log('✅ 消息处理完成。');
  }
}
