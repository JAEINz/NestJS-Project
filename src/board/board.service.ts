import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardPost } from './entities/board-post.entity';
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

  findAll() {
    return `This action returns all board`;
  }

  findOne(id: number) {
    return `This action returns a #${id} board`;
  }

  update(id: number, updateCrudDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}



