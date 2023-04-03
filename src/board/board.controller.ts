import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BoardService } from './board.service';
import { CreateBoardDto } from './board.dto';
import { Board } from './board.entity';


@ApiTags('Board API')
@Controller('post')
export class BoardController {
  constructor(private readonly boardService: BoardService) { }

  // @ApiBody({ type: CreatePostDto })
  // @ApiCreatedResponse({ description: '성공' })
  @Post()
  @ApiOperation({ summary: '게시글 생성 API' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    console.log(createBoardDto);
    return this.boardService.create(createBoardDto);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Board,
  })
  findOne(@Param('id') id: string): Board {
    return this.boardService.findOne(+id);
  }
}

