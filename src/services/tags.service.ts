import { Injectable, Inject } from '@nestjs/common';
import { CreateTagDto } from '../dto/create-tag.dto';
import { Tag } from '../entitys/tag.entity';


@Injectable()
export class TagsService {
  constructor(
    @Inject('TAGS_REPOSITORY')
    private TagsRepository: typeof Tag
  ) {}

  async findAll(): Promise<Tag[]> {
    return this.TagsRepository.findAll<Tag>();
  }
}

