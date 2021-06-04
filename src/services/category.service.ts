import { Injectable, Inject } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { Category } from '../entitys/category.entity';


@Injectable()
export class CategorysService {
  constructor(
    @Inject('CATS_REPOSITORY')
    private categorysRepository: typeof Category
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categorysRepository.findAll<Category>();
  }
}

