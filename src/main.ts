// import { NestFactory } from '@nestjs/core';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { AppModule } from './app.module';
// import { PostController } from './post/post.controller';
// //import * as swaggerDocument from './swagger.json';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   const config = new DocumentBuilder()
//     .setTitle('nestproject')
//     .setDescription('nestproject')
//     .setVersion('1.0.0')
//     .addBearerAuth({ type: 'http', scheme: 'bearer', in: 'header'}, 'Bearer')
//     .build();
//   const document = SwaggerModule.createDocument(app, config, {
//     include: [PostController]
//   });
//   SwaggerModule.setup('api/swagger', app, document);

//   await app.listen(3000);
// }
// bootstrap();


import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PostController } from './post/post.controller';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('nestproject')
    .setDescription('nestproject')
    .setVersion('1.0.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', in: 'header'}, 'Bearer')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [PostController]
  });

  const swaggerPath = path.join(__dirname, 'swagger.yaml');
  fs.writeFileSync(swaggerPath, yaml.dump(document));

  const swaggerDoc = yaml.load(fs.readFileSync(swaggerPath, 'utf8'));
  SwaggerModule.setup('api/swagger', app, swaggerDoc);

  await app.listen(3000);
}
bootstrap();