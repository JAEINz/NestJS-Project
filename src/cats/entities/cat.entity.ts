import { ApiProperty } from '@nestjs/swagger';

export class Cat {

  @ApiProperty({
    example: 3,description: 'test1'
  })
  age: number;

  @ApiProperty({
    example: '1',
    description: 'test2',
  })
  breed: string;
}