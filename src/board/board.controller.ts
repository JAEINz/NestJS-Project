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
import { BoardPost } from './entities/board-post.entity';


@ApiTags('Board API')
@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) { }

  @Post()
  @ApiOperation({ summary: '게시글 생성 API' })
  create(@Body() body: CreateBoardDto): Promise<number> {
    return this.boardService.create(body)
  }
  @Get()
  findAll() {
    return this.boardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
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