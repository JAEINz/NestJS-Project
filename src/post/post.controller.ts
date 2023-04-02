import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostDto } from './post.dto';
import { PostService } from './post.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger'


@ApiTags('게시글 API')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiOperation({ summary: '게시글 생성 API', description: '게시글을 생성한다.'})
  @Post('post')
  async create(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto);
    return this.postService.create(createPostDto);
  }
}

