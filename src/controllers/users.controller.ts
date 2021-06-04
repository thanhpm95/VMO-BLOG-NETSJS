import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  helloworld(): string{
    return "Hello world"
  }

  @Get(':id')
  getOneUser(@Param() params): string{
    const id = params.id;
    return `I'm a newbie ${id}`
  }


  @Post()
  createNewUser(@Body() body): Object{
    const username = body.username;
    const password = body.password;
    const fullName = body.fullName;
    const gender = body.gender;
    const type = body.type;

    const newData = {
      username,
      password,
      fullName,
      gender,
      type
    }

    return newData;
  }


  // @Get(':id')
  // getOneFile(@Param() params): string{
  //   const id = params.id;
  //   return `I'm a newbie ${id}`
  // }
}