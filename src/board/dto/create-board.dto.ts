import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator'

export class CreateBoardDto {
  @IsString()
  @ApiProperty({
    example: '제목 입력하기',
    description: 'Title of the post'
  })
  title: string;

  @IsString()
  @ApiProperty({
    example: '내용 입력하기',
    description: 'Content of the post'
  })
  content: string;


}
