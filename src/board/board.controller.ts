import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardGetDelete } from './entities/board-get,delete.entity';
import { BoardPost } from './entities/board-post.entity';
import { Board } from '@prisma/client';


@ApiTags('Board API')
@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  @ApiOperation({ summary: '게시글 생성 API' })
  create(@Body() body: CreateBoardDto): Promise<number> {
    return this.boardService.create(body)
  }
  @Get()
  async findAll() {
    const boards = await this.boardService.findAll();
    return boards;
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: BoardPost,
  })
  findOne(@Param('id') id: string): BoardPost {
    return this.boardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrudDto: UpdateBoardDto) {
    return this.boardService.update(+id, updateCrudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardService.remove(+id);
  }

}