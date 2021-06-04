import { Injectable, Inject } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { Post } from '../entitys/post.entity';


@Injectable()
export class PostsService {
  constructor(
    @Inject('POSTS_REPOSITORY')
    private PostsRepository: typeof Post
  ) {}

  async findAll(): Promise<Post[]> {
    return this.PostsRepository.findAll<Post>();
  }
}

