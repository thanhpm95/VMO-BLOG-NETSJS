
import { Tag } from '../entitys/tag.entity';

export const tagsProviders = [
  {
    provide: 'TAGS_REPOSITORY',
    useValue: Tag,
  },
];