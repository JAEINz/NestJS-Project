import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBoardDto } from './board.dto';
import { Board } from './board.entity';
import { Prisma } from '@prisma/client'


@Injectable()
export class BoardService {
  constructor(private readonly prisma: PrismaService) { }
  private board: Board[] = [];

  async create(board: Prisma.BoardCreateInput): Promise<number> {
    const createBoard = await this.prisma.board.create({
      data: board,
    });
    return createBoard.id
  }
}






// @Injectable()
// export class BoardService {
//     private readonly board: Board[] = [];

//   create(board: CreateBoardDto): Board {
//     this.board.push(board);
//     return board;
//   }
  

//   findOne(id: number): Board {
//     return this.board[id];
//   }



  
  // constructor(private readonly prisma: PrismaService) { }

  // async create(createBoardDto: CreateBoardDto) {
  //   return this.prisma.post.create({
  //     data: {
  //       title: createBoardDto.title,
  //       content: createBoardDto.content,
  //     },
  //   });
  // }

