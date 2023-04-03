import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBoardDto } from './board.dto';
import { Board } from './board.entity';

@Injectable()
export class BoardService {
    private readonly board: Board[] = [];

  create(content: CreateBoardDto): Board {
    this.board.push(content);
    return content;
  }
  

  findOne(id: number): Board {
    return this.board[id];
  }
  
  // constructor(private readonly prisma: PrismaService) { }

  // async create(createBoardDto: CreateBoardDto) {
  //   return this.prisma.post.create({
  //     data: {
  //       title: createBoardDto.title,
  //       content: createBoardDto.content,
  //     },
  //   });
  // }
}
