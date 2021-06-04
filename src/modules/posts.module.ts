
import { Module } from '@nestjs/common';
import { CatsController } from '../controllers/cats.controller';
import { CatsService } from '../services/cats.service';
import { catsProviders } from '../providers/cats.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CatsController],
  providers: [
    CatsService,
    ...catsProviders,
  ],
})
export class PostsModule {}