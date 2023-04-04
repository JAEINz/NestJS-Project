// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { SwaggerModule } from '@nestjs/swagger';

// @Module({
//   imports: [SwaggerModule],
//   controllers: [AppController],
//   providers: [AppService],
//   exports: [SwaggerModule]
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { BoardModule } from './board/board.module';
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [CatsModule, BoardModule, CrudModule],
})
export class AppModule {}