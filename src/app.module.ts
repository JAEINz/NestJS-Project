import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { PostService } from './post/post.service';
// import { UserController } from './user/user.controller';
// import { PostController } from './post/post.controller';

@Module({
  imports: [],
  controllers: [AppController/*, UserController, PostController*/],
  providers: [AppService/*, PostService*/],
  exports: [/*PostService*/]
})
export class AppModule {}
