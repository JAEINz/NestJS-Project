
import { ApiProperty } from '@nestjs/swagger';


export class CreateBoardDto {
  @ApiProperty({ description: 'Title of the post' })
  title: string;

  @ApiProperty({ description: 'Content of the post' })
  content: string;

}
