import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
      data: {
        title: createPostDto.title,
        content: createPostDto.content,
      },
    });
  }
}
//export class PostService {}
