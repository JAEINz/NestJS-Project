import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
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

  findAll(): Promise<BoardPost[]> {
    return this.prisma.board.findMany();
  }


  findOne(id: number): Promise<BoardPost> {
    return this.prisma.board.findUnique({
      where: { id: id }
    });
  }

  update(id: number, body: UpdateBoardDto): Promise<BoardPost>{  
    const { title, content } = body;
    return this.prisma.board.update({
      where: { id: id },
      data: { title, content }
    })
  }

  delete(id: number) {
    return this.prisma.board.delete({
      where: { id: id }
    });;
  }
}



