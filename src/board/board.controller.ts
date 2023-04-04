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
  @ApiOperation({ summary: '전체 게시글 조회 API' })
  async findAll() {
    const boards = await this.boardService.findAll();
    return boards;
  }

  @Get(':id')
  @ApiOperation({ summary: 'id로 게시글 조회 API' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: BoardPost,
  })
  findOne(@Param('id') id: string): BoardPost {
    return this.boardService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '게시글 수정 API' })
  update(@Param('id') id: string, @Body() updateCrudDto: UpdateBoardDto) {
    return this.boardService.update(+id, updateCrudDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '게시글 삭제ㅋ API' })
  remove(@Param('id') id: string) {
    return this.boardService.remove(+id);
  }

}