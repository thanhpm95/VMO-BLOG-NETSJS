import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entitys/user.entity';


@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User
  ) {}

  async getAll(): Promise<User[]> {
    console.log("DOOM")
    return this.usersRepository.findAll<User>();
  }
}

