import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardPost } from './entities/board-post.entity';
import { BoardGetDelete } from './entities/board-get,delete.entity';
import { Prisma } from '@prisma/client';


@Injectable()
export class BoardService {
  constructor(private readonly prisma: PrismaService) { }
  private board: BoardPost[] = [];

  async create(board: Prisma.BoardCreateInput): Promise<number> {
    const createBoard = await this.prisma.board.create({
      data: board,
    });
    return createBoard.id
  }

  // async findAll() {
  //   const boards = await this.prisma.board.findMany()
  //   return boards;
  // }

  findAll(): Promise<BoardPost[]> {
    return this.prisma.board.findMany();
  }

  findOne(id: number): BoardPost {
    return this.board[id];
  }

  update(id: number, UpdateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}



