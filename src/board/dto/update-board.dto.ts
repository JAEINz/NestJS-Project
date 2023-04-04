
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator'

export class UpdateBoardDto {
  @IsString()
  @ApiProperty({
    example: '제목 수정하기',
    description: 'Title of the post'
  })
  title: string;

  @IsString()
  @ApiProperty({
    example: '내용 수정하기',
    description: 'Content of the post'
  })
  content: string;


}