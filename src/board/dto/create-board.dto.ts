import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator'

export class CreateBoardDto {
  @IsString()
  @ApiProperty({
    example: '제목을 입력하세요.',
    description: 'Title of the post'
  })
  title: string;

  @IsString()
  @ApiProperty({
    example: '내용을 입력하세요.',
    description: 'Content of the post'
  })
  content: string;

  @IsString()
  @ApiProperty({
    example: 'id를 입력하세요.',
    description: 'id of the ger'
  })
  id: number;


}
