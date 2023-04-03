
import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardDto {
  @ApiProperty({ description: 'ID of the post' })
  id: number;

  @ApiProperty({ description: 'Title of the post' })
  title: string;

  @ApiProperty({ description: 'Content of the post' })
  content: string;

  @ApiProperty({ description: 'Created date of the post' })
  createAt: Date;

  @ApiProperty({ description: 'Updated date of the post' })
  updateAt: Date;
}