import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(catage: CreateCatDto): Cat {
    this.cats.push(catage);
    return catage;
  }

  findOne(id: number): Cat {
    return this.cats[id];
  }
}