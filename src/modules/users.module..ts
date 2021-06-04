
import { Module } from '@nestjs/common';
import { UsersController } from '../controllers/index';
import { UsersService } from '../services/index';
import { usersProviders } from '../providers/users.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    ...usersProviders,
  ],
})
export class UsersModule {}