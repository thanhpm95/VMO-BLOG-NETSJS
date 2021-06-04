
import { Post } from '../entitys/post.entity';

export const postsProviders = [
  {
    provide: 'POSTS_REPOSITORY',
    useValue: Post,
  },
];