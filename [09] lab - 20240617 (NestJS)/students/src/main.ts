import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { StudentsModule } from './students.module';

async function bootstrap() {
  //const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create(StudentsModule);
  app.enableCors({ origin: 'http://localhost:4200' });
  await app.listen(3000);
}
bootstrap();
