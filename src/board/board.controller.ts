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
  async findOne(@Param('id') id: string) {
    const board = await this.boardService.findOne(+id);
    return board;
  }

  @Patch(':id')
  @ApiOperation({ summary: '게시글 수정 API' })
  update(@Param('id') id: string, @Body() UpdateBoardDto: UpdateBoardDto) {
    return this.boardService.update(+id, UpdateBoardDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '게시글 삭제 API' })
  delete(@Param('id') id: string) {
    return this.boardService.delete(+id);
  }

}