import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthorModule } from './infrastructure/controllers/authors/author.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthorModule);
  await app.listen(3000);
}
bootstrap();
