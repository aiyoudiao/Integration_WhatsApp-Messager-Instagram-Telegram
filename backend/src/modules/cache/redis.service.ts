// Redis 服务封装
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: Redis;

  constructor(private config: ConfigService) {}

  onModuleInit() {
    this.client = new Redis({
      host: this.config.get('redis.host'),
      port: this.config.get('redis.port'),
    });
    console.log('✅ Redis connected');
  }

  getClient() {
    return this.client;
  }

  async get(key: string) {
    return this.client.get(key);
  }

  async set(key: string, val: string, ttlSeconds?: number) {
    if (ttlSeconds) return this.client.set(key, val, 'EX', ttlSeconds);
    return this.client.set(key, val);
  }

  onModuleDestroy() {
    this.client.quit();
  }
}
