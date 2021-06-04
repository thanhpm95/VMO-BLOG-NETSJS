
import { Category } from '../entitys/category.entity';

export const categorysProviders = [
  {
    provide: 'CATEGORYS_REPOSITORY',
    useValue: Category,
  },
];