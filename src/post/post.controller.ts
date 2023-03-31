import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostDto } from './post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }
}
// export class PostController {}
