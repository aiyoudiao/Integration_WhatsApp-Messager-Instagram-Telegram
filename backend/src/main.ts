import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix(process.env.GLOBAL_PREFIX || '/');
  await app.listen(process.env.PORT || 30766);
  console.log(
    `🚀 Application running on: http://localhost:${process.env.PORT || 30766}`,
  );
}

void bootstrap();
