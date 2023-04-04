
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nest Project')
    .setDescription('Nest Project')
    .setVersion('1.0')
    .addTag('BOARD API')
    .build();
  // .addBearerAuth({ type: 'http', scheme: 'bearer', in: 'header'}, 'Bearer')
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();